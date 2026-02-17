import React, { useState } from 'react';
import { SlidersHorizontal, ChevronRight, Bookmark, MapPin } from 'lucide-react';
import { EVENTS } from '../constants';
import { Event } from '../types';

// Sub-component to handle individual avatar loading state
const AttendeeAvatar: React.FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="w-6 h-6 rounded-full border border-white/40 dark:border-white/10 overflow-hidden ring-1 ring-white/20 dark:ring-black/20 transform transition-all duration-300 hover:scale-125 hover:z-20 hover:ring-gold/50 relative bg-gray-200 dark:bg-gray-800">
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-white/20 animate-pulse" />}
      <img 
        src={src} 
        alt="" 
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
      />
    </div>
  );
};

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 group border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 ease-out hover:shadow-[0_25px_50px_-12px_rgba(191,166,104,0.3)] hover:border-gold/40 hover:-translate-y-2">
      {/* Image Container with Zoom & Rotate */}
      <div className="absolute inset-0 overflow-hidden bg-gray-200 dark:bg-gray-900 rounded-[2rem]">
        {!isImageLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-white/5 animate-pulse" />}
        <img 
          src={event.image} 
          alt={event.title} 
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1 ${isImageLoaded ? 'opacity-90' : 'opacity-0'}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 dark:to-black/90 group-hover:to-black transition-all duration-500" />
      </div>

      {/* Date Badge - Top Left */}
      <div className="absolute top-6 left-6 z-20">
         <div className="bg-[#bfa668]/90 backdrop-blur-sm rounded-2xl w-16 h-16 flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/20 dark:border-white/10 transition-all duration-500 group-hover:bg-[#d4c08a] group-hover:shadow-[0_0_30px_rgba(191,166,104,0.6)] group-hover:scale-110 group-hover:-rotate-6">
            <span className="text-xl font-bold text-black leading-none mb-1">{event.date.day}</span>
            <span className="text-[10px] font-bold text-black/80 uppercase tracking-widest">{event.date.month}</span>
         </div>
      </div>

      {/* Attendees - Top Right */}
      <div className="absolute top-6 right-6 z-20 transition-all duration-500 group-hover:-translate-y-1">
        <div className="bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-full py-1.5 pl-1.5 pr-3 flex items-center border border-white/30 dark:border-white/10 shadow-lg cursor-pointer transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-black/70 group-hover:border-gold/40 group-hover:shadow-[0_0_20px_rgba(191,166,104,0.2)]">
          <div className="flex -space-x-2 transition-all duration-500 group-hover:space-x-[-2px]">
            {event.attendees.avatars.map((avatar, i) => (
              <AttendeeAvatar key={i} src={avatar} />
            ))}
          </div>
          <span className="text-[10px] font-bold ml-2 text-gray-900 dark:text-white/90 group-hover:text-gold transition-colors">+{event.attendees.count}</span>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex justify-between items-end gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
           <div className="flex-1">
             {/* Location Reveal */}
             <div className="flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-wider mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                <MapPin className="w-3.5 h-3.5" />
                <span className="truncate">{event.location}</span>
             </div>

             <h3 className="text-2xl font-bold text-white leading-tight mb-2 drop-shadow-lg transition-colors duration-300 group-hover:text-[#f0e6d2]">
               {event.title}
             </h3>
             <div className="flex items-center text-white/90 hover:text-white transition-colors text-xs font-semibold tracking-wide uppercase cursor-pointer group/btn w-fit">
               <span className="border-b border-transparent group-hover/btn:border-gold pb-0.5 transition-all">View Details</span>
               <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1 text-gold" />
             </div>
           </div>
           
           <button 
             onClick={(e) => {
               e.stopPropagation();
               setIsSaved(!isSaved);
             }}
             className={`min-w-[48px] h-[48px] rounded-full backdrop-blur-2xl border flex items-center justify-center transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.3)] active:scale-90 group/bookmark relative overflow-hidden ${
               isSaved 
                 ? 'bg-gold border-gold scale-110 shadow-[0_0_25px_rgba(191,166,104,0.6)]' 
                 : 'bg-white/20 dark:bg-white/10 border-white/30 dark:border-white/20 group-hover:bg-white/30 dark:group-hover:bg-white/20 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(191,166,104,0.2)]'
             }`}
           >
              {/* Internal glow for non-saved state */}
              {!isSaved && <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
              
              <Bookmark 
                className={`w-5 h-5 transition-all duration-300 relative z-10 ${
                  isSaved 
                    ? 'fill-black text-black' 
                    : 'text-white group-hover:text-gold group-hover:scale-110'
                }`} 
              />
           </button>
        </div>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  return (
    <div className="pb-24 pt-4 min-h-screen text-gray-900 dark:text-white px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 sticky top-0 z-30 py-4 -mx-4 px-4 bg-white/5 dark:bg-black/20 backdrop-blur-3xl border-b border-white/10 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-2xl transition-all duration-300">
        <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-white dark:to-gray-400">Events</h1>
        <button className="text-gold p-2.5 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-lg hover:bg-white/30 dark:hover:bg-white/10 hover:border-gold/30 hover:shadow-[0_0_15px_rgba(191,166,104,0.3)] hover:rotate-180 transition-all duration-500 active:scale-90">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Events List */}
      <div className="flex flex-col">
        {EVENTS.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;