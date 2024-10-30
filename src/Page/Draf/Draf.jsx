import React, { useState } from "react";
import ModalContent from "../../Components/ModalContent/ModalContent";

function Draf() {
  const [IS_Open, setIS_Open] = useState(false); // State สำหรับตรวจสอบสถานะของเครื่อง

  return (
    <div>
      <button
        className="btn btn-primary "
        onClick={() => {
          setIS_Open(true);
        }}
      >
        open
      </button>
      <ModalContent
        open={IS_Open}
        Content={
          <>
            <article className=" prose">
              <h1>Modal Daisy UI</h1>
            </article>
            <div className="flex justify-end">
              <button
                className="btn btn-primary "
                onClick={() => {
                  setIS_Open(false);
                }}
              >
                Close
              </button>
            </div>
          </>
        }
      />
    </div>
  );
}

export default Draf;
