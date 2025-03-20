import NavBar from "../Navbar/Navbar";
import React, { useState } from 'react';
import formimage from '../../images/Testimonials/Onboarding-amico 1.png'
import './Testimonials.css';
import Locations from "./Location";
import Footer from "../Footer/Footer";

const Testimonials = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreedToPolicy: false
  });

  const [countryCode, setCountryCode] = useState('US');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
    <NavBar/>
   

    <div className="contact-form-container">
      <div className="form-content">
        <div className="form-section">
          <h2 className="contact-title">
            <span className="phone-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            Contact Herbal Homeo Wellness
          </h2>
          <p className="contact-subtitle">Our friendly team would love to hear from you.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <div className="phone-input-container">
                <div className="country-select">
                  <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="US">PK</option>
                    <option value="CA">US</option>
                    <option value="UK">UK</option>
                    <option value="AU">AU</option>
                  </select>
                  <span className="dropdown-icon">▼</span>
                </div>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  placeholder="+92 (312) 345-6789"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <div className="form-check">
              <input 
                type="checkbox" 
                id="agreePolicy" 
                name="agreedToPolicy"
                checked={formData.agreedToPolicy}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreePolicy">
                You agree to our friendly <a href="#" className="privacy-link">privacy policy</a>.
              </label>
            </div>
            
            <button type="submit" className="submit-btn">Send message</button>
          </form>
        </div>
        
        <div className="image-section">
          <img src={formimage} alt="Customer service illustration" className="contact-image " />
        </div>
      </div>
      <Locations/>

    </div>
    <Footer/>
    </>
  );
};
export default Testimonials;