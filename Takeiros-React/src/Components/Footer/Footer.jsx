import React from 'react';
import './Footer.css'; 
import smallTequilaLogo from '../../assets/smallTequilaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <div className="footer-section">
                    
                {/* //TODO: Update with actual restaurant hours */}
                    <h4>Hours</h4>  
                    <p>
                        Sunday: 9:00 AM - 5:00 PM<br />
                        Monday: 8:00 AM - 8:00 PM<br />
                        Tuesday: 8:00 AM - 8:00 PM<br />
                        Wednesday: 8:00 AM - 8:00 PM<br />
                        Thursday: 8:00 AM - 8:00 PM<br />
                        Friday: 8:00 AM - 10:00 PM<br />
                        Saturday: 8:00 AM - 10:00 PM<br />
                    </p>
                </div>
                {/* //TODO: Update with actual address */}
                <div className="footer-section">
                    <h4>Address</h4>    
                    <p>
                        123 Main Street<br />
                        Anytown, USA<br />
                        12345
                    </p>

                    {/* //TODO: Update with actual phone */}
              
                    <h4>Phone</h4>      
                    <p>
                        <a href="tel:+1234567890">(123) 456-7890</a>
                    </p>
               
                </div>

                
            </div>

            {/* //TODO: Update with actual social media links */}
            <div className="footer-right">
                <h4>Follow Us</h4>
                <div className="social-links">      
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} style={{color: "#74C0FC",}} className='facebook-logo'/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} style={{color: "#fd7608", margin: "0 10px"}} className='instagram-logo'/>
                    </a>
                </div>

                <h4>Our Other Restaurants</h4>
                <div className="social-links">
                    <a href="https://tequilamex.com/" target="_blank" rel="noopener noreferrer">
                        <img src={smallTequilaLogo} alt="Tequila Mex" className="footer-image" />
                    </a>
                </div>
            </div>
            

            {/* //TODO: Update with Twilio email subscription link */}
            <div className="footer-bottom">     
                <p>&copy; {new Date().getFullYear()} Takeiros Mex-Food</p>
            </div>
        </div>
    );
}

export default Footer;
