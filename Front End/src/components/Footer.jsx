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
            onClick={() => handleLinkClick("https://github.com/azorophelie")}
          />
          
          <FaLinkedin
            className="footer-icon"
            onClick={() => handleLinkClick("https://www.linkedin.com/in/ophelie-azor")}
          />
          
          <FaEnvelope
            className="footer-icon"
            onClick={() => handleLinkClick("mailto:azorophelie@yahoo.com")}
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