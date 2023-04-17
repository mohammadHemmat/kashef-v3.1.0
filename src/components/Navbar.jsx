import React from "react";
import { Menubar } from "primereact/menubar";
import { SlideMenu } from "primereact/slidemenu";
import { InputText } from "primereact/inputtext";

function Navbar() {
  const items = [
    {
      label: "Map",
    },
    {
      label: "Analysis",
    },
    {
      label: "Report",
      // icon: "pi pi-fw pi-user",
      // items: [],
    },
    {
      label: "Admin Setting",
      // icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Upload EI",
          // icon: "pi pi-fw pi-pencil",
          // items: [],
        },
        {
          label: "Legends",
          // icon: "pi pi-fw pi-calendar-times",
          // items: [],
        },
        {
          label: "User Logs",
        },
      ],
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="./images/kashef-logo-v2.svg"
      className="relative right-20"
    ></img>
  );
  const end = (
    <InputText
      placeholder="Search"
      type="text"
      className="relative right-4 h-8"
    />
  );

  return (
    <div className="relative">
      <Menubar model={items} start={start} end={end} className=""></Menubar>
    </div>
  );
}

export default Navbar;
