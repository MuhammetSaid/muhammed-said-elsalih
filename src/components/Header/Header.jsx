import { useState } from 'react'
import './Header.css'
import { AiFillHome } from "react-icons/ai";
import { FaIdCard } from "react-icons/fa";
import { IoFolderSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaTools, FaBriefcase } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { scrollToSection } from '../../utils/scrollToSection';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        closeMenu();
        
        if (location.pathname === '/') {
            // Zaten ana sayfadaysak, direkt scroll et
            scrollToSection(sectionId);
        } else {
            // Başka bir sayfadaysak, önce ana sayfaya git
            navigate('/');
            // Sayfa yüklendikten sonra scroll et (component mount olması için biraz bekle)
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 300);
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
                <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
                    <NavLink to="/" onClick={(e) => handleNavClick(e, 'hero')}> <AiFillHome className="icon" /> Home</NavLink>
                    <NavLink to="/about" onClick={(e) => handleNavClick(e, 'about')}> <FaIdCard className="icon" /> About</NavLink>
                    <NavLink to="/services" onClick={(e) => handleNavClick(e, 'services')}> <FaBriefcase className="icon" /> Services</NavLink>
                    <NavLink to="/projects" onClick={(e) => handleNavClick(e, 'projects')}> <IoFolderSharp className="icon" /> Projects</NavLink>
                    <NavLink to="/skills" onClick={(e) => handleNavClick(e, 'skills')}> <FaTools className="icon" /> Skills</NavLink>
                    <NavLink to="/contact" onClick={(e) => handleNavClick(e, 'contact')}> <IoMailSharp className="icon" /> Contact</NavLink>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header

