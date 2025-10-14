
import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sheriffapon/repos?sort=stars&per_page=6');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {repos.map(repo => (
          <div key={repo.id} className="project-card">
            <div className="project-header">
                <h3 className="project-title">{repo.name}</h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub /></a>
            </div>
            <p className="project-description">{repo.description}</p>
            <div className="project-footer">
              <div className="project-tags">
                {repo.topics.slice(0, 3).map(topic => (
                  <span key={topic} className="tag">{topic}</span>
                ))}
              </div>
              <div className="project-stats">
                <FaStar /> {repo.stargazers_count}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .projects {
          padding: 4rem 2rem;
          animation: fadeIn 1s ease-in-out;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--accent-color);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          background-color: rgba(var(--card-background-rgb), 0.7);
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          backdrop-filter: blur(5px);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }

        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .project-title {
            font-size: 1.5rem;
        }

        .project-link {
            font-size: 1.5rem;
            color: var(--accent-color);
            transition: color 0.2s;
        }

        .project-link:hover {
            color: #fff;
        }
        
        .project-description {
            font-size: 1rem;
            line-height: 1.5;
            flex-grow: 1;
            margin-bottom: 1rem;
        }

        .project-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .project-tags {
            display: flex;
            gap: 0.5rem;
        }

        .tag {
            background-color: var(--accent-color);
            color: #fff;
            padding: 0.3rem 0.6rem;
            border-radius: 15px;
            font-size: 0.8rem;
        }

        .project-stats {
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
