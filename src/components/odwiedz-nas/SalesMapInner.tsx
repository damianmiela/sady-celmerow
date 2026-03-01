"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { salesPoints } from "@/lib/salesPoints";
import { useEffect } from "react";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
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

export default function SalesMapInner() {
  return (
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
      {salesPoints.map((point) => (
        <Marker key={point.id} position={[point.lat, point.lng]} icon={icon}>
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
              href={`https://www.google.com/maps?q=${point.lat},${point.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              Otwórz w Google Maps &rarr;
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
