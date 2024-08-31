import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Footer.css'; 
import smallTequilaLogo from '../../assets/smallTequilaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    //This is used to highlight the current day of the week so customers can clearly see what day it is and see the hours highlighted
    useEffect(() => {
        // Map days to their corresponding IDs
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        
        // Get the current day of the week
        const currentDay = new Date().getDay(); // Returns a number (0 = Sunday, 1 = Monday, etc.)

        // Select the element for the current day
        const currentDayElement = document.getElementById(days[currentDay]);

        // Add the highlight class
        if (currentDayElement) {
            currentDayElement.classList.add('highlight');
        }
    }, []);
   
    return (
        <div className="footer-container">
            <div className="footer-left">
                <div className="footer-section">
                    
                {/* //TODO: Update with actual restaurant hours */}
                    <h4>Hours</h4>  
                    <p id="hours">
                        <span  id="sunday">Sunday: 9:00 AM - 5:00 PM</span><br />
                        <span  id="monday">Monday: 8:00 AM - 8:00 PM</span><br />
                        <span  id="tuesday">Tuesday: 8:00 AM - 8:00 PM</span><br />
                        <span  id="wednesday">Wednesday: 8:00 AM - 8:00 PM</span><br />
                        <span  id="thursday">Thursday: 8:00 AM - 8:00 PM</span><br />
                        <span  id="friday">Friday: 8:00 AM - 10:00 PM</span><br />
                        <span  id="saturday">Saturday: 8:00 AM - 10:00 PM</span>
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
                        <a href="tel:+1234567890" className='phoneNumber'>(123) 456-7890</a>
                    </p>
                </div>
            </div>

            {/* //TODO: Update with actual social media links */}
            <div className="footer-right">
                <h4>Follow Us</h4>
                <div className="social-links"> 
                     {/* //TODO: Update with actual social media links */}
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
            
            <div className="footer-bottom">     
                <p>&copy; {new Date().getFullYear()} Takeiros Mex-Food | <Link to='/privacy' className='privacy'>Privacy</Link></p>
            </div>
        </div>
    );
}

export default Footer;
