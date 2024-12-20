import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./Page/NotFoundPage/main/NotFoundPage";
import routes from "./routes";

function RouteComponents() {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.Element />} /> // Use JSX to render the component
        ))}
        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
