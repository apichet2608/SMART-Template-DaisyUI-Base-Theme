import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@nextui-org/react";
import IconQrcod from "./CameraIcon";

function Scan_Camera({ setMachine, machine, IS_No_machine }) {
  const [open, setOpen] = useState(false);
  // const [barcode, setBarcode] = useState(null);
  const [facingMode, setFacingMode] = useState("environment");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const intervalRef = useRef(null); // Store interval ID

  const handleClickOpen = () => {
    setMachine(null);
    setOpen(true);
    startCamera(); // Start camera when opening dialog
  };

  const handleClose = () => {
    stopCamera(); // Stop camera when closing dialog
    setFacingMode("environment");
    setOpen(false);
  };

  const startCamera = async () => {
    stopCamera(); // Stop any existing camera stream

    const constraints = {
      video: { facingMode },
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((newStream) => {
          // console.log(newStream);
          // console.log(navigator);
          if (videoRef.current) {
            videoRef.current.srcObject = newStream;
            setStream(newStream);
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play();
              scanBarcode(); // Start scanning barcode
            };
          }
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
        });
    } else {
      console.error("Browser does not support getUserMedia");
    }
  };

  const stopCamera = async () => {
    if (stream) {
      try {
        // หยุดทุก track ของสตรีม
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());

        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.srcObject = null;
        }

        setStream(null);
      } catch (error) {
        console.error("Error stopping camera:", error);
      }
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const scanBarcode = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    if (!videoRef.current || !context) return;

    intervalRef.current = setInterval(() => {
      if (!videoRef.current || videoRef.current.readyState !== 4) return;

      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);

      if (code) {
        setMachine(code.data);
        clearInterval(intervalRef.current);
      }
    }, 100);
  };

  // useEffect(() => {
  //   if (open) {
  //     startCamera(); // Start camera when dialog is open
  //   }
  //   return () => {
  //     stopCamera(); // Cleanup on component unmount
  //   };
  // }, [open]);

  useEffect(() => {
    return () => {
      // ปิดกล้องเมื่อ component ถูก unmount
      stopCamera();
    };
  }, []);

  useEffect(() => {
    if (machine) {
      handleClose();
    }
  }, [machine]);

  return (
    <>
      <Button
        isIconOnly
        color="primary"
        variant="faded"
        aria-label="Take a photo"
        disabled={IS_No_machine}
        onClick={handleClickOpen}
        className="my-auto bg-base-100 border-2 border-base-100"
      >
        <IconQrcod />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen
      >
        <DialogTitle id="alert-dialog-title">
          Control Camera: {facingMode}
        </DialogTitle>
        <DialogContent>
          {machine && <div>Barcode Scanned: {machine}</div>}
          <div className="flex justify-center items-center">
            <video
              className="w-full max-w-lg h-auto object-cover"
              ref={videoRef}
            ></video>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          </div>
          <div className="grid grid-cols-2 gap-0.5 mt-1">
            <Button color="primary" onClick={() => setFacingMode("user")}>
              Front Camera
            </Button>

            <Button
              color="secondary"
              onClick={() => setFacingMode("environment")}
            >
              Rear Camera
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Scan_Camera;
