import { MapContainer, TileLayer, useMap } from "react-leaflet";

function MyComponent() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  return null;
}

export function Map() {
  return (
    <MapContainer
      center={[50.5, 30.5]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MyComponent />
    </MapContainer>
  );
}
