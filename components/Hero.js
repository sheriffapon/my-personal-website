
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi — I’m Sheriffapon.</h1>
        <p className="hero-subtitle">I build fast, scalable web apps.</p>
        <p className="hero-tagline">Full-stack developer • React + Node • Open to freelance & team roles.</p>
        <div className="hero-cta">
          <a href="#projects" className="button">See my work</a>
          <a href="#contact" className="button-secondary">Get in touch</a>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fadeIn 1s ease-in-out;
        }

        .hero-content {
          z-index: 1;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }

        .hero-subtitle {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        
        .hero-tagline {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        .hero-cta {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .button {
          background-color: var(--accent-color);
          color: #fff;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .button-secondary {
            background-color: transparent;
            color: var(--accent-color);
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            border: 2px solid var(--accent-color);
            transition: background-color 0.2s, color 0.2s;
        }

        .button-secondary:hover {
            background-color: var(--accent-color);
            color: #fff;
        }

        .hero-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, var(--accent-color), transparent);
          opacity: 0.1;
          animation: move 20s infinite alternate;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-duration: 25s;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: 10%;
          right: 10%;
          animation-duration: 30s;
        }

        .shape-3 {
            width: 150px;
            height: 150px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-duration: 20s;
        }

        @keyframes move {
          from {
            transform: translate(0, 0) rotate(0deg);
          }
          to {
            transform: translate(100px, 100px) rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
