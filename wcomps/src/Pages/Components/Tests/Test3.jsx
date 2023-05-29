import React, { useRef, useEffect } from 'react';

const Test3 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const constraints = { video: true };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera', error);
      }
    };

    enableCamera();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default Test3;
