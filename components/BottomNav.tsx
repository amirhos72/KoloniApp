import React from 'react';
import { ChevronUp, Plus, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ReelsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.81 20.81" className={className} fill="currentColor">
    <path d="M14.51,0H6.3C2.82,0,0,2.82,0,6.3v8.21c0,3.48,2.82,6.3,6.3,6.3h8.21c3.48,0,6.3-2.82,6.3-6.3V6.3c0-3.48-2.82-6.3-6.3-6.3ZM19.4,5.92h-4.03l-1.9-4.53h1.04c2.58,0,4.7,2,4.89,4.53ZM9.24,5.92l-1.9-4.53h4.65l1.9,4.53h-4.65ZM5.86,1.41l1.9,4.51H1.41C1.59,3.54,3.48,1.63,5.86,1.41ZM19.41,14.51c0,2.71-2.2,4.91-4.91,4.91H6.3c-2.71,0-4.91-2.2-4.91-4.91v-7.19h18.02v7.19Z"/>
  </svg>
);

const EventsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M21.65,4.38c.33-.35.08-.93-.4-.93h-3.96l-.79,1.32c.39.31.45.96.12,1.51-.33.54-.93.8-1.39.6l-.44.74c.31.33.34.92.04,1.42-.3.5-.83.75-1.27.64l-.49.82-.28-.17.48-.8c-.4-.31-.46-.96-.13-1.51.33-.55.93-.8,1.39-.59l.44-.74c-.31-.33-.34-.92-.04-1.43.3-.5.84-.76,1.28-.64l.7-1.17H2.75c-.49,0-.74.58-.4.93l9.16,9.68v6.54c-2.19.09-4.12.71-5.38,1.62-.35.25-.17.8.25.8h11.42c.43,0,.6-.55.25-.8-1.29-.93-3.27-1.55-5.51-1.63v-6.59l9.11-9.63Z"/>
    <polygon points="18.72 1.16 17.34 3.47 16.91 3.46 18.42 .98 18.72 1.16"/>
  </svg>
);

const BottomNav: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => path === route;

  const getIconClass = (route: string) => 
    `relative z-10 w-6 h-6 transition-all duration-500 ease-out ${
      isActive(route) 
        ? 'text-gold drop-shadow-[0_0_12px_rgba(191,166,104,0.8)] scale-110' 
        : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]'
    }`;

  const getContainerClass = (route: string) =>
    `flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
      isActive(route) 
        ? 'bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-gold/30 shadow-[0_0_20px_rgba(191,166,104,0.2)]' 
        : 'hover:bg-white/10 dark:hover:bg-white/5 hover:backdrop-blur-sm hover:border hover:border-white/30 dark:hover:border-white/10 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1.5 active:scale-90 active:translate-y-0'
    }`;

  // Internal glow effect for glass reflection
  const Reflection = () => (
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/10 dark:bg-black/40 backdrop-blur-3xl border-t border-white/20 dark:border-white/5 px-6 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] flex justify-between items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-colors duration-500">
      <Link to="/" className={getContainerClass('/')}>
        <Reflection />
        <ChevronUp className={getIconClass('/')} strokeWidth={2} />
      </Link>
      
      <Link to="/explore" className={getContainerClass('/explore')}>
        <Reflection />
        <ReelsIcon className={getIconClass('/explore')} />
      </Link>
      
      <Link to="/create" className={getContainerClass('/create')}>
        <Reflection />
        <div className={`transition-transform duration-500 ${isActive('/create') ? 'rotate-90' : 'group-hover:rotate-90'}`}>
          <Plus className={getIconClass('/create')} strokeWidth={2} />
        </div>
      </Link>
      
      <Link to="/events" className={getContainerClass('/events')}>
        <Reflection />
        <EventsIcon className={getIconClass('/events')} />
      </Link>
      
      <Link to="/profile" className={getContainerClass('/profile')}>
        <Reflection />
        <User className={getIconClass('/profile')} strokeWidth={2} />
      </Link>
    </div>
  );
};

export default BottomNav;