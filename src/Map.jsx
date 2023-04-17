import Map from "react-map-gl";
import React, { useRef, useState } from "react";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import Navbar from "./components/Navbar";

function Map2() {
  const mapRef = React.useRef(() => {}, []);
  const toast = useRef(null);
  const [mapStyle, setMapStyle] = useState("streets-v9");
  const items = [
    {
      label: "Add",
      icon: "pi pi-pencil",
      command: () => {
        toast.current.show({
          severity: "info",
          summary: "Add",
          detail: "Data Added",
        });
      },
    },
    {
      label: "Statellite",
      icon: "pi pi-globe",
      command: () => {
        setMapStyle("satellite-streets-v12");
      },
    },
    {
      label: "lght",
      icon: "pi pi-sun",
      command: () => {
        setMapStyle("streets-v12");
      },
    },
    {
      label: "dark",
      icon: "pi pi-moon",
      command: () => {
        setMapStyle("dark-v11");
      },
    },
  ];

  return (
    <>
      <Map
        initialViewState={{
          longitude: 51.4182,
          latitude: 35.7041,
          zoom: 9,
          maxZoom: 18,
          minZoom: 4.8,
          bearing: 5,
        }}
        ref={mapRef}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle={"mapbox://styles/mapbox/" + mapStyle}
      >
        {" "}
        <Navbar />
      </Map>
      <Toast ref={toast} />
      <SpeedDial
        model={items}
        radius={120}
        type="quarter-circle"
        direction="up-left"
        style={{ right: 8, bottom: 25 }}
        buttonClassName="p-button-help"
      />
    </>
  );
}

export default Map2;
