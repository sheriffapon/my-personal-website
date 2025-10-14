
import React, { useState, useRef, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fix: Initialize with null and set in useEffect to avoid SSR issues with 'window'
  const [position, setPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const wasDragged = useRef(false); // To distinguish a click from a drag

  // Set initial position only on the client side
  useEffect(() => {
    setPosition({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    wasDragged.current = false; // Reset on new mousedown
    dragStartPos.current = { x: e.clientX - (position?.x || 0), y: e.clientY - (position?.y || 0) };
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      wasDragged.current = true; // If mouse moves while dragging, it's a drag
      setPosition({ x: e.clientX - dragStartPos.current.x, y: e.clientY - dragStartPos.current.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);


  const handleClick = () => {
    // Only toggle chat if it was a click, not a drag
    if (!wasDragged.current) {
      setIsOpen(!isOpen);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    const messageToSend = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await res.json();

      setMessages([...newMessages, { text: data.reply, sender: 'bot' }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' }]);
    } finally {
        setIsLoading(false);
    }
  };

  const formatMessage = (text) => {
    const boldedText = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return { __html: boldedText };
  };

  // Don't render until position is set on the client
  if (!position) {
    return null;
  }

  return (
    <>
      <div
        className={`chat-icon ${isOpen ? 'open' : ''}`}
        onMouseDown={handleMouseDown}
        onClick={handleClick} // Use a dedicated click handler
        style={{ left: position.x, top: position.y, cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <FaRobot />
      </div>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="close-btn">X</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.sender}`}
                dangerouslySetInnerHTML={formatMessage(msg.text)}
              />
            ))}
             {isLoading && <div className="message bot typing-indicator"><span>.</span><span>.</span><span>.</span></div>}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage} disabled={isLoading}>Send</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .chat-icon {
          position: fixed;
          width: 60px;
          height: 60px;
          background-color: var(--accent-color);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          z-index: 1000;
          transition: transform 0.2s;
        }

        .chat-icon:hover {
            transform: scale(1.1);
        }

        .chat-window {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 350px;
          max-width: 90vw;
          background-color: rgb(var(--card-background-rgb));
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          z-index: 1001;
          display: flex;
          flex-direction: column;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: rgba(var(--accent-color), 0.8);
          color: #fff;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        .close-btn {
            background: none;
            border: none;
            color: #fff;
            font-size: 1.2rem;
            cursor: pointer;
        }

        .chat-body {
          padding: 1rem;
          flex-grow: 1;
          overflow-y: auto;
          max-height: 300px;
        }

        .message {
          margin-bottom: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          max-width: 80%;
          white-space: pre-wrap; /* Preserve line breaks */
        }

        .message.bot {
          background-color: #f0f0f0;
          color: #333;
          align-self: flex-start;
        }

        .message.user {
          background-color: var(--accent-color);
          color: #fff;
          align-self: flex-end;
          margin-left: auto; /* Align user messages to the right */
        }

        .chat-footer {
          display: flex;
          padding: 1rem;
          border-top: 1px solid #ccc;
        }

        .chat-footer input {
          flex-grow: 1;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .chat-footer button {
            margin-left: 0.5rem;
            padding: 0.5rem 1rem;
            background-color: var(--accent-color);
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .chat-footer button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        .typing-indicator {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .typing-indicator span {
            height: 8px;
            width: 8px;
            margin: 0 1px;
            background-color: #9E9EA1;
            border-radius: 50%;
            display: inline-block;
            animation: an-bounce 1s infinite;
        }
        .typing-indicator span:nth-child(2) {
            animation-delay: 0.2s;
        }
        .typing-indicator span:nth-child(3) {
            animation-delay: 0.4s;
        }
        @keyframes an-bounce {
            0%, 80%, 100% {
                transform: scale(0);
            }
            40% {
                transform: scale(1.0);
            }
        }
      `}</style>
    </>
  );
};

export default Chatbot;
