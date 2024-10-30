import React, { useState } from "react";
import ModalContent from "../../Components/ModalContent/ModalContent";
import PostAPI from "../../Utility/API/PostWithoutToken";

function Draf() {
  const [IS_Open, setIS_Open] = useState(false); // State สำหรับตรวจสอบสถานะของเครื่อง

  PostAPI("TEST", "TEST");
  return (
    <div className="container mx-auto">
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
              <h2>Modal Daisy UI</h2>
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
