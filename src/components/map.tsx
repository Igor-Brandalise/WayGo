import { MapContainer, TileLayer } from "react-leaflet";
import { useRef } from "react";
import { Pesquisa } from "./input";
import L, { Map as LeafletMap } from "leaflet";

export function Map() {
  const mapRef = useRef<L.Map | null>(null);

  const handleSearch = async (query: string) => {
    if (!query) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.length > 0 && mapRef.current) {
      const { lat, lon } = data[0];
      const latitude = parseFloat(lat);
      const longitude = parseFloat(lon);

      mapRef.current.setView([latitude, longitude], 15);
    }
  };

  return (
    <div className="relative h-screen w-full">
      <MapContainer
        center={[50.5, 30.5]}
        zoom={13}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: 0,
        }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>

      <div className="absolute top-4 left-12 z-50 ">
        <Pesquisa onSearch={handleSearch} />
      </div>
    </div>
  );
}
