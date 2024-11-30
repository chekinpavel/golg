import { useState } from 'react';
import { convertCurrency } from '../api/exchangeAPI';

const CurrencyConverter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = async () => {
    const match = input.match(/(\d+\.?\d*)\s([a-zA-Z]{3})\sin\s([a-zA-Z]{3})/);
    if (!match) {
      setResult('Invalid format. Use: "15 usd in rub".');
      return;
    }
    const [_, amount, from, to] = match;
    try {
      const data = await convertCurrency(from.toUpperCase(), to.toUpperCase(), amount);
      setResult(`${amount} ${from.toUpperCase()} = ${data.conversion_result} ${to.toUpperCase()}`);
    } catch (error) {
      setResult('Error fetching conversion rate.');
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="15 usd in rub"
      />
      <button onClick={handleConvert}>Convert</button>
      <p>{result}</p>
    </div>
  );
};

export default CurrencyConverter;
