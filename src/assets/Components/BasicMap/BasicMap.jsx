import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function BasicMap({ cityCoordinates, name }) {
  const position = [36.7631 , 45.7222]; // مختصات مهاباد

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "30vh", width: "100%" }}
    >
      {/* لایه نقشه (مثلاً OpenStreetMap) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* یک مارکر روی نقشه */}
      <Marker position={position}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}
