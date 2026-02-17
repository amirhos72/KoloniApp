import React, { useState } from 'react';
import { Search, Play } from 'lucide-react';
import { REELS } from '../constants';

const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Posts' | 'Reels'>('Reels');

  return (
    <div className="pb-24 pt-6 min-h-screen text-gray-900 dark:text-white">
      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-hover:text-gold transition-colors duration-300" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 text-gray-900 dark:text-white pl-12 pr-4 py-3.5 rounded-full text-sm focus:outline-none focus:bg-white/30 dark:focus:bg-white/10 focus:border-gold/50 focus:shadow-[0_0_20px_rgba(191,166,104,0.1)] placeholder-gray-500 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-8 mb-4 border-b border-white/20 dark:border-white/5">
         <button 
           className={`flex-1 pb-3 text-sm font-medium transition-all text-center relative ${
             activeTab === 'Posts' ? 'text-gold' : 'text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 hover:bg-white/20 dark:hover:bg-white/5 rounded-t-lg'
           }`}
           onClick={() => setActiveTab('Posts')}
         >
           Posts
           {activeTab === 'Posts' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold mx-auto w-1/2 shadow-[0_0_10px_rgba(191,166,104,0.8)] animate-pulse"></div>}
         </button>
         <button 
           className={`flex-1 pb-3 text-sm font-medium transition-all text-center relative ${
             activeTab === 'Reels' ? 'text-gold' : 'text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 hover:bg-white/20 dark:hover:bg-white/5 rounded-t-lg'
           }`}
           onClick={() => setActiveTab('Reels')}
         >
           Reels
           {activeTab === 'Reels' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold mx-auto w-1/2 shadow-[0_0_10px_rgba(191,166,104,0.8)] animate-pulse"></div>}
         </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 px-1">
        {REELS.map((reel) => (
          <div key={reel.id} className="relative aspect-[9/16] bg-gray-200 dark:bg-gray-900 overflow-hidden group cursor-pointer">
            <img 
              src={reel.image} 
              alt="" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
            />
            
            {/* Play icon overlay */}
            <div className="absolute bottom-2 left-2 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/20 group-hover:bg-black/50 group-hover:scale-110 transition-all duration-300">
              <Play className="w-3 h-3 text-white fill-white drop-shadow-md" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;