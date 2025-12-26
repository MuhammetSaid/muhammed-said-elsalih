import { useState } from 'react'
import './Contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-header-label">CONTACT</p>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">Let's discuss your project and bring your ideas to life</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info-details">
                <h3>Email</h3>
                <p>muhammedsaidelsalih@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <div className="contact-info-details">
                <h3>Phone</h3>
                <p>+90 537 060 66 07</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-details">
                <h3>Location</h3>
                <p>Malatya, Turkey</p>
              </div>
            </div>

            <div className="contact-social-wrapper">
              <h3 className="social-title">Follow Me: </h3>
              <div className="contact-social">
                <a href="https://www.linkedin.com/in/muhammed-said-elsalih-a76b65284/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/MuhammetSaid" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/muhamet_said_elsalih?igsh=eHIzc2U0ZmJyZWIw" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/share/1AV4voSCXm/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
