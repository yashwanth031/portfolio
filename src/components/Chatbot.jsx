import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Yashwanth's automated portfolio guide (a predefined FAQ assistant, not a live AI). Feel free to ask about his background, projects, skills, or achievements!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Tell me about Place Path",
    "What are your skills?",
    "Where do you study?",
    "Recent achievements?",
    "How can I contact you?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Process answer based on local knowledge base
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let matchedResponse = null;

      for (const item of portfolioData.botKnowledge) {
        const hasMatch = item.keywords.some((kw) => lowerQuery.includes(kw));
        if (hasMatch) {
          matchedResponse = item.response;
          break;
        }
      }

      const botReplyText =
        matchedResponse ||
        "I don't have an exact answer for that query in my predefined knowledge base. For specific inquiries or opportunities, please reach out directly to Yashwanth using the Contact section or via email at yashwanthvinoth031@gmail.com.";

      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReplyText
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container" aria-label="Portfolio FAQ Assistant">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          className="chatbot-trigger-btn"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-label="Open Portfolio FAQ Assistant"
        >
          <Bot size={20} />
          <span>Ask Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-label="Portfolio FAQ Chatbot">
          {/* Header */}
          <div className="chatbot-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--gradient-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Bot size={18} />
              </div>
              <div className="chatbot-header-info">
                <span className="chatbot-title">Portfolio Assistant</span>
                <span className="chatbot-subtitle">Predefined FAQ • Not Live AI</span>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages list */}
          <div className="chatbot-messages" aria-live="polite">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-bubble ${msg.sender}`}
                style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'flex-start'
                }}
              >
                {msg.sender === 'bot' && (
                  <Bot size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                )}
                <div>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompt Chips */}
          <div className="chatbot-suggestions" aria-label="Suggested Questions">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="suggestion-chip"
                onClick={() => handleSendMessage(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className="chatbot-input-row">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about skills, projects, contact..."
              className="chatbot-input"
              aria-label="Ask the portfolio assistant a question"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              className="chatbot-send-btn"
              aria-label="Send query"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
