import './Footer.css'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope, FaFacebook } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { scrollToSection } from '../../utils/scrollToSection'
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    
    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      navigate('/')
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 300)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3 className="footer-title">Muhammed Said Elsalih</h3>
            <p className="footer-description">
              Full Stack Developer & Gen AI Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/muhammed-said-elsalih-a76b65284/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/MuhammetSaid" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/muhamet_said_elsalih?igsh=eHIzc2U0ZmJyZWIw" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/1AV4voSCXm/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="footer-section footer-links">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-nav">
              <li>
                <NavLink to="/" onClick={(e) => handleNavClick(e, 'hero')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={(e) => handleNavClick(e, 'about')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={(e) => handleNavClick(e, 'services')}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={(e) => handleNavClick(e, 'projects')}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4 className="footer-section-title">Get In Touch</h4>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-contact-icon" />
              <a href="mailto:muhammedsaidelsalih@gmail.com" className="footer-contact-link">
                muhammedsaidelsalih@gmail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <FaGithub className="footer-contact-icon" />
              <a href="https://github.com/MuhammetSaid" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                github.com/MuhammetSaid
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} Muhammed Said. All rights reserved.</p>
            <p className="footer-made-with">
              Powered by <span className="footer-heart">Muhammed Said</span> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
