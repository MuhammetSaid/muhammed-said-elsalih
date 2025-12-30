import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './ProjectDetail.css'
import { projects } from '../../data/projects'
import Header from '../Header/Header'
import { FaLanguage, FaDownload, FaShare, FaQuestion, FaGithub, FaPlay, FaChevronLeft, FaChevronRight, FaLinkedin, FaFacebook, FaWhatsapp, FaCopy, FaTimes, FaCheck } from 'react-icons/fa'

// ShareModal Component
const ShareModal = ({ isOpen, onClose, projectTitle, projectUrl, projectDescription }) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])

  if (!isOpen) return null

  const encodedUrl = encodeURIComponent(projectUrl)
  const encodedTitle = encodeURIComponent(projectTitle)
  const shareText = projectDescription || `Check out this project: ${projectTitle}`
  const encodedText = encodeURIComponent(shareText)
  const encodedWhatsappText = encodeURIComponent(`Check out this project: ${projectTitle}\n\n${projectUrl}`)

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedWhatsappText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedText}`,
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(projectUrl)
      setIsCopied(true)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = projectUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setIsCopied(true)
    }
  }

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400')
  }

  return (
    <div className="share-modal-overlay" onClick={onClose}>
      <div className="share-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="share-modal-header">
          <h3>Share</h3>
          <button className="share-modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="share-modal-body">
          <div className="share-modal-options">
            <button 
              className="share-modal-option" 
              onClick={() => handleShare('whatsapp')}
              title="Share on WhatsApp"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </button>
            <button 
              className="share-modal-option" 
              onClick={() => handleShare('facebook')}
              title="Share on Facebook"
            >
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button 
              className="share-modal-option" 
              onClick={() => handleShare('linkedin')}
              title="Share on LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </button>
          </div>
          <div className="share-modal-copy">
            <button className="share-modal-copy-btn" onClick={handleCopyLink}>
              {isCopied ? <FaCheck /> : <FaCopy />}
              <span>{isCopied ? 'Copied' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ImageSlider Component
const ImageSlider = ({ images, projectTitle, blockStyle, imageStyle }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // blockStyle'dan display ve justifyContent'u çıkar, sadece margin gibi diğer stilleri kullan
  const containerStyle = { ...blockStyle }
  delete containerStyle.display
  delete containerStyle.justifyContent
  delete containerStyle.gap

  return (
    <div className="image-slider-container" style={containerStyle}>
      <div className="image-slider-wrapper">
        <button className="image-slider-btn image-slider-btn-prev" onClick={goToPrevious}>
          <FaChevronLeft />
        </button>
        <div className="image-slider-content">
          {/* Masaüstü görünümü için tüm resimler */}
          <div className="image-slider-desktop">
            {images.map((image, idx) => (
              <img 
                key={idx}
                src={image} 
                alt={`${projectTitle} - ${idx + 1}`} 
                style={imageStyle}
                className="image-slider-image"
              />
            ))}
          </div>
          {/* Mobil/tablet görünümü için slider */}
          <div className="image-slider-mobile">
            <img 
              src={images[currentIndex]} 
              alt={`${projectTitle} - ${currentIndex + 1}`} 
              style={imageStyle}
              className="image-slider-image"
            />
          </div>
        </div>
        <button className="image-slider-btn image-slider-btn-next" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>
      <div className="image-slider-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`image-slider-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Görsel ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const project = projects[parseInt(id)]
  const [language, setLanguage] = useState("English")
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  
  useEffect(() => {
    // Sayfa yüklendiğinde en üste kaydır
    window.scrollTo(0, 0)
  }, [id])

  // Production URL'i kullan (localhost ise production domain'i ile değiştir)
  const getProjectUrl = () => {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    if (isLocalhost) {
      // Production domain'i kullan
      return `https://muhammed-said-elsalih.vercel.app${location.pathname}`
    }
    return window.location.href
  }
  
  const currentUrl = getProjectUrl()

  if (!project) {
    return (
      <div className="project-detail-error">
        <h2>Proje bulunamadı</h2>
        <button onClick={() => navigate('/projects')}>Projeler Sayfasına Dön</button>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <header className="project-detail-header">
        <Header />
      </header>
      <div className="sus-container">
        <div className="sus-content"></div>
      </div>

      <div className="project-detail-container">
        <div className="project-detail-content">
          <div className="titles-container">
            <div className="titles">
              <h1 className="project-detail-title">{project.title}</h1>
              <h4 className="project-detail-subtitle">{project.subtitle}</h4>
              <div className="project-detail-technologies">
                {project.buttons.map((tech, index) => {
                  if (tech === "Language") {
                    return (
                      <div className="project-detail-language-btn" style={{ cursor: 'pointer' }} onClick={() => setLanguage(language === "English" ? "Turkish" : "English")} key={index}>
                        <span className='project-detail-tech-tag'> <FaLanguage /> {language}</span>
                      </div>
                    )
                  } else if (tech === "Download") {
                    return (
                      <div className="project-detail-download-btn" style={{ cursor: 'pointer' }} key={index}>
                        <span className='project-detail-tech-tag'> <FaDownload style={{ fontSize: '1rem' }} /> {tech}</span>
                      </div>
                    )
                  } else if (tech === "Share") {
                    return (
                      <div 
                        className="project-detail-share-btn" 
                        style={{ cursor: 'pointer' }} 
                        onClick={() => setIsShareModalOpen(true)}
                        key={index}
                      >
                        <span className='project-detail-tech-tag'> <FaShare style={{ fontSize: '1rem' }} /> {tech}</span>
                      </div>
                    )
                  } else if (tech === "Ask Question") {
                    const handleAskQuestion = () => {
                      const message = encodeURIComponent(`Hello, I have a question about the "${project.title}" project.`)
                      window.open(`https://wa.me/905370606607?text=${message}`, '_blank')
                    }
                    return (
                      <div 
                        className="project-detail-ask-question-btn" 
                        style={{ cursor: 'pointer' }} 
                        onClick={handleAskQuestion}
                        key={index}
                      >
                        <span className='project-detail-tech-tag'> <FaQuestion style={{ fontSize: '1rem' }} /> {tech}</span>
                      </div>
                    )
                  } else if (tech === "GitHub") {
                    return (
                      <div className="project-detail-github" style={{ cursor: 'pointer' }} key={index}>
                        <span className='project-detail-tech-tag'> <FaGithub style={{ fontSize: '1rem' }} /> {tech}</span>
                      </div>
                    )
                  } else if (tech === "Demo") {
                    return (
                      <div className="project-detail-demo-btn" style={{ cursor: 'pointer' }} key={index}>
                        <span className='project-detail-tech-tag'> <FaPlay style={{ fontSize: '1rem' }} /> {tech}</span>
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </div>
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>


          <div style={{ width: '100%', marginTop: '.4rem', marginBottom: '2rem' }}>
            <hr />
          </div>

          <div className="project-detail-description" >
            {(language === "English" && project.english_blocks ? project.english_blocks : project.blocks).map((block, index) => {
              // Özel state kontrolleri önce yapılmalı
              if (block.state === "image") {
                // Birden fazla resim varsa slider göster
                if (block.content.length > 1) {
                  return <ImageSlider key={index} images={block.content} projectTitle={project.title} blockStyle={block.style} imageStyle={block.image_style} />;
                }
                // Tek resim varsa normal göster
                return (
                  <div key={index} style={block.style}>
                    <img src={block.content[0]} alt={project.title} style={block.image_style} />
                  </div>
                );
              }

              if (block.state === "list") {
                // Eğer listStyle decimal ise ol kullan, değilse ul kullan
                const isOrdered = block.style?.listStyle === 'decimal' || block.style?.listStyleType === 'decimal';
                const ListTag = isOrdered ? 'ol' : 'ul';
                const listStyle = isOrdered ? 'decimal' : 'disc';
                
                return (
                  <ListTag key={index} style={{ ...block.style, listStyleType: listStyle }} className="project-detail-list">
                    {block.content.items.map((item, idx) => {
                      const content = item.content;
                      if (typeof content === 'string') {
                        const colonIndex = content.indexOf(':');
                        if (colonIndex !== -1) {
                          const beforeColon = content.substring(0, colonIndex + 1);
                          const afterColon = content.substring(colonIndex + 1);
                          return (
                            <li key={idx}>
                              <span style={{ fontWeight: 900 }}>{beforeColon}</span>
                              {afterColon}
                            </li>
                          );
                        }
                      }
                      return <li key={idx}>{content}</li>;
                    })}
                  </ListTag>
                );
              }
              
              if (block.state === "line") {
                return (
                  <div key={index} style={block.style}>
                    <hr />
                  </div>
                );
              }
              
              if (block.state === "bosluk") {
                return (
                  <div key={index} style={block.style}>
                    <br />
                  </div>
                );
              }
              
              // Eğer content bir array ise (ilk format)
              if (Array.isArray(block.content)) {
                return (
                  <div key={index} style={block.style}>
                    {block.content.map((content, idx) => {
                      if (content.type === "normal") {
                        return <span key={idx}>{content.content}</span>;
                      } else if (content.type === "bold") {
                        return <strong key={idx} className="project-detail-bold-text">{content.content}</strong>;
                      }
                      return null;
                    })}
                  </div>
                );
              }
              
              // Eğer content bir object ise (Title veya Text state'leri için)
              if (typeof block.content === 'object' && block.content !== null) {
                // Title state'i için
                if (block.state === "Title") {
                  return (
                    <h2 key={index} style={block.style}>
                      {block.content.normal || block.content.bold || ''}
                    </h2>
                  );
                }
                
                // Text state'i için object formatı
                if (block.state === "Text") {
                  return (
                    <p key={index} style={block.style}>
                      {block.content.bold && <strong className="project-detail-bold-text">{block.content.bold}</strong>}
                      {block.content.normal}
                    </p>
                  );
                }
              }

              // String formatı (eski format - geriye uyumluluk için)
              if (typeof block.content === 'string') {
                return (
                  <p key={index} style={block.style}>
                    {block.content}
                  </p>
                );
              }

              
              return null;
            })}
          </div>
        </div>
      </div>
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        projectTitle={project.title}
        projectUrl={currentUrl}
        projectDescription={project.description}
      />
    </div>
  )
}

export default ProjectDetail
