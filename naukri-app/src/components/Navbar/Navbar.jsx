import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';  // Ensure your CSS is correctly linked
import nkri from "../../assets/nkri.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
      {/* Logo Link to Job Search */}
      <Link to="/" className="logo-link">
        <img src={nkri} alt="Naukri Logo" className="logo-img" />
        <span className="logo-text">naukri</span>
      </Link>
    </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* Jobs Dropdown */}
          <li className="dropdown">
            Jobs
            <ul className="dropdown-content">
              <li><Link to="/jobs/tech">Tech Jobs</Link></li>
              <li><Link to="/jobs/design">Design Jobs</Link></li>
              <li><Link to="/jobs/marketing">Marketing Jobs</Link></li>
            </ul>
          </li>

          {/* Companies Dropdown */}
          <li className="dropdown">
           Companies
            <ul className="dropdown-content">
              <li><Link to="/companies/google">Google</Link></li>
              <li><Link to="/companies/facebook">Facebook</Link></li>
              <li><Link to="/companies/amazon">Amazon</Link></li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown" >Services
          
            <ul className="dropdown-content">
              <li><Link to="/services/resume">Resume Building</Link></li>
              <li><Link to="/services/interview">Interview Prep</Link></li>
              <li><Link to="/services/career-coaching">Career Coaching</Link></li>
            </ul>
          </li>

          {/* Log In Button */}
          <li><Link to="/login" className="btn">Log In</Link></li>
        </ul>
      </div>
    </nav>
  );
}




export default Navbar;
