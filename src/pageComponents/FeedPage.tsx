import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';
import { Post, User, DailyChallenge } from '../types';
import { PostCard } from '../components/PostCard';
import { CreatePostModal, FloatingActionButton } from '../components/CreatePostModal';

interface FeedPageProps {
  posts: Post[];
  currentUser: User;
  dailyChallenge: DailyChallenge;
  showCreateModal: boolean;
  newPost: { content: string; type: 'pickup-line' | 'joke' | 'meme' };
  onLikePost: (postId: number) => void;
  onOpenCreateModal: () => void;
  onCloseCreateModal: () => void;
  onUpdateNewPost: (updates: Partial<{ content: string; type: 'pickup-line' | 'joke' | 'meme' }>) => void;
  onCreatePost: () => void;
  onNavigateToLeaderboard: () => void;
  onNavigateToProfile: () => void;
}

export const FeedPage: React.FC<FeedPageProps> = ({
  posts,
  currentUser,
  dailyChallenge,
  showCreateModal,
  newPost,
  onLikePost,
  onOpenCreateModal,
  onCloseCreateModal,
  onUpdateNewPost,
  onCreatePost,
  onNavigateToLeaderboard,
  onNavigateToProfile
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🧀</span>
              <h1 className="text-2xl font-bold text-gray-800">CheesyApp</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Cheese Level: <span className="font-bold text-yellow-600">{currentUser.cheeseLevel}</span>
              </span>
              <span className="text-2xl">{currentUser.avatar}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Daily Challenge Card */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-6 mb-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-white" size={24} />
                <h2 className="text-xl font-bold text-white">{dailyChallenge.title}</h2>
              </div>
              <p className="text-white text-lg mb-3">{dailyChallenge.prompt}</p>
              <div className="flex items-center justify-between">
                <span className="text-white text-sm font-semibold">{dailyChallenge.reward}</span>
                <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-all">
                  Ikut Challenge!
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map(post => (
                <PostCard key={post.id} post={post} onLike={onLikePost} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="text-yellow-500" size={24} />
                <h2 className="text-xl font-bold text-gray-800">Top Cheesers</h2>
              </div>
              <div className="space-y-4">
                {/* We'll add leaderboard items here */}
                <div className="text-center text-gray-500 py-4">
                  Leaderboard preview - coming soon
                </div>
              </div>
              <button
                onClick={onNavigateToLeaderboard}
                className="w-full mt-4 bg-yellow-50 text-yellow-700 font-semibold py-2 rounded-full hover:bg-yellow-100 transition-all"
              >
                Lihat Semua
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6">
              <h3 className="font-bold text-gray-800 mb-4">Your Stats Today</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Posts Created</span>
                  <span className="font-bold text-yellow-700">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Smiles Made</span>
                  <span className="font-bold text-yellow-700">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cheese Earned</span>
                  <span className="font-bold text-yellow-700">+15 🧀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={showCreateModal}
        newPost={newPost}
        onClose={onCloseCreateModal}
        onUpdatePost={onUpdateNewPost}
        onSubmit={onCreatePost}
      />

      {/* Floating Action Button */}
      <FloatingActionButton onClick={onOpenCreateModal} />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center gap-1 text-yellow-500">
              <span className="text-2xl">🏠</span>
              <span className="text-xs font-semibold">Home</span>
            </button>
            <button
              onClick={onNavigateToLeaderboard}
              className="flex flex-col items-center gap-1 text-gray-400"
            >
              <Trophy size={24} />
              <span className="text-xs">Leaderboard</span>
            </button>
            <button
              onClick={onNavigateToProfile}
              className="flex flex-col items-center gap-1 text-gray-400"
            >
              <span className="text-2xl">👤</span>
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};