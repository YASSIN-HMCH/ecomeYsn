import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <div className="general-footer">
        <footer>
          <div className="footer">
            <div className="social-icons">
              <a href="https://example.com"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://example.com"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://example.com"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://example.com"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            <div className="copyright">
              INFERNO Copyright © 2024 Inferno - All rights reserved || Designed By: Yassin Hammouche
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
