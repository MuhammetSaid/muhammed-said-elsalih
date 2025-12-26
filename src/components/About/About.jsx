import './About.css'
import { MdSchool } from 'react-icons/md'
import { MdWork } from 'react-icons/md'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <p className="about-header-label">ABOUT ME</p>
        </div>
        
        <div className="about-content">
          <div className="about-content-left">
            <h1 className="about-content-left-title">Building Exceptional User Experiences</h1>
            <p className="about-content-left-bio">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id error, a aspernatur officia provident perferendis saepe nisi quae et nam repellendus laboriosam quia alias adipisci ducimus fugit amet cum consequuntur quo quam, magni esse neque totam!
              <br/><br/>
              Labore minima deleniti necessitatibus maxime error delectus, atque excepturi omnis a nostrum! Reiciendis veniam, id officiis commodi alias perferendis? Voluptates numquam neque nesciunt rerum quidem, fugiat adipisci in eius unde? Sed doloremque dolores optio beatae deleniti tempora, iusto exercitationem!
              <br/><br/>
              Possimus commodi facere fuga laudantium ex. Ab esse quas possimus ut adipisci sint a modi sit exercitationem tempora
            </p>
          </div>
        </div>

        <div className="about-sections">
          <div className="about-section">
            <h2 className="section-title">
              <MdSchool className="section-icon" />
              Education
            </h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Computer Engineering</h3>
                    <span className="timeline-date">2022 - 2026</span>
                  </div>
                  <p className="timeline-institution">Malatya Turgut Özal University</p>
                  <p className="timeline-description">GPA: 3.63/4.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2 className="section-title">
              <MdWork className="section-icon" />
              Experience
            </h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Software Developer Volunteer Intern</h3>
                    <span className="timeline-date">2024 - Present</span>
                  </div>
                  <p className="timeline-institution">Aiksir Yazılım, Malatya</p>
                  <p className="timeline-description">
                    Developed an AI-integrated customizable customer service chatbot assistant, enabling users to easily customize the chatbot system based on their own data through seamless integration. Additionally, created an AI-powered mobile application that provides answers to Islamic religious questions by analyzing Quran, tafsir, and fiqh sources to generate accurate and customizable responses.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Computer Engineering Intern</h3>
                    <span className="timeline-date">July 2024 - August 2024</span>
                  </div>
                  <p className="timeline-institution">Baştürk Cam Sanayi ve Ticaret, Malatya</p>
                  <p className="timeline-description">
                    Developed a web-based warehouse management system that streamlined inventory tracking and stock management, significantly improving operational efficiency for warehouse personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

