import React, { useState } from 'react';
import { Menu, Wallet, Plus, Grid, PlayCircle, Info, ShoppingBag, Sun, Moon, Loader2 } from 'lucide-react';
import { CURRENT_USER } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Profile: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCoverLoaded, setIsCoverLoaded] = useState(false);
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  return (
    <div className="pb-32 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header & Cover */}
      <div className="relative">
        <div className="absolute top-4 right-4 z-20 flex gap-3">
             <button 
               onClick={toggleTheme}
               className="w-10 h-10 flex items-center justify-center bg-white/30 dark:bg-black/30 backdrop-blur-[40px] rounded-full border border-white/30 dark:border-white/10 hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300 active:scale-95 shadow-lg"
             >
               {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-gray-800" />}
             </button>
             <button className="w-10 h-10 flex items-center justify-center bg-white/30 dark:bg-black/30 backdrop-blur-[40px] rounded-full border border-white/30 dark:border-white/10 hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300 active:scale-95 shadow-lg">
               <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
             </button>
        </div>

        {/* Cover Image */}
        <div className="h-56 w-full relative bg-gray-200 dark:bg-gray-900">
          {!isCoverLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
               <Loader2 className="w-8 h-8 text-gold animate-spin" />
            </div>
          )}
          <img 
            src={CURRENT_USER.coverImage} 
            alt="Cover" 
            onLoad={() => setIsCoverLoaded(true)}
            className={`w-full h-full object-cover opacity-80 transition-opacity duration-500 ${isCoverLoaded ? 'opacity-80' : 'opacity-0'}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f2f2f7]/10 via-transparent to-[#f2f2f7] dark:from-black/10 dark:via-transparent dark:to-black" />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="px-4 relative z-10 flex flex-col items-center -mt-24">
        {/* Avatar */}
        <div className="relative mb-3 group cursor-pointer z-10">
          <div className="w-32 h-32 rounded-full border-4 border-[#f2f2f7] dark:border-black overflow-hidden relative z-10 bg-white dark:bg-black shadow-2xl">
             {!isAvatarLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 z-20">
                  <Loader2 className="w-6 h-6 text-gold animate-spin" />
                </div>
             )}
             {CURRENT_USER.avatar ? (
                <img 
                  src={CURRENT_USER.avatar} 
                  alt="Avatar" 
                  onLoad={() => setIsAvatarLoaded(true)}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${isAvatarLoaded ? 'opacity-100' : 'opacity-0'}`} 
                />
             ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400 dark:text-white/20">N</div>
             )}
          </div>
          <div className="absolute bottom-2 right-2 z-20 bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center border-4 border-[#f2f2f7] dark:border-black shadow-sm">
             <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Name & Handle */}
        <h2 className="text-3xl font-bold mb-0.5 text-gray-900 dark:text-white">{CURRENT_USER.name}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 font-medium">@{CURRENT_USER.handle}</p>

        {/* Stats Container - Glassy Pill */}
        <div className="flex items-center justify-around w-full max-w-sm mb-8 bg-white/40 dark:bg-[#1c1c1e]/60 backdrop-blur-[30px] rounded-[2rem] py-4 px-2 border border-white/40 dark:border-white/10 shadow-sm">
          <div className="flex flex-col items-center flex-1 cursor-pointer group">
            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gold transition-colors">{CURRENT_USER.stats.posts}</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Posts</span>
          </div>
          <div className="w-px h-8 bg-gray-300 dark:bg-white/10"></div>
          <div className="flex flex-col items-center flex-1 cursor-pointer group">
            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gold transition-colors">{CURRENT_USER.stats.followers}</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Followers</span>
          </div>
          <div className="w-px h-8 bg-gray-300 dark:bg-white/10"></div>
          <div className="flex flex-col items-center flex-1 cursor-pointer group">
            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gold transition-colors">{CURRENT_USER.stats.following}</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Following</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 w-full mb-8 max-w-sm">
          <button className="flex-1 bg-[#bfa668] text-black font-bold py-4 rounded-[1.5rem] shadow-[0_8px_30px_rgba(191,166,104,0.3)] hover:bg-[#d4c08a] hover:scale-[1.02] transition-all duration-300 active:scale-95">
            Edit Profile
          </button>
          <button className="w-16 flex items-center justify-center rounded-[1.5rem] bg-white/40 dark:bg-[#1c1c1e]/60 backdrop-blur-[30px] border border-white/40 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white/60 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 active:scale-95 shadow-sm">
            <Wallet className="w-6 h-6" />
          </button>
        </div>

        {/* Highlights */}
        <div className="w-full mb-8 pl-2">
           <div className="flex flex-col items-center gap-2 group cursor-pointer w-fit">
              <div className="w-[4.5rem] h-[4.5rem] rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center bg-white/40 dark:bg-white/5 backdrop-blur-md relative overflow-hidden">
                  <Plus className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">New</span>
           </div>
        </div>

        {/* Tabs */}
        <div className="w-full border-b border-gray-200 dark:border-white/10 mb-1">
           <div className="flex justify-around items-center">
             <button className="pb-3 border-b-2 border-black dark:border-white text-black dark:text-white">
                <Grid className="w-6 h-6" />
             </button>
             <button className="pb-3 border-b-2 border-transparent text-gray-400">
                <PlayCircle className="w-6 h-6" />
             </button>
             <button className="pb-3 border-b-2 border-transparent text-gray-400">
                <ShoppingBag className="w-6 h-6" />
             </button>
           </div>
        </div>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5">
          {[1,2,3,4,5,6,7,8,9].map(i => (
             <div key={i} className="aspect-square bg-gray-200 dark:bg-[#1c1c1e] cursor-pointer hover:opacity-90 transition-opacity relative group">
                {/* Simulated content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/20 backdrop-blur-sm rounded-full p-2">
                        <Plus className="w-5 h-5 text-white" />
                    </div>
                </div>
             </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;