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
    <div className="mb-6 border-b border-white/10 dark:border-white/5 pb-6 bg-white/30 dark:bg-white/[0.05] backdrop-blur-3xl rounded-[2rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] mx-2 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(191,166,104,0.15)] dark:hover:shadow-[0_15px_40px_rgba(191,166,104,0.05)] hover:border-white/40 dark:hover:border-white/20 group">
      <div className="px-4 pt-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 cursor-pointer group/user">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/40 dark:border-white/10 bg-white/20 dark:bg-white/5 ring-2 ring-transparent dark:ring-white/5 transition-transform duration-300 group-hover/user:scale-105 group-hover/user:ring-gold/50 relative shadow-inner">
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
               <span className="text-sm font-bold text-gray-900 dark:text-white tracking-wide group-hover/user:text-gold transition-colors leading-tight">{post.user.name}</span>
               <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Dubai, UAE</span>
            </div>
          </div>
          <button className="text-gray-500 dark:text-gray-400 w-8 h-8 flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 rounded-full transition-all duration-300 hover:text-black dark:hover:text-white hover:rotate-90 active:scale-90 backdrop-blur-md">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full aspect-[4/5] bg-gray-200 dark:bg-black/50 mb-3 relative overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-2xl mx-auto w-[calc(100%-2rem)] shadow-lg ring-1 ring-black/5 dark:ring-white/5">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="px-5 pb-2">
        {/* Actions */}
        <div className="flex items-center justify-between mb-3">
           <div className="flex items-center gap-4">
              <button className="group/action p-2 -ml-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-full transition-all duration-300">
                <Heart className="w-6 h-6 text-gray-800 dark:text-white group-hover/action:text-red-500 transition-colors cursor-pointer drop-shadow-sm group-active/action:scale-75" />
              </button>
              <button className="group/action p-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-full transition-all duration-300">
                <MessageCircle className="w-6 h-6 text-gray-800 dark:text-white group-hover/action:text-gold transition-colors cursor-pointer drop-shadow-sm group-active/action:scale-75" />
              </button>
              <button className="group/action p-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-full transition-all duration-300">
                <Share2 className="w-6 h-6 text-gray-800 dark:text-white group-hover/action:text-gold transition-colors cursor-pointer drop-shadow-sm group-active/action:scale-75" />
              </button>
           </div>
           <button className="group/action p-2 -mr-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-full transition-all duration-300">
              <Bookmark className="w-6 h-6 text-gray-800 dark:text-white group-hover/action:text-gold transition-colors cursor-pointer drop-shadow-sm group-active/action:scale-75" />
           </button>
        </div>
        
        {/* Likes & Caption */}
        <div className="mb-1 space-y-1">
          <div className="flex -space-x-2 items-center mb-2">
             <div className="w-5 h-5 rounded-full border border-white dark:border-black bg-gray-300"></div>
             <div className="w-5 h-5 rounded-full border border-white dark:border-black bg-gray-400"></div>
             <div className="w-5 h-5 rounded-full border border-white dark:border-black bg-gray-500"></div>
             <span className="text-xs font-bold text-gray-900 dark:text-white ml-3 cursor-pointer hover:text-gold transition-colors">{post.likes} likes</span>
          </div>
          
          <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-light">
            <span className="font-bold text-gray-900 dark:text-white mr-2 cursor-pointer hover:underline">{post.user.name}</span>
            {post.caption}
          </div>
          <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 uppercase tracking-wider font-semibold">{post.timeAgo}</div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="pb-24 pt-20 min-h-screen text-gray-900 dark:text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/30 dark:bg-black/30 backdrop-blur-3xl border-b border-white/20 dark:border-white/10 px-4 h-16 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-none transition-all duration-300">
        <div className="flex items-center gap-2 group cursor-pointer">
           {/* Logo Graphic */}
           <Logo className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" />
           <span className="font-bold text-lg tracking-tight hidden sm:block">K-Nightlife</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95 relative group shadow-sm">
            <Bell className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-gold transition-colors" />
            <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-black shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-sm">
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