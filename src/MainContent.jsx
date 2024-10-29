import * as React from "react";
import Box from "@mui/material/Box";
import RouteComponents from "./Route";
import { useLocation, matchPath } from "react-router-dom";
import Breadcrumbs_UI from "./Components/Breadcrumbs/Breadcrumbs";
import Navbar from "./Components/common/Navbar/Navbar";

export default function MainContent() {
  const locationPath = useLocation();

  const ShowAppbar = ["/smart-web-app/"];

  const shouldShowAppBar = ShowAppbar.some((path) =>
    matchPath(path, locationPath.pathname)
  );
  return (
    <>
      {shouldShowAppBar && (
        <>
          <Navbar />
          <Box component="div" sx={{ pb: "72px" }} />
          <div className="container mx-auto ">
            <div className="flex flex-col flex-wrap gap-4 items-end">
              <Breadcrumbs_UI />
            </div>
          </div>
        </>
      )}
      <RouteComponents />
    </>
  );
}
