import React from "react";
import Code from "/Pic/code.png";
import CloseIcon from "@mui/icons-material/Close";
import LogoFuJi from "/Pic/FujiLogo.png";

function TitleDrawer({ closeDrawer }) {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="bg-base-100 flex gap-2">
          <img src={Code} alt="logo" className="w-54 h-10" />
          <p className="text-xl font-extrabold text-center m-auto">
            FullStack-APP
          </p>
        </div>
        <button
          type="button"
          data-view-component="true"
          className="btn  btn-sm text-base-content"
          onClick={closeDrawer}
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
}

export default TitleDrawer;
