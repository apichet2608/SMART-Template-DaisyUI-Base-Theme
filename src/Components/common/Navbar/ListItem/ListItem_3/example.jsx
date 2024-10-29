import React from "react";
import ListItem_3 from "./ListItem_3";

const exampleIconPaths = [
  { img: "/Icon/Common/icons8-dashboard-96.png" }, // Main section icon
];

const exampleLinks = [
  {
    path: "/smart-web-app/",
    label: "WEB-APP",
    iconSub: "/Icon/Common/icons8-web-app-96.png",
  },
  {
    path: "/smart-web-app/test_camera",
    label: "TEST_CAMERA",
    iconSub: "/Icon/Common/icons8-test-camera-96.png",
    sublabel: [
      {
        path: "/smart-web-app/test_camera/option1",
        label: "Option 1",
      },
      {
        path: "/smart-web-app/test_camera/option2",
        label: "Option 2",
      },
    ],
  },
];

function App() {
  const closeDrawer = () => {
    console.log("Drawer closed");
  };

  return (
    <ul>
      <ListItem_3
        iconPaths={exampleIconPaths}
        title="Web APP"
        links={exampleLinks}
        closeDrawer={closeDrawer}
        mainTitle="Main Menu"
      />
    </ul>
  );
}

export default App;
