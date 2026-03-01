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

const hqIcon = new L.DivIcon({
  html: `<div style="
    width: 38px; height: 38px;
    background: #4a7c59;
    border: 3px solid #fff;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    display: flex; align-items: center; justify-content: center;
  "><div style="
    transform: rotate(45deg);
    color: #fff; font-size: 16px; font-weight: bold;
  ">&#9733;</div></div>`,
  className: "hq-marker-bounce",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
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

function BouncingMarker({ point }: { point: (typeof salesPoints)[0] }) {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    const el = markerRef.current?.getElement();
    if (!el) return;
    el.style.animation = "bounce-marker 1s ease infinite";
  }, []);

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
        @keyframes bounce-marker {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hq-marker-bounce { background: none !important; border: none !important; }
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
            <BouncingMarker key={point.id} point={point} />
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
