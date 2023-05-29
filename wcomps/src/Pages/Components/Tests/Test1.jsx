import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=f813cf72010949069229b3ded0e7dd23');
        const { latitude, longitude } = response.data;
        setLocation({ latitude, longitude });
      } catch (error) {
        console.error('Error getting location', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Test1;
