import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/global/reset.css'
import './styles/global/variables.css'
import App from './App.jsx'

// Initialize theme on load
const savedTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.classList.add(`${savedTheme}-theme`)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
