import React, { useState } from 'react';
import { SlidersHorizontal, ChevronRight, Bookmark, MapPin, Loader2 } from 'lucide-react';
import { EVENTS } from '../constants';
import { Event } from '../types';

// Sub-component to handle individual avatar loading state
const AttendeeAvatar: React.FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="w-7 h-7 rounded-full border-2 border-white dark:border-[#1c1c1e] overflow-hidden transform transition-all duration-300 hover:scale-125 hover:z-20 relative bg-gray-200 dark:bg-gray-800">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-white/20 flex items-center justify-center">
           <Loader2 className="w-3 h-3 text-gold animate-spin" />
        </div>
      )}
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
    <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 group border border-white/40 dark:border-white/10 bg-white/40 dark:bg-[#1c1c1e]/60 backdrop-blur-[50px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:scale-[1.02]">
      {/* Image Container with Zoom & Rotate */}
      <div className="absolute inset-0 overflow-hidden bg-gray-200 dark:bg-gray-900 rounded-[2.5rem]">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-white/5 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        )}
        <img 
          src={event.image} 
          alt={event.title} 
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1 ${isImageLoaded ? 'opacity-90' : 'opacity-0'}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 transition-all duration-500" />
      </div>

      {/* Date Badge - Top Left */}
      <div className="absolute top-6 left-6 z-20">
         <div className="bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-[1.2rem] w-16 h-16 flex flex-col items-center justify-center shadow-lg border border-white/30 dark:border-white/10 transition-all duration-500 group-hover:bg-gold/80 group-hover:border-gold/50">
            <span className="text-xl font-bold text-white leading-none mb-1 shadow-black/50 drop-shadow-sm">{event.date.day}</span>
            <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest drop-shadow-sm">{event.date.month}</span>
         </div>
      </div>

      {/* Attendees - Top Right */}
      <div className="absolute top-6 right-6 z-20 transition-all duration-500 group-hover:-translate-y-1">
        <div className="bg-white/20 dark:bg-black/40 backdrop-blur-md rounded-full py-1.5 pl-1.5 pr-3 flex items-center border border-white/30 dark:border-white/10 shadow-lg">
          <div className="flex -space-x-2.5">
            {event.attendees.avatars.map((avatar, i) => (
              <AttendeeAvatar key={i} src={avatar} />
            ))}
          </div>
          <span className="text-[10px] font-bold ml-2 text-white shadow-black/50 drop-shadow-sm">+{event.attendees.count}</span>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <div className="flex justify-between items-end gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
           <div className="flex-1">
             {/* Location Reveal */}
             <div className="flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-wider mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                <MapPin className="w-3.5 h-3.5" />
                <span className="truncate">{event.location}</span>
             </div>

             <h3 className="text-3xl font-bold text-white leading-none mb-3 drop-shadow-lg tracking-tight">
               {event.title}
             </h3>
             <div className="flex items-center text-white/80 hover:text-white transition-colors text-xs font-semibold tracking-wide uppercase cursor-pointer group/btn w-fit">
               <span className="border-b border-transparent group-hover/btn:border-gold pb-0.5 transition-all">View Details</span>
               <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1 text-gold" />
             </div>
           </div>
           
           <button 
             onClick={(e) => {
               e.stopPropagation();
               setIsSaved(!isSaved);
             }}
             className={`min-w-[56px] h-[56px] rounded-full backdrop-blur-[20px] border flex items-center justify-center transition-all duration-500 shadow-xl active:scale-90 group/bookmark ${
               isSaved 
                 ? 'bg-gold border-gold scale-110' 
                 : 'bg-white/20 dark:bg-black/30 border-white/30 dark:border-white/20 hover:bg-white/30'
             }`}
           >
              <Bookmark 
                className={`w-6 h-6 transition-all duration-300 ${
                  isSaved 
                    ? 'fill-black text-black' 
                    : 'text-white'
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
    <div className="pb-32 pt-28 min-h-screen text-gray-900 dark:text-white px-4">
      {/* Header */}
      <div className="fixed top-4 left-4 right-4 z-40 bg-white/50 dark:bg-[#1c1c1e]/70 backdrop-blur-[50px] saturate-150 border border-white/40 dark:border-white/10 px-6 h-16 rounded-[2rem] flex items-center justify-between shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Events</h1>
        <button className="text-gold w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 active:scale-95">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Events List */}
      <div className="flex flex-col pt-2">
        {EVENTS.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;