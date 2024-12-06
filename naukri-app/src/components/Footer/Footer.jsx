import React from "react";
import "./Footer.css";
import t1 from "../../assets/t1.jpg"; // Ensure this path is correct and t1 is a valid image file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Section with Image */}
        <img src={t1} className="footer-logo" />
        <div className="footer-section">
          
          <h4>Job Seekers</h4>
          <ul>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Create Resume</a></li>
            <li><a href="#">Get Job Alerts</a></li>
          </ul>
        </div>

        {/* Employers Section */}
        <div className="footer-section">
          <h4>Employers</h4>
          <ul>
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">Search Resumes</a></li>
            <li><a href="#">Recruiter Login</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Naukri.com | All Rights Reserved | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </footer>
  );
}

export default Footer;
