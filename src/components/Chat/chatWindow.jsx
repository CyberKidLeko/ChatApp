import React, { useState } from 'react';
import '../../styles/components/chat.css';

const ChatWindow = ({ chat }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Sup Dawg! you good?',
      time: '10:30 AM',
      sender: 'John',
      isUser: false
    },
    {
      id: 2,
      text: "I'm good mate! Been thinking of jefery dahmer lately.",
      time: '10:32 AM',
      sender: 'You',
      isUser: true
    },
    {
      id: 3,
      text: 'Why are you such a creep?',
      time: '10:33 AM',
      sender: 'John',
      isUser: false
    },
    {
      id: 4,
      text: 'Im autistic leave me alone',
      time: '10:35 AM',
      sender: 'You',
      isUser: true
    }
  ]);

  const handleSend = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: 'You',
        isUser: true
      };
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate reply after 1 second
      setTimeout(() => {
        const reply = {
          id: Date.now() + 1,
          text: 'Sure, I can help with that! What specifically do you need?',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sender: chat?.name || 'Friend',
          isUser: false
        };
        setMessages(prev => [...prev, reply]);
      }, 1000);
    }
  };

  return (
    <div className="chat-window">
      <div className="messages-container">
        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`message-bubble ${msg.isUser ? 'sent' : 'received'}`}
          >
            <div className="message-content">
              {msg.text}
              <div className="message-time">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="message-input"
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;