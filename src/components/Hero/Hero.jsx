import { useState, useEffect } from 'react'
import Header from '../Header'
import './Hero.css'
import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaMedium } from 'react-icons/fa'
import { MdWork } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import profileImage from '../../assets/images/ben.jpeg'
import cvPdf from '../../assets/cv/Muhammed_Said_Elsalih.pdf'

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

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = cvPdf
    link.download = 'muhammed_said_elsalih.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContactMe = () => {
    window.open('https://wa.me/905370606607', '_blank')
  }

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
            <p className="hero-content-left-bio">I develop scalable, intelligent, and user-focused solutions using GenAI-based applications and modern web technologies. With a strong focus on clean architecture, high performance, and sustainable code, I aim to transform ideas into powerful and impactful digital products.</p>
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
              <button className="hero-content-left-button" onClick={handleDownloadCV}>Download CV</button>
              <button className="hero-content-left-button" onClick={handleContactMe}>Contact Me</button>
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

