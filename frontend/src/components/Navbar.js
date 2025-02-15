import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SafeNetV4.0</div>
      <ul className="nav-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/change-plan">Change Plan</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
