import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { Pesquisa } from "./input";

function MyComponent() {
  const map = useMap();

  const [center, setCenter] = useState([55.5, 30.9]);

  useEffect(() => {
    const handleMove = () => {
      const novoCentro = map.getCenter();
      setCenter([novoCentro.lat, novoCentro.lng]);

      console.log(novoCentro);
    };

    map.on("moveend", handleMove);
    return () => {
      map.off("moveend", handleMove);
    };
  }, [map]);

  return null;
}

export function Map() {
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
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <MyComponent />
      </MapContainer>

      <div className="absolute top-4 left-12 z-50 ">
        <Pesquisa />
      </div>
    </div>
  );
}
