import React, { useState } from 'react';
import { Bell, Send, MoreHorizontal, Heart, MessageCircle, Share2, Bookmark, Loader2 } from 'lucide-react';
import { POSTS } from '../constants';
import { Post } from '../types';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1570 2000" className={className}>
    <rect fill="#2e2d2c" x="-0.8" y="1571.41" width="429.4" height="428.81"/>
    <rect fill="#bfa668" x="-0.8" width="429.4" height="428.81"/>
    <rect fill="#bfb49b" x="1140.73" y="1571.41" width="429.4" height="428.81"/>
    <rect fill="#bfa668" x="1140.73" width="429.4" height="428.81"/>
    <rect fill="#bfa668" x="-0.8" y="523.8" width="429.4" height="428.81"/>
    <rect fill="#5c5b58" x="-0.8" y="1047.61" width="429.4" height="428.81"/>
    <rect fill="#bfa668" x="569.97" y="523.8" width="429.4" height="428.81"/>
    <rect fill="#afa595" x="569.97" y="1047.61" width="429.4" height="428.81"/>
  </svg>
);

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  return (
    <div className="mb-6 bg-white/40 dark:bg-[#1c1c1e]/60 backdrop-blur-[50px] saturate-150 rounded-[2.5rem] overflow-hidden border border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] mx-2 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_15px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
      <div className="px-5 pt-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 cursor-pointer group/user">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-white/40 dark:border-white/10 bg-white/20 dark:bg-white/5 ring-1 ring-white/20 dark:ring-white/5 relative shadow-inner">
              {!isAvatarLoaded && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-white/10 flex items-center justify-center">
                  <Loader2 className="w-3 h-3 text-gold animate-spin" />
                </div>
              )}
              <img 
                src={post.user.avatar} 
                alt={post.user.name} 
                onLoad={() => setIsAvatarLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${isAvatarLoaded ? 'opacity-100' : 'opacity-0'}`} 
              />
            </div>
            <div className="flex flex-col">
               <span className="text-[15px] font-bold text-gray-900 dark:text-white tracking-wide group-hover/user:text-gold transition-colors leading-tight">{post.user.name}</span>
               <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium tracking-wide">Dubai, UAE</span>
            </div>
          </div>
          <button className="text-gray-500 dark:text-gray-400 w-9 h-9 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full aspect-[4/5] bg-gray-200 dark:bg-black/30 mb-4 relative overflow-hidden rounded-[2rem] mx-auto w-[calc(100%-2.5rem)] shadow-lg ring-1 ring-black/5 dark:ring-white/5">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-white/5 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        )}
        <img 
          src={post.image} 
          alt="Post content" 
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.03] ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
      </div>

      <div className="px-6 pb-6">
        {/* Actions */}
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-3">
              <button className="group/action w-10 h-10 flex items-center justify-center bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-full hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-300 border border-white/20 dark:border-white/5">
                <Heart className="w-5 h-5 text-gray-800 dark:text-white group-hover/action:text-red-500 transition-colors" />
              </button>
              <button className="group/action w-10 h-10 flex items-center justify-center bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-full hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-300 border border-white/20 dark:border-white/5">
                <MessageCircle className="w-5 h-5 text-gray-800 dark:text-white group-hover/action:text-gold transition-colors" />
              </button>
              <button className="group/action w-10 h-10 flex items-center justify-center bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-full hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-300 border border-white/20 dark:border-white/5">
                <Share2 className="w-5 h-5 text-gray-800 dark:text-white group-hover/action:text-gold transition-colors" />
              </button>
           </div>
           <button className="group/action w-10 h-10 flex items-center justify-center bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-full hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-300 border border-white/20 dark:border-white/5">
              <Bookmark className="w-5 h-5 text-gray-800 dark:text-white group-hover/action:text-gold transition-colors" />
           </button>
        </div>
        
        {/* Likes & Caption */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-5 h-5 rounded-full border border-white dark:border-[#2c2c2e] bg-gray-300 dark:bg-gray-600"></div>
                ))}
             </div>
             <span className="text-xs font-bold text-gray-900 dark:text-white cursor-pointer hover:text-gold transition-colors">{post.likes} likes</span>
          </div>
          
          <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-normal">
            <span className="font-bold text-gray-900 dark:text-white mr-2">{post.user.name}</span>
            {post.caption}
          </div>
          <div className="text-[10px] text-gray-400 dark:text-gray-500 font-semibold tracking-wider uppercase">{post.timeAgo}</div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="pb-28 pt-24 min-h-screen text-gray-900 dark:text-white">
      {/* Header - Frosted Glass Bar */}
      <div className="fixed top-4 left-4 right-4 z-40 bg-white/50 dark:bg-[#1c1c1e]/70 backdrop-blur-[50px] saturate-150 border border-white/40 dark:border-white/10 px-5 h-16 rounded-[2rem] flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        <div className="flex items-center gap-2 group cursor-pointer">
           <Logo className="w-8 h-8 drop-shadow-md" />
           <span className="font-bold text-lg tracking-tight hidden sm:block text-gray-900 dark:text-white">K-Nightlife</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 active:scale-95 relative group">
            <Bell className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-gold transition-colors" />
            <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#2c2c2e]"></span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 active:scale-95">
            <Send className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-gold transition-colors -ml-0.5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col pt-2">
        {POSTS.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
        {/* Duplicate posts for scrolling */}
        {POSTS.map(post => (
          <PostCard key={`dup-${post.id}`} post={{...post, id: `dup-${post.id}`}} />
        ))}
      </div>
    </div>
  );
};

export default Home;