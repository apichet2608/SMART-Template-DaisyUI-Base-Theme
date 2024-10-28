import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/smart-factory-dashboard/dashboard":
        setTitle("Dashboard");
        break;
      case "/smart-factory-dashboard/1":
        setTitle("Report 1");
        break;
      case "/smart-factory-dashboard/2":
        setTitle("Report 2");
        break;
      default:
        setTitle("Smart Factory System");
    }
  }, [location]);

  return (
    <>
      <a className="font-semibold font-Inter mx-4">{title}</a>
    </>
  );
}

export default Title;
