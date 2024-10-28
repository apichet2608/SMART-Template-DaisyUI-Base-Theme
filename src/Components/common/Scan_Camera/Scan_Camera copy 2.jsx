import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function StartedPage() {
  const [open, setOpen] = React.useState(false);
  const [barcode, setBarcode] = useState(null);
  const [facingMode, setFacingMode] = useState(""); // ค่าเริ่มต้นเป็นกล้องหน้า
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  const handleClickOpen = () => {
    setFacingMode("environment");
    setOpen(true);
    startCamera(); // เริ่มกล้องเมื่อ component ถูก mount
  };

  const handleClose = () => {
    stopCamera(); // ปิดกล้อง
    setOpen(false);
  };

  const startCamera = () => {
    stopCamera(); // ปิดกล้องก่อนถ้ามีสตรีมอยู่

    const constraints = {
      video: { facingMode },
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((newStream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = newStream;
            setStream(newStream); // เก็บสตรีมใหม่สำหรับการปิดกล้องในภายหลัง
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play(); // เล่นหลังจาก metadata โหลดเสร็จแล้ว
              scanBarcode(); // เริ่มการสแกนบาร์โค้ด
            };
          }
        })
        .catch((err) => {
          console.error("เกิดข้อผิดพลาดในการเข้าถึงกล้อง:", err);
        });
    } else {
      console.error("เบราว์เซอร์นี้ไม่สนับสนุน getUserMedia");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop()); // หยุดทุก track ของสตรีม
      if (videoRef.current) {
        videoRef.current.pause(); // หยุดเล่นวิดีโอ
        videoRef.current.srcObject = null; // ลบสตรีมออกจาก video element
      }
      setStream(null); // รีเซ็ตสถานะของสตรีม
    }
  };

  const scanBarcode = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    if (!videoRef.current || !context) return;

    const intervalId = setInterval(() => {
      // ตรวจสอบว่า videoRef.current ยังมีค่าที่ถูกต้อง
      if (!videoRef.current || videoRef.current.readyState !== 4) {
        clearInterval(intervalId);
        return;
      }

      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);

      if (code) {
        // alert(code.data);
        setBarcode(code.data);
        clearInterval(intervalId);
      }
    }, 100);
  };

  // const handleClose = () => {
  //   stopCamera(); // ปิดกล้อง
  //   setOpen(false);
  //   // หยุดการสแกนบาร์โค้ด (โดยการใช้ clearInterval)
  // };

  useEffect(() => {
    if (facingMode) {
      startCamera(); // เริ่มกล้องเมื่อ component ถูก mount
    }
  }, [facingMode]);

  useEffect(() => {
    if (barcode) {
      handleClose();
    }
  }, [barcode]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog ${barcode}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen
      >
        <DialogTitle id="alert-dialog-title">
          {"ควบคุมการเปิดและปิดกล้อง"} {facingMode}
        </DialogTitle>
        <DialogContent>
          {barcode && <div>บาร์โค้ดที่อ่านได้: {barcode}</div>}
          <div className="flex justify-center items-center">
            <video
              className="w-full max-w-lg h-auto object-cover"
              ref={videoRef}
            ></video>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          </div>
          <div className="grid grid-row-4">
            <button
              onClick={() => setFacingMode("user")}
              className="btn btn-info"
            >
              กล้องหน้า
            </button>
            <button
              onClick={() => setFacingMode("environment")}
              className="btn btn-success"
            >
              กล้องหลัง
            </button>
            {/* <button onClick={() => stopCamera()} className="btn btn-warning">
              ปิดกล้อง
            </button> */}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default StartedPage;
