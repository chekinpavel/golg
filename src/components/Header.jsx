import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Converter</Link>
      <Link to="/rates">Currency Rates</Link>
    </nav>
  </header>
);

export default Header;
