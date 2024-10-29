import * as React from "react";
import Box from "@mui/material/Box";
import RouteComponents from "./Route";
import { useLocation, matchPath } from "react-router-dom";
import Breadcrumbs_UI from "./Components/Breadcrumbs/Breadcrumbs";
import Navbar from "./Components/common/Navbar/Navbar";
import routes from "./routes"; // นำเข้า routes จากไฟล์ routes.js

export default function MainContent() {
  const locationPath = useLocation();

  // ตรวจสอบว่าเส้นทางใดตรงกับ path ปัจจุบัน
  const matchedRoute = routes.find((route) =>
    matchPath(route.path, locationPath.pathname)
  );

  return (
    <>
      {matchedRoute && matchedRoute.showAppBar && (
        <>
          <Navbar />
          <Box component="div" sx={{ pb: "72px" }} />
          <div className="container mx-auto">
            <div className="flex flex-col flex-wrap gap-4 items-end">
              <Breadcrumbs_UI currentRoute={matchedRoute} />
            </div>
          </div>
        </>
      )}
      <RouteComponents />
    </>
  );
}
