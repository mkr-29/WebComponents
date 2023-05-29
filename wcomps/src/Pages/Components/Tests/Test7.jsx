import React, { useEffect, useState } from 'react';

const Test7 = () => {
  const [userBrowser, setUserBrowser] = useState('');

  useEffect(() => {
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      setUserBrowser(userAgent);
    };

    detectBrowser();
  }, []);

  return (
    <div>
      <p>User Browser: {userBrowser}</p>
    </div>
  );
};

export default Test7;
