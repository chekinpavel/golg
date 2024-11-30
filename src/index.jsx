import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ConverterPage from './pages/ConverterPage';
import RatesPage from './pages/RatesPage';
import './styles/global.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<ConverterPage />} />
      <Route path="/rates" element={<RatesPage />} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
