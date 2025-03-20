import React from 'react';
import './Locations.css';

const Locations = () => {
  const locations = [
    {
      id: 1,
      type: "Retail store",
      hours: "Mon-Sat 9am to 5pm.",
      address: "150 Brunswick Street",
      location: "Fitzroy VIC 3065 AU"
    },
    {
      id: 2,
      type: "Showroom",
      hours: "Mon-Fri 9am to 5pm.",
      address: "50 Flinders Street",
      location: "Melbourne VIC 3000 AU"
    },
    {
      id: 3,
      type: "Head office",
      hours: "Mon-Fri 9am to 5pm.",
      address: "100 Smith Street",
      location: "Collingwood VIC 3066 AU"
    }
  ];

  return (
    <div className="locations-container">
      <div className="locations-header">
        <span className="contact-label">Contact us</span>
        <h1 className="locations-title">Our locations</h1>
        <p className="locations-subtitle">Come visit our friendly team at one of our offices.</p>
      </div>

      <div className="map-container">
        {/* Map placeholder - would be replaced with a real map component like Google Maps */}
        <iframe 
 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59873.97030116961!2d73.23640254175353!3d34.1914940027957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1742382099348!5m2!1sen!2s"
    width="100%" 
    height="300" 
    style={{ border: 0, borderRadius: '12px' }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Melbourne locations"
  ></iframe>
      </div>

      <div className="locations-grid">
        {locations.map(location => (
          <div key={location.id} className="location-card">
            <div className="location-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="location-type">{location.type}</h3>
            <p className="location-hours">{location.hours}</p>
            <p className="location-address">{location.address}</p>
            <p className="location-city">{location.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;