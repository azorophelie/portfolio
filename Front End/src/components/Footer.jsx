import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-icons">
          
          <FaGithub
            className="footer-icon"
            onClick={() => handleLinkClick("https://github.com/azorophelie?tab=repositories")}
          />
          
          <FaLinkedin
            className="footer-icon"
            onClick={() => handleLinkClick("https://www.linkedin.com/in/ophelieazor/")}
          />
          
          <FaEnvelope
            className="footer-icon"
            onClick={() => handleLinkClick("mailto:azor.ophelie@gmail.com")}
          />
          <p>Développé avec React et Visual Studio Code.</p>
          <p>Hébergé sur gh-pages</p>
        </div>
        <p className='copyright'>© {new Date().getFullYear()} Ophélie Azor. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;