import React, { useState } from 'react'; 

const ChatList = ({ onSelectChat }) => {
  const [chats] = useState([ 
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Sure, I can help with that!',
      time: '10:36 AM',
      unread: 2,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Jane Smith',
      lastMessage: 'Meeting at 3 PM tomorrow',
      time: '9:15 AM',
      unread: 0,
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Team React',
      lastMessage: 'Alice: I pushed the new components',
      time: 'Yesterday',
      unread: 5,
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ]);

  const [activeChat, setActiveChat] = useState(null);

  const handleSelect = (chat) => {
    setActiveChat(chat.id);
    onSelectChat(chat);
  };

  return (
    <div className="chat-list">
      {chats.map(chat => (
        <div 
          key={chat.id}
          className={`chat-item ${activeChat === chat.id ? 'active' : ''}`}
          onClick={() => handleSelect(chat)}
        >
          <div className="chat-item-header">
            <span className="chat-name">{chat.name}</span>
            <span className="chat-time">{chat.time}</span>
          </div>
          <div className="last-message">{chat.lastMessage}</div>
          {chat.unread > 0 && (
            <div className="unread-count">{chat.unread}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatList;