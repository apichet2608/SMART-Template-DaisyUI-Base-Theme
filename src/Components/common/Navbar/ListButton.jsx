import React from "react";
import ListItem from "./ListItem/ListItem_1/ListItem_1";
import ListItem_2 from "./ListItem/ListiTem_2/ListiTem_2";
import ListItem_3 from "./ListItem/ListItem_3/ListItem_3";
import ListItem_4 from "./ListItem/ListItem_4/ListItem_4";
import TitleDrawer from "./TitleDrawer";

import DashboardIcon from "/Icon/Common/icons8-dashboard-96.png";
import ReportIcon from "/Icon/Common/report.png";
import IOT from "/Icon/Common/iot.png";
import SMF from "/Icon/Common/industry-40.png";

function ListButton({ closeDrawer }) {
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-100 text-base-content rounded-r-xl ">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      <ListItem
        iconPaths={[{ img: DashboardIcon }]}
        title="Web APP"
        links={[{ path: "/smart-web-app/", label: "WEB-APP" }]}
        closeDrawer={closeDrawer}
      />
      <li></li>
    </ul>
  );
}

export default ListButton;
