import { Routes, Route } from 'react-router-dom'
import { Footer } from './components'
import Home from './sections/Home'
import AboutPage from './sections/AboutPage'
import ProjectsPage from './sections/ProjectsPage'
import ContactPage from './sections/ContactPage'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
