import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './ProjectDetail.css'
import { projects } from '../../data/projects'
import Header from '../Header/Header'
import { FaLanguage, FaDownload, FaShare, FaQuestion, FaGithub, FaPlay } from 'react-icons/fa'
const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects[parseInt(id)]
  const [language, setLanguage] = useState("English")
  useEffect(() => {
    // Sayfa yüklendiğinde en üste kaydır
    window.scrollTo(0, 0)
  }, [id])

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
        {
          project.image && (
            <div className="project-detail-hero">
              <div className="project-detail-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-detail-image"
                />
                <div className="project-detail-gradient"></div>
              </div>
            </div>
          )
        }

        <div className="project-detail-content">
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
                  <div className="project-detail-share-btn" style={{ cursor: 'pointer' }} key={index}>
                    <span className='project-detail-tech-tag'> <FaShare style={{ fontSize: '1rem' }} /> {tech}</span>
                  </div>
                )
              } else if (tech === "Ask Question") {
                return (
                  <div className="project-detail-ask-question-btn" style={{ cursor: 'pointer' }} key={index}>
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
          <div style={{ width: '100%', marginTop: '.4rem', marginBottom: '2rem' }}>
            <hr />
          </div>

          <div className="project-detail-description" >
            {project.blocks.map((block, index) => {
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
    </div>
  )
}

export default ProjectDetail
