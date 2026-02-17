import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Events from './pages/Events';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';
import { ThemeProvider } from './context/ThemeContext';

// Placeholder for Create page
const Create: React.FC = () => (
  <div className="min-h-[100dvh] flex items-center justify-center text-gray-900 dark:text-white">
    <h1 className="text-2xl font-bold bg-white/40 dark:bg-black/40 px-8 py-4 rounded-[2rem] backdrop-blur-[40px] border border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">Create New Content</h1>
  </div>
);

const AppContent: React.FC = () => {
  return (
    <div className="min-h-[100dvh] font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden transition-colors duration-500 bg-[#f2f2f7] dark:bg-black">
      {/* Background gradient blobs - Strictly Gold and Neutral to support glass effect */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#bfa668]/20 dark:bg-[#bfa668]/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gray-300/30 dark:bg-gray-800/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <BottomNav />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
};

export default App;