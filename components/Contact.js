
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Simulate sending email
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setStatus('Thanks! I’ll reply within 48 hours.');
    }, 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('sheriffabdulraheemafunsho23@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <textarea 
            placeholder="Message" 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            required
          ></textarea>
          <button type="submit" className="button">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
        <div className="email-fallback">
          <p>Or, you can email me directly:</p>
          <div className="email-display">
            <span>sheriffabdulraheeemafunsho23@gmail.com</span>
            <button onClick={copyEmail} className="copy-button">Copy</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact {
          padding: 4rem 2rem;
          animation: slideIn 1s ease-in-out;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--accent-color);
        }

        .contact-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background-color: rgba(var(--card-background-rgb), 0.7);
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          backdrop-filter: blur(5px);
        }

        .contact-form input, .contact-form textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          background-color: rgba(var(--background-start-rgb), 0.8);
          color: rgb(var(--foreground-rgb));
        }
        
        .contact-form textarea {
            min-height: 150px;
        }

        .button {
            background-color: var(--accent-color);
            color: #fff;
            padding: 1rem;
            border: none;
            border-radius: 8px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .button:hover {
            background-color:rgb(39, 68, 97);
        }

        .status-message {
            text-align: center;
            margin-top: 1rem;
            color: var(--accent-color);
        }

        .email-fallback {
            text-align: center;
            margin-top: 2rem;
        }

        .email-display {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }

        .copy-button {
            background-color: var(--accent-color);
            color: #fff;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
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

export default Contact;
