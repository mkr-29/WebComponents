import React, { useState, useEffect } from 'react';

const Test6 = () => {
  const [userOS, setUserOS] = useState('');

  useEffect(() => {
    const detectOS = () => {
      const { platform } = navigator;
      setUserOS(platform);
    };

    detectOS();
  }, []);

  return (
    <div>
      <p>User OS: {userOS}</p>
    </div>
  );
};

export default Test6;
