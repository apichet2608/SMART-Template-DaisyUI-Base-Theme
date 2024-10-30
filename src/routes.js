import Draf from "./Page/Draf/Draf";
import TEST_CAMERA from "./Page/TEST_CAMERA/TEST_CAMERA";

const routes = [
  {
    path: "/",
    breadcrumbs: ["Home"],
    showAppBar: true,
    Element: Draf, // Pass the component reference, not JSX
  },
  {
    path: "/smart-web-app/",
    breadcrumbs: ["Home"],
    showAppBar: true,
    Element: Draf, // Pass the component reference
  },
  {
    path: "/smart-web-app/test_camera",
    breadcrumbs: ["Home", "Test Camera"],
    showAppBar: true,
    Element: TEST_CAMERA, // Pass the component reference
  },
];

export default routes;
