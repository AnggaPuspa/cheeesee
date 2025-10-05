import { useState } from 'react';
import { Post, NewPost, User } from '../types';

const initialPosts: Post[] = [
  {
    id: 1,
    user: { name: 'Sarah Cheese', avatar: '👩', cheeseLevel: 127 },
    content: "Kamu tahu kenapa aku selalu bawa magnet? Soalnya kamu terlalu menarik! 🧲",
    type: 'pickup-line',
    cheeseMeter: 5,
    likes: 234,
    comments: 12,
    timestamp: '2 jam lalu'
  },
  {
    id: 2,
    user: { name: 'Budi Keju', avatar: '👨', cheeseLevel: 89 },
    content: "Aku bukan fotografer, tapi aku bisa membayangkan kita berdua bersama 📸",
    type: 'joke',
    cheeseMeter: 4,
    likes: 189,
    comments: 8,
    timestamp: '5 jam lalu'
  },
  {
    id: 3,
    user: { name: 'Dina Sweet', avatar: '👧', cheeseLevel: 156 },
    content: "Kalau kamu buah, kamu pasti cherry... karena kamu ada di atas segala-galanya! 🍒",
    type: 'pickup-line',
    cheeseMeter: 5,
    likes: 312,
    comments: 19,
    timestamp: '1 hari lalu'
  }
];

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (newPost: NewPost, currentUser: User) => {
    const post: Post = {
      id: posts.length + 1,
      user: currentUser,
      content: newPost.content,
      type: newPost.type,
      cheeseMeter: Math.floor(Math.random() * 2) + 4, // Random cheese meter 4-5
      likes: 0,
      comments: 0,
      timestamp: 'Baru saja'
    };
    setPosts([post, ...posts]);
  };

  const likePost = (postId: number) => {
    setPosts(posts.map(p =>
      p.id === postId ? { ...p, likes: p.likes + 1 } : p
    ));
  };

  return {
    posts,
    addPost,
    likePost
  };
};