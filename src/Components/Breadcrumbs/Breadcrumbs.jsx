import React from "react";

function Breadcrumbs_UI({ currentRoute }) {
  return (
    <div className="breadcrumbs text-sm text-base-content">
      <ul>
        {currentRoute.breadcrumbs.map((item, index) => (
          <li key={index}>
            {currentRoute.breadcrumbs.length === index + 1 ? (
              <p className="font-bold">{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumbs_UI;
