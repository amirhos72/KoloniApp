import { Post, Event, UserProfile } from './types';

export const CURRENT_USER: UserProfile = {
  name: "Kris",
  handle: "@moonlightwithme",
  avatar: "https://iili.io/qdUdtxn.jpg",
  coverImage: "https://iili.io/qdUFUiu.jpg",
  stats: {
    posts: 0,
    followers: 0,
    following: 0
  }
};

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "Yume Night Club Dubai Tickets [2025]",
    date: { day: "8", month: "DEC" },
    image: "https://iili.io/qdU1GvR.jpg",
    location: "Yume Night Club",
    attendees: {
      avatars: [
        "https://picsum.photos/id/1005/100/100",
        "https://picsum.photos/id/1011/100/100",
        "https://picsum.photos/id/1027/100/100"
      ],
      count: 36
    }
  },
  {
    id: "2",
    title: "Provocateur Lounge & Club",
    date: { day: "9", month: "DEC" },
    image: "https://picsum.photos/id/452/800/600",
    location: "Provocateur",
    attendees: {
      avatars: [
        "https://picsum.photos/id/338/100/100",
        "https://picsum.photos/id/349/100/100",
        "https://picsum.photos/id/364/100/100"
      ],
      count: 33
    }
  }
];

export const POSTS: Post[] = [
  {
    id: "1",
    user: {
      name: "hanie",
      avatar: "https://picsum.photos/id/338/100/100"
    },
    image: "https://iili.io/qd6IOvI.png",
    likes: 1,
    comments: 0,
    caption: "Dubai nights hit different with Red Bull & Jägermeister 🥶🔥",
    timeAgo: "3 days ago",
    type: 'post'
  },
  {
    id: "2",
    user: {
      name: "mark_dj",
      avatar: "https://picsum.photos/id/1012/100/100"
    },
    image: "https://iili.io/qd6IlkP.png",
    likes: 124,
    comments: 42,
    caption: "Main stage energy! ⚡",
    timeAgo: "5 hours ago",
    type: 'post'
  },
  {
    id: "3",
    user: {
      name: "sarah_dance",
      avatar: "https://picsum.photos/id/1027/100/100"
    },
    image: "https://iili.io/qd61C3F.png",
    likes: 89,
    comments: 12,
    caption: "Lost in the rhythm 💃✨",
    timeAgo: "6 hours ago",
    type: 'post'
  },
  {
    id: "4",
    user: {
      name: "night_owl",
      avatar: "https://picsum.photos/id/325/100/100"
    },
    image: "https://iili.io/qd613QV.png",
    likes: 245,
    comments: 34,
    caption: "Neon lights and good vibes 🌌",
    timeAgo: "12 hours ago",
    type: 'post'
  }
];

export const REELS: Post[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `reel-${i}`,
  user: { name: `user${i}`, avatar: "" },
  image: `https://picsum.photos/seed/${i + 50}/400/600`,
  likes: 0,
  comments: 0,
  caption: "",
  timeAgo: "",
  type: 'reel'
}));