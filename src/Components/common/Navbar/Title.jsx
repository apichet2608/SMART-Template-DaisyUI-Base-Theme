import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Title mappings for paths
const titleMap = {
  "/": "Smart Factory System",
  "/smart-web-app/": "Smart Factory System",
  "/smart-web-app/test_camera": "TEST CAMERA",
};

function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("Smart Factory System");

  useEffect(() => {
    // Update title based on the current path
    setTitle(titleMap[location.pathname] || "Smart Factory System");
  }, [location]);

  return <a className="font-semibold font-Inter mx-4">{title}</a>;
}

export default Title;
