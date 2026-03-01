"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { salesPoints, type SalesPoint } from "@/lib/salesPoints";
import { useEffect, useRef, useState, useCallback } from "react";
import { MapPin, ExternalLink } from "lucide-react";

function makeSvgIcon(fill: string, size: number) {
  const svg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${Math.round(size * 1.4)}" viewBox="0 0 40 56"><path d="M20 0C9 0 0 9 0 20c0 15 20 36 20 36s20-21 20-36C40 9 31 0 20 0z" fill="${fill}" stroke="#fff" stroke-width="2"/><circle cx="20" cy="20" r="8" fill="#fff" opacity="0.9"/></svg>`,
  );
  const h = Math.round(size * 1.4);
  return new L.Icon({
    iconUrl: `data:image/svg+xml,${svg}`,
    iconSize: [size, h],
    iconAnchor: [size / 2, h],
    popupAnchor: [0, -h],
  });
}

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const hqIcon = makeSvgIcon("#3d6b4a", 38);
const hoverIcon = makeSvgIcon("#c2410c", 34);

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    if (salesPoints.length === 0) return;
    const bounds = L.latLngBounds(
      salesPoints.map((p) => [p.lat, p.lng] as [number, number]),
    );
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map]);
  return null;
}

function MapMarkers({
  onMarkerClick,
  activeId,
  hoveredId,
}: {
  onMarkerClick: (id: string) => void;
  activeId: string | null;
  hoveredId: string | null;
}) {
  const markerRefs = useRef<Record<string, L.Marker | null>>({});

  useEffect(() => {
    if (!activeId) return;
    const marker = markerRefs.current[activeId];
    if (marker) marker.openPopup();
  }, [activeId]);

  const getIcon = (point: SalesPoint) => {
    if (point.isHQ) return hqIcon;
    if (hoveredId === point.id) return hoverIcon;
    return defaultIcon;
  };

  return (
    <>
      {salesPoints.map((point) => (
        <Marker
          key={point.id}
          position={[point.lat, point.lng]}
          icon={getIcon(point)}
          zIndexOffset={
            point.isHQ ? 1000 : hoveredId === point.id ? 900 : 0
          }
          ref={(ref) => {
            markerRefs.current[point.id] = ref as unknown as L.Marker | null;
          }}
          eventHandlers={{
            click: () => onMarkerClick(point.id),
          }}
        >
          <Popup>
            <strong className="text-sm">{point.name}</strong>
            <br />
            <span className="text-xs text-neutral-600">{point.address}</span>
            {point.description && (
              <>
                <br />
                <span className="text-xs text-neutral-500">
                  {point.description}
                </span>
              </>
            )}
            {point.mapsUrl && (
              <>
                <br />
                <a
                  href={point.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-blue-600 hover:underline"
                >
                  Google Maps &rarr;
                </a>
              </>
            )}
          </Popup>
        </Marker>
      ))}
    </>
  );
}

function MapController({
  targetId,
  onDone,
}: {
  targetId: string | null;
  onDone: () => void;
}) {
  const map = useMap();
  useEffect(() => {
    if (!targetId) return;
    const point = salesPoints.find((p) => p.id === targetId);
    if (!point) return;
    map.flyTo([point.lat, point.lng], 14, { duration: 0.8 });
    onDone();
  }, [targetId, map, onDone]);
  return null;
}

export default function SalesMapInner() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [flyToId, setFlyToId] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSidebarClick = useCallback((id: string) => {
    setActiveId(id);
    setFlyToId(id);
  }, []);

  const handleMarkerClick = useCallback((id: string) => {
    setActiveId(id);
    const el = document.getElementById(`sp-${id}`);
    if (el && sidebarRef.current) {
      sidebarRef.current.scrollTo({
        top: el.offsetTop - sidebarRef.current.offsetTop - 8,
        behavior: "smooth",
      });
    }
  }, []);

  const clearFlyTo = useCallback(() => setFlyToId(null), []);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl shadow-md md:flex-row">
      <style>{`
        .leaflet-popup-content { margin: 10px 12px !important; max-width: 200px; }
        .leaflet-popup { z-index: 1100 !important; }
      `}</style>

      <div className="relative z-0 w-full md:w-2/3">
        <MapContainer
          center={[51.2, 17.05]}
          zoom={10}
          scrollWheelZoom={true}
          className="h-[350px] w-full sm:h-[450px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds />
          <MapMarkers
            onMarkerClick={handleMarkerClick}
            activeId={activeId}
            hoveredId={hoveredId}
          />
          <MapController targetId={flyToId} onDone={clearFlyTo} />
        </MapContainer>
      </div>

      <div
        ref={sidebarRef}
        className="h-[280px] overflow-y-auto border-t border-sage-200 bg-cream-50 md:h-[450px] md:w-1/3 md:border-l md:border-t-0"
      >
        <div className="sticky top-0 z-10 border-b border-sage-200 bg-cream-50 px-4 py-2.5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-sage-600">
            Punkty sprzedaży ({salesPoints.length})
          </h4>
        </div>
        {salesPoints.map((point) => (
          <button
            key={point.id}
            id={`sp-${point.id}`}
            onClick={() => handleSidebarClick(point.id)}
            onMouseEnter={() => setHoveredId(point.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`w-full border-b border-sage-100 px-4 py-3 text-left transition-colors hover:bg-sage-50 ${
              activeId === point.id ? "bg-sage-100" : ""
            }`}
          >
            <div className="flex items-start gap-2.5">
              <MapPin
                size={16}
                className={`mt-0.5 flex-shrink-0 ${
                  point.isHQ ? "text-sage-700" : "text-sage-400"
                }`}
              />
              <div className="min-w-0">
                <p
                  className={`text-sm leading-tight ${
                    point.isHQ
                      ? "font-bold text-sage-700"
                      : "font-medium text-sage-700"
                  }`}
                >
                  {point.name}
                </p>
                <p className="mt-0.5 text-xs text-neutral-500">
                  {point.address}
                </p>
                {point.mapsUrl && (
                  <a
                    href={point.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
                  >
                    Google Maps
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
