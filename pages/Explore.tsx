import React, { useState } from 'react';
import { Search, Play, Loader2 } from 'lucide-react';
import { REELS } from '../constants';

const ReelItem: React.FC<{ reel: typeof REELS[0] }> = ({ reel }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative aspect-[9/16] bg-gray-200 dark:bg-gray-900 overflow-hidden group cursor-pointer">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-gold animate-spin" />
        </div>
      )}
      <img 
        src={reel.image} 
        alt="" 
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 ${isLoaded ? 'opacity-90' : 'opacity-0'}`} 
      />
      
      {/* Play icon overlay */}
      <div className="absolute bottom-2 left-2 bg-black/30 backdrop-blur-md p-1.5 rounded-full border border-white/20 group-hover:bg-black/50 group-hover:scale-110 transition-all duration-300">
        <Play className="w-3 h-3 text-white fill-white drop-shadow-md" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Posts' | 'Reels'>('Reels');

  return (
    <div className="pb-28 pt-6 min-h-screen text-gray-900 dark:text-white">
      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400 z-10" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-white/40 dark:bg-[#1c1c1e]/60 backdrop-blur-[30px] border border-white/40 dark:border-white/10 text-gray-900 dark:text-white pl-12 pr-4 py-4 rounded-[1.5rem] text-[15px] focus:outline-none focus:bg-white/60 dark:focus:bg-[#1c1c1e]/80 placeholder-gray-500 shadow-sm transition-all duration-300"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-8 mb-4">
         <button 
           className={`flex-1 pb-3 text-sm font-bold transition-all text-center relative ${
             activeTab === 'Posts' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
           }`}
           onClick={() => setActiveTab('Posts')}
         >
           Posts
           {activeTab === 'Posts' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white mx-auto w-8 rounded-full"></div>}
         </button>
         <button 
           className={`flex-1 pb-3 text-sm font-bold transition-all text-center relative ${
             activeTab === 'Reels' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
           }`}
           onClick={() => setActiveTab('Reels')}
         >
           Reels
           {activeTab === 'Reels' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white mx-auto w-8 rounded-full"></div>}
         </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 px-0.5">
        {REELS.map((reel) => (
          <ReelItem key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  );
};

export default Explore;