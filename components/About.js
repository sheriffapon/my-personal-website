
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 
    'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AI', 'Docker', 'AWS'
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-bio">
          I am a passionate AI enginer/full-stack developer with a love for building beautiful and functional web applications.
          I thrive in collaborative environments and enjoy tackling new challenges and learning new technologies. if you want to know more about me, you can ask the chatbot assistant thank you.
        </p>
        <div className="skills-container">
            <h3 className="skills-title">Core Skills & Tools</h3>
            <ul className="skills-list">
            {skills.map(skill => (
                <li key={skill} className="skill-item">{skill}</li>
            ))}
            </ul>
        </div>
      </div>
      <style jsx>{`
        .about {
          padding: 4rem 2rem;
          animation: slideIn 1s ease-in-out;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--accent-color);
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .about-bio {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .skills-container {
            background-color: rgba(var(--card-background-rgb), 0.5);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .skills-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .skills-list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }

        .skill-item {
            background-color: var(--accent-color);
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 500;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
