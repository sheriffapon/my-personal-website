
import { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">Sheriffapon</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
            <div className="social-icons">
                <a href="https://github.com/sheriffapon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://twitter.com/aponwy" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com/Al aponwy darweesh" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/Sheriff SA" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background-color: rgba(var(--card-background-rgb), 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--accent-color);
        }

        .nav-menu {
          display: flex;
          list-style: none;
        }

        .nav-item {
          margin-left: 1.5rem;
        }

        .nav-item a {
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-item a:hover {
          color: var(--accent-color);
        }

        .nav-right {
          display: flex;
          align-items: center;
        }
        
        .social-icons {
            display: flex;
            align-items: center;
            margin-right: 1rem;
        }

        .social-icons a {
            margin-left: 1rem;
            font-size: 1.2rem;
            transition: color 0.2s;
        }

        .social-icons a:hover {
            color: var(--accent-color);
        }

        .theme-toggle {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
