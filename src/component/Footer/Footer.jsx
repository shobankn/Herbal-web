import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaFacebookF, FaPeace, FaDribbble,FaGithub, FaRegHandPeace } from "react-icons/fa";
import handicon from '../../images/footer images/Social icon (2).png'
import logo from '../../images/footer images/image 12067.Png'

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container-fluid footer-container">
      <div className="footer-brand">
  <img src={logo} alt="Herbal Homeo Wellness" className="footer-logo" />
  <div className="footer-text">
    <h3>Herbal Homeo Wellness</h3>
    <p>Natural Healing for modern times</p>
  </div>
</div>


        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li style={{marginBottom:"10px"}}><a href="#">About Us</a></li>
            <li style={{marginBottom:"10px"}}><a href="#">Service</a></li>
            <li style={{marginBottom:"10px"}}><a href="#">Blogs</a></li>
            <li style={{marginBottom:"10px"}}><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact</h4>
          <p>123 Helpline Stress</p>
          <p>03157299793</p>
          <p>inayaturehman018@gmail.com</p>
        </div>

        <div className="footer-newsletter">
          <h4 className="footer-heading">Newsletter</h4>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
          <div className="footer-icons">
            <FaTwitter className="me-3"/>
            <FaLinkedin className="me-3" />
            <FaFacebookF className="me-3"/>
            <FaGithub className="me-3"/>
            < FaRegHandPeace className="me-3"/>
            <FaDribbble className="me-3" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Herbal Homeo Wellness LLC. All rights reserved.</p>
        <div className="footer-policy">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
