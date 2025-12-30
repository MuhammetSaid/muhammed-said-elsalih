import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Projects.css'
import projectImage from '../../assets/images/the_imam.png'
import masterImage from '../../assets/images/math.png'
import vortezImage from '../../assets/images/vorteza2.png'
import chatbotsImage from '../../assets/images/chatbots.png'
import hidrojenImage from '../../assets/images/hidrojen.png'
const Projects = () => {
  const navigate = useNavigate()
  const [showMore, setShowMore] = useState(false)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768
    }
    return false
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // İlk render'da kontrol et
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const projects = [
    {
      id: 1,
      title: "THE IMAM",
      description: "İslam şeriati konularında kullanıcılara yardımcı olmak için geliştirilmiş modern bir mobil uygulama. Kullanıcılar İslami hukuk konularında sorular sorabilir ve detaylı cevaplar alabilirler.",
      image: projectImage,
      technologies: ["FastAPI", "LangChain", "Flutter", "MySQL", "JWT", "OpenAI"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Nexora Math - Puzzle Game",
      description: "Nexora Math, bir puzzle oyunudur. Oyun, matematik konularını içerir ve kullanıcıların matematik bilgilerini geliştirmelerine yardımcı olur.",
      image: masterImage,
      technologies: ["Unity", "C#", "MySQL"],
      link: "https://play.google.com/store/apps/details?id=com.nexoramath.app",
      github: "https://github.com/muhammedsaidelsalih/NexoraMath"
    },
    {
      id: 3,
      title: "VortezaERP - ERP Sistemi",
      description: "VortezaERP, bir ERP (Enterprise Resource Planning) sistemidir. ERP sistemleri, bir şirketin tüm işlemlerini yönetmek için kullanılan sistemlerdir. ",
      image: vortezImage,
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
      github: "#"
    }
  ]

  const horizontalProjects = [
    {
      id: 4,
      title: "Aiksir Chat - Özelleştirilebilir akıllı Chatbot",
      description: "Kişisel portföy web sitesi. Modern tasarım, responsive yapı ve performans odaklı geliştirme ile oluşturulmuş profesyonel bir web sitesi.",
      image: chatbotsImage,
      technologies: ["React", "CSS3", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Gerçek zamanlı hava durumu uygulaması. Kullanıcı dostu arayüz ve detaylı hava durumu bilgileri sunan modern bir mobil uygulama.",
      image: hidrojenImage,
      technologies: ["React Native", "API", "TypeScript"],
      link: "#",
      github: "#"
    }
  ]

  // Tüm projeleri birleştir (mobil için)
  const allProjects = [...projects, ...horizontalProjects]
  
  // Mobil görünümde ilk 2 projeyi göster, diğerlerini showMore state'ine göre göster
  // Desktop görünümde tüm projects gösterilir, horizontalProjects ayrı section'da
  const displayedProjects = isMobile 
    ? (showMore ? allProjects : allProjects.slice(0, 2))
    : projects

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h1 style={{textAlign:"center"}}>Featured Work</h1>
        <div className="hh-line" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className="projects-line" style={{width:"100px", height:"1px", backgroundColor:"var(--text-color-secondary)", marginBottom:"10px", marginTop: "4px"}}></div>
        </div>
        <p style={{textAlign:"center", color:"var(--text-color-secondary)"}}>A selection of projects showcasing my experience in Generative AI, backend development, and full-stack applications.</p>
        <p style={{textAlign:"center", color:"var(--text-color-secondary)"}}>Each project focuses on real-world problems, scalability, and clean engineering practices.</p>
        
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => navigate(`/projects/${project.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-gradient"></div>
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="project-link-btn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Detail</span>
                  </button>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-github-btn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allProjects.length > 2 && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}

        {!isMobile && (
          <div className="horizontal-projects-section">
            <div className="horizontal-projects-container">
              {horizontalProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="horizontal-project-card"
                  onClick={() => navigate(`/projects/${project.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="horizontal-project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="horizontal-project-image"
                    />
                    <div className="horizontal-project-gradient"></div>
                  </div>
                  <div className="horizontal-project-content">
                    <h3 className="horizontal-project-name">{project.title}</h3>
                    <div className="horizontal-project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="horizontal-project-tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="horizontal-project-buttons" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="horizontal-project-link-btn"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span>Detail</span>
                      </button>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="horizontal-project-github-btn"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </section>
  )
}

export default Projects

