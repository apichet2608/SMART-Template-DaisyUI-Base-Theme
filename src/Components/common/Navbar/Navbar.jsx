import Buttonmode from "../ThemeSwitch/ThemeSwitch";
import Drawer from "./Drawer";
import Title from "./Title";
import Fuji from "/Pic/Fuji.png";

function Navbar() {
  return (
    <>
      <div className="fixed navbar bg-base-300 text-base-content border-none z-50">
        <div className="navbar-start">
          <Drawer />
        </div>
        {/* <div className="flex-1 place-content-between"> */}
        <div className="navbar-center">
          <img src={Fuji} alt="Fuji" className="h-8 w-8" />
          <Title />
        </div>
        <div className="navbar-end">
          <Buttonmode />
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Navbar;
