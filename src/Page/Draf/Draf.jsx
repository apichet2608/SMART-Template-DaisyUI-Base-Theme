import React, { useState } from "react";
import Scan_Camera from "../../Components/common/Scan_Camera/Scan_Camera";

function Draf() {
  const [machine, setMachine] = useState(null); // State สำหรับเก็บค่าของเครื่อง
  const [IS_No_machine, setIS_No_machine] = useState(false); // State สำหรับตรวจสอบสถานะของเครื่อง

  return (
    <div>
      <Scan_Camera
        setMachine={setMachine}
        machine={machine}
        IS_No_machine={IS_No_machine}
      />
      <p className="text-2xl ">{machine}</p>
    </div>
  );
}

export default Draf;
