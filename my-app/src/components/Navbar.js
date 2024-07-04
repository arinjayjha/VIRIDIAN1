import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling
import "./Navbar.css";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#ffffff' }}>
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Company Logo" />
          </NavLink>
        </div>
        <div className="links">
          <NavLink to="/" exact className="nav-button" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-button" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/services" className="nav-button" activeClassName="active">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav-button" activeClassName="active">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
