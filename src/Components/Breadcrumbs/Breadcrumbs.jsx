import React from "react";
import { useLocation, matchPath } from "react-router-dom";

function Breadcrumbs_UI() {
  const location = useLocation(); // ใช้เพื่อตรวจสอบ path ปัจจุบัน

  // เส้นทางที่มี dynamic parameters
  const dynamicPaths = [
    {
      path: "/smart-web-app/",
      breadcrumbs: ["Home"],
    },
  ];

  // ตรวจสอบว่ามีเส้นทางไหนตรงกับ path ปัจจุบันหรือไม่
  const matchedPath = dynamicPaths.find((route) =>
    matchPath(route.path, location.pathname)
  );

  return (
    <>
      <div className="breadcrumbs text-sm  text-base-content">
        <ul>
          {matchedPath.breadcrumbs.map((item, index) => (
            <li key={index}>
              {matchedPath.breadcrumbs.length === index + 1 ? (
                <>
                  <p className="font-bold ">{item}</p>
                </>
              ) : (
                <>
                  <p className=" ">{item}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Breadcrumbs_UI;
