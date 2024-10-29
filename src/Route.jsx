import React from "react";
import { Route, Routes } from "react-router-dom";
import Draf from "./Page/Draf/Draf";
import NotFoundPage from "./Page/NotFoundPage/main/NotFoundPage";

function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Draf />} />
        <Route path="/smart-web-app/" element={<Draf />} />
        <Route path="/smart-web-app/test_camera" element={<Draf />} />
        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
