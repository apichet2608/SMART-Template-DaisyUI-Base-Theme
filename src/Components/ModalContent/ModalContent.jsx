import React from "react";

function ModalContent({ open, Content }) {
  return (
    <>
      {open && (
        <div className="modal modal-open">
          <div className="modal-box my-auto w-11/12 max-w-[100%]">
            {/* content */}
            {Content}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalContent;
