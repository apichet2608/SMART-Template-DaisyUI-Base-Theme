import React from "react";
import ListItemWithMainIcon from "./ListItem/ListItem_1/ListItem_1";
import ListItemWithMainIconandSubIcon from "./ListItem/ListiTem_2/ListiTem_2";
import TitleDrawer from "./TitleDrawer";

import DashboardIcon from "/Icon/Common/icons8-dashboard-96.png";

const example_1 = {
  Iconsmain: DashboardIcon,
  SubPath: [
    { path: "/smart-web-app/", label: "WEB-APP" },
    { path: "/smart-web-app/test_camera", label: "TEST_CAMERA" },
  ],
};

const example_2 = {
  Iconsmain: DashboardIcon,
  SubPath: [
    {
      path: "/smart-web-app/",
      label: "WEB-APP",
      icon: DashboardIcon, // Icon for WEB-APP
    },
    {
      path: "/smart-web-app/test_camera",
      label: "TEST_CAMERA",
      icon: DashboardIcon, // Icon for TEST_CAMERA
    },
  ],
};

function ListButton({ closeDrawer }) {
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-100 text-base-content rounded-r-xl">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      <ListItemWithMainIcon
        iconPaths={example_1.Iconsmain}
        title="Web APP"
        links={example_1.SubPath} // ใช้ลิงก์ที่นำเข้ามา
        closeDrawer={closeDrawer}
      />
      <li></li>
      <ListItemWithMainIconandSubIcon
        iconPaths={example_2.Iconsmain}
        title="Web APP"
        links={example_2.SubPath}
        closeDrawer={closeDrawer}
      />
    </ul>
  );
}

export default ListButton;
