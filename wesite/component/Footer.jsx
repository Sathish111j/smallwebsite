import './../css/Footer.css';
import PhoneIcon from './../assests/phone.png'; 
import FacebookIcon from './../assests/social-media.png'; 
import WebIcon from './../assests/globe.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-item">
                <img src={PhoneIcon} alt="Phone" className="footer-icon" />
                 <p>Toll free 1800 2001234</p>
            </div>
            <div className="footer-item">
                <img src={FacebookIcon} alt="Facebook" className="footer-icon" />
                <a href="https://www.facebook.com/cripumps" style={{ color: 'white' }}>www.facebook.com/cripumps</a>
            </div>
            <div className="footer-item">
                <img src={WebIcon} alt="Website" className="footer-icon" />
                <a href="https://www.crigroups.com" style={{ color: 'white' }}>www.crigroups.com</a>
            </div>
        </footer>
    );
}

export default Footer;