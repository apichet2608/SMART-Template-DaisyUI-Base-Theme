import React from "react";
import ListItemWithMainIcon from "./ListItem/ListItemWithMainIcon/ListItemWithMainIcon";
import ListItemWithMainIconandSubIcon from "./ListItem/ListItemWithMainIconandSubIcon/ListItemWithMainIconandSubIcon";
import TitleDrawer from "./TitleDrawer";
import { Link } from "./Link";

function ListButton({ closeDrawer }) {
  const { Grp1, Grp2 } = Link();
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-100 text-base-content rounded-r-xl">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      <ListItemWithMainIcon
        iconPaths={Grp1.Iconsmain}
        title={Grp1.Title}
        links={Grp1.SubPath} // ใช้ลิงก์ที่นำเข้ามา
        closeDrawer={closeDrawer}
      />
      <li></li>
      <ListItemWithMainIconandSubIcon
        iconPaths={Grp2.Iconsmain}
        title={Grp2.Title}
        links={Grp2.SubPath}
        closeDrawer={closeDrawer}
      />
    </ul>
  );
}

export default ListButton;
