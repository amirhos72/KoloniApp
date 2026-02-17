export interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    handle?: string;
  };
  image: string;
  likes: number;
  comments: number;
  caption: string;
  timeAgo: string;
  type: 'post' | 'reel';
}

export interface Event {
  id: string;
  title: string;
  date: {
    day: string;
    month: string;
  };
  image: string;
  attendees: {
    avatars: string[];
    count: number;
  };
  location: string;
}

export interface UserProfile {
  name: string;
  handle: string;
  avatar: string;
  coverImage: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
}