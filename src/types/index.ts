export interface User {
  name: string;
  avatar: string;
  cheeseLevel: number;
}

export interface Post {
  id: number;
  user: User;
  content: string;
  type: 'pickup-line' | 'joke' | 'meme';
  cheeseMeter: number;
  likes: number;
  comments: number;
  timestamp: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  badge: string;
}

export interface DailyChallenge {
  title: string;
  prompt: string;
  reward: string;
}

export interface NewPost {
  content: string;
  type: 'pickup-line' | 'joke' | 'meme';
}

export type PageType = 'landing' | 'feed' | 'leaderboard' | 'profile';