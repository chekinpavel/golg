import { useState, useEffect } from 'react';
import { getRates } from '../api/exchangeAPI';

const CurrencyRates = ({ baseCurrency }) => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await getRates(baseCurrency);
        setRates(data.conversion_rates);
      } catch {
        setError('Error fetching rates.');
      }
    };
    fetchRates();
  }, [baseCurrency]);

  return (
    <div>
      <h1>Current Currency Rates</h1>
      {error ? <p>{error}</p> : (
        <ul>
          {Object.entries(rates).map(([currency, rate]) => (
            <li key={currency}>
              1 {baseCurrency.toUpperCase()} = {rate} {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencyRates;
