import { useEffect, useState } from "react";
import './Navbar.css';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-container navbar-fixed-top">
        <Link to="/">
          <img src={logo} alt="Logo" height={65} className="logo-img" />
        </Link>

        <button
          className={`navbar-toggler ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-items">
            <li>
              <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
            </li>
            <li>
              <Link to="/about-us" className={`nav-item ${location.pathname === "/about-us" ? "active" : ""}`}>About Us</Link>
            </li>
           
            <li>
              <Link to="/services" className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>Services</Link>
            </li>
            <li>
              <Link to="/Product" className={`nav-item ${location.pathname === "/Product" ? "active" : ""}`}>Products</Link>
            </li>
           
          </ul>
        </div>

        <div className="d-flex">
        <button 
    className="nav-buton"  
    onClick={() => navigate("/testimonials")}
  >Contact us</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
