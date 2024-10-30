import DashboardIcon from "/Icon/Common/icons8-dashboard-96.png";

export const Link = () => {
  const Grp1 = {
    Title: "WEB APP",
    Iconsmain: DashboardIcon,
    SubPath: [
      { path: "/smart-web-app/", label: "WEB-APP" },
      { path: "/smart-web-app/test_camera", label: "TEST_CAMERA" },
    ],
  };

  const Grp2 = {
    Title: "WEB APP",
    Iconsmain: DashboardIcon,
    SubPath: [
      {
        path: "/smart-web-app/",
        label: "WEB-APP",
        icon: DashboardIcon, // Icon for WEB-APP
      },
      {
        path: "/smart-web-app/test_camera",
        label: "TEST_CAMERA",
        icon: DashboardIcon, // Icon for TEST_CAMERA
      },
    ],
  };
  return { Grp1, Grp2 };
};
