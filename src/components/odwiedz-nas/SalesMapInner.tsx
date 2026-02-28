"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { salesPoints } from "@/lib/salesPoints";

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

const center = salesPoints.length
  ? { lat: salesPoints[0].lat, lng: salesPoints[0].lng }
  : { lat: 51.31, lng: 17.06 };

export default function SalesMapInner() {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[400px] w-full sm:h-[500px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
