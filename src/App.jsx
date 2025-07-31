import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div className="app">
      <header className="header">
        <h1>Feedback Collection System </h1>
        <nav className="nav">
          <button
            className={`nav-btn ${activeTab === 'form' ? 'active' : ''}`}
            onClick={() => setActiveTab('form')}
          >
            Submit Feedback
          </button>
          <button
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            View Dashboard
          </button>
        </nav>
      </header>

      <main className="main">
        {activeTab === 'form' ? <FeedbackForm /> : <Dashboard />}
      </main>
    </div>
  );
}

export default App;