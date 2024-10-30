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
      <article className=" prose">
        <h1>TEST</h1>
        <h2>TEST</h2>
        <h3>TEST</h3>
        <h4>TEST</h4>
        <h1>TEST</h1>
        <h2>TEST</h2>
        <h3>TEST</h3>
        <h4>TEST</h4>
        <h1>TEST</h1>
        <h2>TEST</h2>
        <h3>TEST</h3>
        <h4>TEST</h4>
      </article>
    </div>
  );
}

export default Draf;
