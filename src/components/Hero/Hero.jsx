import { useState, useEffect } from 'react'
import Header from '../Header'
import './Hero.css'
import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaMedium } from 'react-icons/fa'
import { MdWork } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import profileImage from '../../assets/images/ben.jpeg'

const Hero = () => {
  const texts = ['Gen AI Developer','Full Stack Developer', 'Mobile Developer', 'Freelancer']
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const fullText = texts[currentTextIndex]
    
    let timeout
    
    if (!isDeleting && currentText === fullText) {
      // Metin tamamlandı, 2 saniye bekle sonra silme işlemine geç
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1200)
    } else if (isDeleting && currentText === '') {
      // Silme işlemi tamamlandı, bir sonraki metne geç
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      setTypingSpeed(100)
    } else {
      // Yazma veya silme işlemi
      timeout = setTimeout(() => {
        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
          setTypingSpeed(50) // Silme daha hızlı
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
          setTypingSpeed(100) // Yazma normal hız
        }
      }, typingSpeed)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [currentText, currentTextIndex, isDeleting, typingSpeed, texts])

  return (
    <section id="hero" className="hero">
        <header className="hero-header">
            <Header />
        </header>
        <div className="hero-content">
          <div className="hero-content-left">
            <h5 className="hero-content-left-title">. Available for freelance work</h5>
            <h1 className="hero-content-left-name">Hi, I'm Muhammed Said</h1>
            <h2 className="hero-content-left-subtitle">
              <span className="typing-text">{currentText}</span>
              <span className="typing-cursor">|</span>
            </h2>
            <p className="hero-content-left-bio">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut modi nemo non cumque dolor? Asperiores voluptas quod at voluptatibus temporibus, quidem eius omnis consequuntur reiciendis, autem laudantium aut. At aspernatur, qui beatae facere placeat enim eius similique fugiat illum sunt.</p>
            <div className="konum-state">
              <div className="konum">
                <FaMapMarkerAlt />
                <p>Malatya, Turkey</p>
              </div>
              <div className="state">
                <MdWork />
                <p>Available for work</p>
              </div>
            </div>

            <div className="hero-content-left-buttons">
              <button className="hero-content-left-button">Download CV</button>
              <button className="hero-content-left-button">Contact Me</button>
            </div>

            <div className="line1"></div>

            <div className="hero-content-left-social-media">
              <h5 className="hero-content-left-social-media-title">Follow Me:</h5>
              <a href="https://www.linkedin.com/in/muhammed-said-elsalih-a76b65284/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/MuhammetSaid" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://leetcode.com/u/Muhammet_said/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
              <a href="https://medium.com/@muhammetsaidelsalih" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
              <a href="https://www.instagram.com/muhamet_said_elsalih?igsh=eHIzc2U0ZmJyZWIw" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/share/1AV4voSCXm/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
          <div className="hero-content-right">
            <div className="hero-content-right-image">
              <img src={profileImage} alt="Muhammed Said" />
            </div>
          </div>
        </div>

        <div className="sus">

        </div>
    </section>
  )
}

export default Hero

