import React, {useState, useRef} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import GiDragonHead from "./logo";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const nav = useRef();
  
  function extendNav() {
    setNavOpen((prev) => !prev)
     nav.current.style.top = "60px"
     navOpen? nav.current.style.top = "-500px"   :  nav.current.style.top = "60px"
  }

  return (
    <nav className="navbar">
      <Link className="logo-container" to="/">
        <GiDragonHead className="logo-img" />
        <h1 className="logo-text">Logo</h1>
      </Link>
      <button type="button" onClick={extendNav} className="burger">
        <div className="line line-uno"></div>
        <div className="line line-due"></div>
        <div className="line line-tre"></div>
      </button>
      <ul ref={nav} className="navbar-links">
        <li className="navbar-link" >
          <Link to="/products">Products</Link>
        </li>
        <li className="navbar-link" >
          <Link to="/services">Services</Link>
        </li>
        <li className="navbar-link" >
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="navbar-link" >
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
