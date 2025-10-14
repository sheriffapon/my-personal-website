
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="https://github.com/sheriffapon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/aponwy" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/Al aponwy darweesh" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/Sheriff SA" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sheriffapon. All rights reserved.</p>
      </div>
      <style jsx>{`
        .footer {
          background-color: rgba(var(--card-background-rgb), 0.5);
          padding: 2rem;
          text-align: center;
        }

        .footer-socials {
            margin-bottom: 1rem;
        }

        .footer-socials a {
            margin: 0 0.5rem;
            font-size: 1.5rem;
            color: rgb(var(--foreground-rgb));
            transition: color 0.2s;
        }

        .footer-socials a:hover {
            color: var(--accent-color);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
