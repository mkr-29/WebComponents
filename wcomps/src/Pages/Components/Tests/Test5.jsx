import React, { useEffect, useState } from 'react';

const Test5 = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    // Add event listener to update deviceWidth on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Device Width: {deviceWidth}px</p>
    </div>
  );
};

export default Test5;
