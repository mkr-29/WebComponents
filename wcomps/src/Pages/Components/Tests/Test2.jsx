import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test2 = () => {
  const [ipAddress, setIPAddress] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        const { ip } = response.data;
        setIPAddress(ip);
      } catch (error) {
        console.error('Error getting IP address', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>IP Address: {ipAddress || 'Loading...'}</p>
    </div>
  );
};

export default Test2;
