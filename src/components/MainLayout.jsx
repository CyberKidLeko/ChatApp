import React, { useState } from 'react';
import LeftPanel from './Chat/LeftPanel';
import ChatList from './Chat/ChatList';
import ChatWindow from './Chat/chatWindow';
import '../styles/components/chat.css'; 

const MainLayout = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="main-layout">
      <LeftPanel />
      <ChatList onSelectChat={setSelectedChat} />
      <ChatWindow chat={selectedChat} />
    </div>
  );
};

export default MainLayout;