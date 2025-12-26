import { useTheme } from '../../context/ThemeContext'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <MdLightMode className="theme-icon" />
      ) : (
        <MdDarkMode className="theme-icon" />
      )}
    </button>
  )
}

export default ThemeToggle

