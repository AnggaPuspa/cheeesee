import React from 'react';
import { Trophy } from 'lucide-react';
import { LeaderboardUser } from '../types';
import { LeaderboardItem } from '../components/LeaderboardItem';

interface LeaderboardPageProps {
  leaderboard: LeaderboardUser[];
  onNavigateToFeed: () => void;
}

export const LeaderboardPage: React.FC<LeaderboardPageProps> = ({
  leaderboard,
  onNavigateToFeed
}) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="mx-auto mb-4 text-white" size={48} />
          <h1 className="text-4xl font-bold text-white mb-2">Leaderboard</h1>
          <p className="text-white text-lg">Top Cheesers Minggu Ini 🏆</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {leaderboard.map((user, index) => (
            <LeaderboardItem key={user.rank} user={user} />
          ))}
        </div>

        <div className="mt-8 text-center">
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