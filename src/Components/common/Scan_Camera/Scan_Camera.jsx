import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { BrowserMultiFormatReader } from "@zxing/library";

const BarcodeScanner = () => {
  const webcamRef = useRef(null);
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    const captureBarcode = async () => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          try {
            const result = await codeReader.decodeFromImageUrl(imageSrc);
            setBarcode(result.getText());
          } catch (err) {
            console.log("No barcode detected");
          }
        }
      }
    };

    const interval = setInterval(captureBarcode, 1000); // Capture every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Scan a Barcode</h2>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        audio={false}
        width={300}
        height={300}
      />
      <p>{barcode ? `Scanned Barcode: ${barcode}` : "No barcode detected"}</p>
    </div>
  );
};

export default BarcodeScanner;
