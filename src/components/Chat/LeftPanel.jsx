import React, { useState } from 'react'; // Added useState import
import { FiSettings, FiUsers, FiPhone } from 'react-icons/fi';

const LeftPanel = () => {
  const [activeTab, setActiveTab] = useState('chats');

  return (
    <div className="left-panel">
      <button 
        className={`icon-button ${activeTab === 'chats' ? 'active' : ''}`}
        onClick={() => setActiveTab('chats')}
      >
        <FiUsers size={24} />
        <span>Chats</span>
      </button>
      <button 
        className={`icon-button ${activeTab === 'calls' ? 'active' : ''}`}
        onClick={() => setActiveTab('calls')}
      >
        <FiPhone size={24} />
        <span>Calls</span>
      </button>
      <button 
        className={`icon-button ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => setActiveTab('settings')}
      >
        <FiSettings size={24} />
        <span>Settings</span>
      </button>
    </div>
  );
};

export default LeftPanel;