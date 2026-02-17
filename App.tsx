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
    <h1 className="text-2xl font-bold bg-white/60 dark:bg-white/5 px-8 py-4 rounded-3xl backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">Create New Content</h1>
  </div>
);

const AppContent: React.FC = () => {
  return (
    <div className="min-h-[100dvh] font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden transition-colors duration-500 bg-[#f0f2f5] dark:bg-black bg-[radial-gradient(circle_at_50%_0%,#ffffff_0%,#eef2f6_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,#1f1c10_0%,#000000_70%)]">
      {/* Background gradient blobs for glass effect - Opacity increased for light mode to enhance glass effect */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/20 dark:bg-gold/10 rounded-full blur-[100px] pointer-events-none opacity-60 mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="fixed bottom-[10%] right-[-20%] w-[500px] h-[500px] bg-blue-300/40 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="fixed top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-300/30 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
      
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