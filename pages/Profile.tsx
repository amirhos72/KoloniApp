import React from 'react';
import { Menu, Wallet, Plus, Grid, PlayCircle, Info, ShoppingBag, Sun, Moon } from 'lucide-react';
import { CURRENT_USER } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Profile: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="pb-24 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header & Cover */}
      <div className="relative">
        {/* Top Bar - No background as requested */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-end items-center">
           
           <div className="flex gap-2">
             <button 
               onClick={toggleTheme}
               className="p-2.5 bg-white/10 dark:bg-black/20 backdrop-blur-3xl rounded-full border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 active:scale-90"
             >
               {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-gray-800" />}
             </button>
             <button className="p-2.5 bg-white/10 dark:bg-black/20 backdrop-blur-3xl rounded-full border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 active:scale-90">
               <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
             </button>
           </div>
        </div>

        {/* Cover Image */}
        <div className="h-48 w-full relative">
          <img src={CURRENT_USER.coverImage} alt="Cover" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f2f5] via-transparent to-white/60 dark:from-black dark:via-transparent dark:to-black" />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="px-4 relative z-10 flex flex-col items-center -mt-20">
        {/* Avatar */}
        <div className="relative mb-3 group cursor-pointer z-10">
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-gold/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125"></div>
          
          {/* Rotating Ring */}
          <div className="absolute -inset-2 rounded-full border border-gold/30 border-dashed opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-0 group-hover:rotate-180 scale-100 group-hover:scale-105"></div>

          {/* Main Avatar Container */}
          <div className="w-28 h-28 rounded-full border-4 border-white/60 dark:border-black overflow-hidden relative z-10 bg-gray-200 dark:bg-gray-800 shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(191,166,104,0.4)]">
             {CURRENT_USER.avatar ? (
                <img src={CURRENT_USER.avatar} alt="Avatar" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
             ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400 dark:text-white/20">N</div>
             )}
             
             {/* Reflection Overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
          
          {/* VIP/Badge placeholder */}
          <div className="absolute bottom-1 right-1 z-20 bg-white dark:bg-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white dark:border-black shadow-lg transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
             <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Name & Handle */}
        <h2 className="text-2xl font-bold mb-0.5 drop-shadow-sm cursor-default text-gray-900 dark:text-white">{CURRENT_USER.name}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 font-medium cursor-pointer hover:text-gold transition-colors">{CURRENT_USER.handle}</p>

        {/* Stats - Vertical Dividers */}
        <div className="flex items-center justify-center w-full max-w-xs mb-8">
          <div className="flex flex-col items-center flex-1 cursor-pointer group py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gold transition-colors">{CURRENT_USER.stats.posts}</span>
            <span className="text-xs text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Posts</span>
          </div>
          <div className="w-px h-8 bg-gray-300 dark:bg-white/10"></div>
          <div className="flex flex-col items-center flex-1 cursor-pointer group py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gold transition-colors">{CURRENT_USER.stats.followers}</span>
            <span className="text-xs text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Followers</span>
          </div>
          <div className="w-px h-8 bg-gray-300 dark:bg-white/10"></div>
          <div className="flex flex-col items-center flex-1 cursor-pointer group py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gold transition-colors">{CURRENT_USER.stats.following}</span>
            <span className="text-xs text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Following</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 w-full mb-8">
          <button className="flex-1 bg-gold/90 text-black font-bold py-3.5 rounded-2xl shadow-[0_4px_20px_rgba(191,166,104,0.3)] hover:bg-[#d4c08a] hover:shadow-[0_4px_30px_rgba(191,166,104,0.5)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] backdrop-blur-sm">
            Edit Profile
          </button>
          <button className="w-14 flex items-center justify-center rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 text-gold hover:bg-white/50 dark:hover:bg-white/10 hover:border-gold/50 hover:text-black dark:hover:text-white hover:scale-105 transition-all duration-300 active:scale-[0.98] shadow-lg group">
            <Wallet className="w-6 h-6 drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>

        {/* Highlights */}
        <div className="w-full mb-8">
           <div className="flex flex-col items-start gap-2 group cursor-pointer">
              <div className="w-20 h-20 rounded-[1.5rem] border-2 border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center bg-white/30 dark:bg-white/5 backdrop-blur-md group-hover:border-gold/50 group-hover:bg-white/40 dark:group-hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                  <Plus className="w-8 h-8 text-gray-400 dark:text-white/40 group-hover:text-gold transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium ml-6 group-hover:text-black dark:group-hover:text-white transition-colors">New</span>
           </div>
        </div>

        {/* Tabs */}
        <div className="w-full border-b border-white/30 dark:border-white/5">
           <div className="flex justify-between items-center px-2">
             {['Posts', 'Reels', 'About', 'Purchase'].map((tab, idx) => (
               <button 
                 key={tab}
                 className={`pb-3 text-sm font-medium transition-all relative px-2 ${
                   idx === 0 
                     ? 'text-gold' 
                     : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/5 rounded-t-lg'
                 }`}
               >
                 {tab}
                 {idx === 0 && (
                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold shadow-[0_0_10px_rgba(191,166,104,0.6)] animate-pulse"></div>
                 )}
               </button>
             ))}
           </div>
        </div>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5 mt-0.5 px-0.5">
          {/* Empty state placeholder */}
          <div className="aspect-square bg-white/30 dark:bg-white/[0.03] backdrop-blur-md border border-white/20 dark:border-white/[0.02] hover:bg-white/40 dark:hover:bg-white/10 transition-colors cursor-pointer group flex items-center justify-center">
             <Plus className="text-gray-400 dark:text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="aspect-square bg-white/30 dark:bg-white/[0.03] backdrop-blur-md border border-white/20 dark:border-white/[0.02] hover:bg-white/40 dark:hover:bg-white/10 transition-colors cursor-pointer group flex items-center justify-center">
             <Plus className="text-gray-400 dark:text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="aspect-square bg-white/30 dark:bg-white/[0.03] backdrop-blur-md border border-white/20 dark:border-white/[0.02] hover:bg-white/40 dark:hover:bg-white/10 transition-colors cursor-pointer group flex items-center justify-center">
             <Plus className="text-gray-400 dark:text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
      </div>
    </div>
  );
};

export default Profile;