
import { Link, useLocation } from 'react-router-dom';
import LogoHeader from '../../assets/logoheader.png';
import './header.css';

function Header() {
  const location = useLocation();

  return (
    <header className='Header'>
      <Link to="/">
        <img src={LogoHeader} className="HomeLogo" alt="Logo" />
      </Link>
      <nav className='NavContainer'>
        <Link className={`link ${location.pathname === '/' ? 'active' : ''}`} to="/">
          Accueil
        </Link>
        <Link className={`link ${location.pathname === '/Apropos' ? 'active' : ''}`} to="/Apropos">
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
