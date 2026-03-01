"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { salesPoints } from "@/lib/salesPoints";
import { useEffect, useRef } from "react";

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

const hqSvg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="56" viewBox="0 0 40 56"><path d="M20 0C9 0 0 9 0 20c0 15 20 36 20 36s20-21 20-36C40 9 31 0 20 0z" fill="#3d6b4a" stroke="#fff" stroke-width="2"/><circle cx="20" cy="20" r="10" fill="#fff"/><text x="20" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#3d6b4a">&#9733;</text></svg>`);

const hqIcon = new L.Icon({
  iconUrl: `data:image/svg+xml,${hqSvg}`,
  iconSize: [40, 56],
  iconAnchor: [20, 56],
  popupAnchor: [0, -56],
});

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

function HQMarker({ point }: { point: (typeof salesPoints)[0] }) {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;
    const el = marker.getElement();
    if (el) el.classList.add("hq-bounce");
  });

  const mapsHref =
    point.mapsUrl ?? `https://www.google.com/maps?q=${point.lat},${point.lng}`;

  return (
    <Marker
      ref={markerRef}
      position={[point.lat, point.lng]}
      icon={hqIcon}
      zIndexOffset={1000}
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
        <br />
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-blue-600 hover:underline"
        >
          Otwórz w Google Maps &rarr;
        </a>
      </Popup>
    </Marker>
  );
}

export default function SalesMapInner() {
  return (
    <>
      <style>{`
        @keyframes hq-bounce {
          0%, 100% { margin-top: 0; }
          50% { margin-top: -8px; }
        }
        .hq-bounce { animation: hq-bounce 1.5s ease-in-out infinite; }
      `}</style>
      <MapContainer
        center={[51.2, 17.05]}
        zoom={10}
        scrollWheelZoom={true}
        className="h-[400px] w-full sm:h-[500px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds />
        {salesPoints.map((point) =>
          point.isHQ ? (
            <HQMarker key={point.id} point={point} />
          ) : (
            <Marker
              key={point.id}
              position={[point.lat, point.lng]}
              icon={defaultIcon}
            >
              <Popup>
                <strong className="text-sm">{point.name}</strong>
                <br />
                <span className="text-xs text-neutral-600">
                  {point.address}
                </span>
                {point.description && (
                  <>
                    <br />
                    <span className="text-xs text-neutral-500">
                      {point.description}
                    </span>
                  </>
                )}
                <br />
                <a
                  href={
                    point.mapsUrl ??
                    `https://www.google.com/maps?q=${point.lat},${point.lng}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-blue-600 hover:underline"
                >
                  Otwórz w Google Maps &rarr;
                </a>
              </Popup>
            </Marker>
          ),
        )}
      </MapContainer>
    </>
  );
}
