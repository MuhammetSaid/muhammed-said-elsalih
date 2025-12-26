import './Services.css'
import { FaRobot } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'GenAI Chatbots',
      description: 'Intelligent conversational AI solutions powered by advanced generative models for enhanced user interactions.',
      icon: <FaRobot />
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies and best practices.',
      icon: <FaCode />
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      icon: <FaMobileAlt />
    },
    {
      id: 4,
      title: 'Backend Development',
      description: 'Robust server-side solutions, APIs, and database architectures to power your applications.',
      icon: <FaServer />
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <p className="services-header-label">SERVICES</p>
          <h1 className="services-title">What I Offer</h1>
          <p className="services-subtitle">Comprehensive solutions for your digital needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

