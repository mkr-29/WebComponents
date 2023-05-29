import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test4 = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd');
        setCryptoPrices(response.data);
      } catch (error) {
        console.error('Error getting cryptocurrency prices', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Prices</h1>
      <ul>
        {Object.entries(cryptoPrices).map(([crypto, prices]) => (
          <li key={crypto}>
            {crypto} - USD: {prices.usd}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test4;
