import React from 'react';
import { User } from '../types';

interface ProfilePageProps {
  currentUser: User;
  onNavigateToFeed: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  currentUser,
  onNavigateToFeed
}) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">{currentUser.avatar}</div>
          <h1 className="text-3xl font-bold text-white mb-2">{currentUser.name}</h1>
          <p className="text-white">Cheese Level: {currentUser.cheeseLevel}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">📝</div>
            <div className="text-3xl font-bold text-yellow-600">24</div>
            <div className="text-gray-600">Total Posts</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">❤️</div>
            <div className="text-3xl font-bold text-red-500">1,247</div>
            <div className="text-gray-600">Total Likes</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">😊</div>
            <div className="text-3xl font-bold text-blue-500">5,432</div>
            <div className="text-gray-600">Smiles Made</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-2xl">
              <div className="text-3xl mb-2">🧀</div>
              <div className="text-sm font-semibold text-gray-700">Cheese Lord</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-2xl">
              <div className="text-3xl mb-2">❤️</div>
              <div className="text-sm font-semibold text-gray-700">Heart Stealer</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-2">😎</div>
              <div className="text-sm font-semibold text-gray-700">Smooth Operator</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-2xl">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-sm font-semibold text-gray-700">Rising Star</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNavigateToFeed}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full transition-all"
          >
            Kembali ke Feed
          </button>
        </div>
      </div>
    </div>
  );
};