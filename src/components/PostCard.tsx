import React from 'react';
import { Heart, MessageCircle, Share2, Flame } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onLike: (postId: number) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{post.user.avatar}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-bold text-gray-800">{post.user.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{post.timestamp}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Flame size={14} className="text-yellow-500" />
                  Level {post.user.cheeseLevel}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
              {[...Array(post.cheeseMeter)].map((_, i) => (
                <span key={i}>🧀</span>
              ))}
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed">{post.content}</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onLike(post.id)}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-all"
              aria-label={`Like post by ${post.user.name}`}
            >
              <Heart size={20} />
              <span className="font-semibold">{post.likes}</span>
            </button>
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-all"
              aria-label="View comments"
            >
              <MessageCircle size={20} />
              <span className="font-semibold">{post.comments}</span>
            </button>
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-all"
              aria-label="Share post"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};