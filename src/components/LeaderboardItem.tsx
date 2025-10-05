import React from 'react';
import { LeaderboardUser } from '../types';

interface LeaderboardItemProps {
  user: LeaderboardUser;
}

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ user }) => {
  return (
    <div className="flex items-center gap-4 p-6 hover:bg-gray-50 transition-all">
      <div className={`text-3xl font-bold w-12 text-center ${
        user.rank === 1 ? 'text-yellow-500' :
        user.rank === 2 ? 'text-gray-400' :
        user.rank === 3 ? 'text-orange-600' : 'text-gray-300'
      }`}>
        #{user.rank}
      </div>
      <div className="text-4xl">{user.avatar}</div>
      <div className="flex-1">
        <div className="font-bold text-gray-800 text-lg">{user.name}</div>
        <div className="text-sm text-gray-500">{user.badge}</div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-yellow-600">{user.points}</div>
        <div className="text-xs text-gray-500">cheese points</div>
      </div>
    </div>
  );
};