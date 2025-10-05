"use client";

import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { useUser } from '../hooks/useUser';
import { useNavigation } from '../hooks/useNavigation';
import { useCreatePost } from '../hooks/useCreatePost';
import { LandingPage } from '../pageComponents/LandingPage';
import { FeedPage } from '../pageComponents/FeedPage';
import { LeaderboardPage } from '../pageComponents/LeaderboardPage';
import { ProfilePage } from '../pageComponents/ProfilePage';
import { LeaderboardUser, DailyChallenge } from '../types';

const leaderboard: LeaderboardUser[] = [
  { rank: 1, name: 'Dina Sweet', avatar: '👧', points: 1247, badge: '🧀 Cheese Lord' },
  { rank: 2, name: 'Sarah Cheese', avatar: '👩', points: 1134, badge: '🎭 Master of Corny' },
  { rank: 3, name: 'Budi Keju', avatar: '👨', points: 892, badge: '😎 Smooth Operator' }
];

const dailyChallenge: DailyChallenge = {
  title: "Daily Cheese Challenge",
  prompt: "Buat pickup line paling norak dengan tema 'makanan' hari ini! 🍕",
  reward: "+50 Cheese Points"
};

const CheesyApp = () => {
  const { posts, addPost, likePost } = usePosts();
  const { user } = useUser();
  const { currentPage, setCurrentPage } = useNavigation();
  const {
    showCreateModal,
    newPost,
    openModal,
    closeModal,
    updateNewPost
  } = useCreatePost();

  const handleCreatePost = () => {
    if (newPost.content.trim()) {
      addPost(newPost, user);
      closeModal();
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={() => setCurrentPage('feed')} />;
      case 'feed':
        return (
          <FeedPage
            posts={posts}
            currentUser={user}
            dailyChallenge={dailyChallenge}
            showCreateModal={showCreateModal}
            newPost={newPost}
            onLikePost={likePost}
            onOpenCreateModal={openModal}
            onCloseCreateModal={closeModal}
            onUpdateNewPost={updateNewPost}
            onCreatePost={handleCreatePost}
            onNavigateToLeaderboard={() => setCurrentPage('leaderboard')}
            onNavigateToProfile={() => setCurrentPage('profile')}
          />
        );
      case 'leaderboard':
        return (
          <LeaderboardPage
            leaderboard={leaderboard}
            onNavigateToFeed={() => setCurrentPage('feed')}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            currentUser={user}
            onNavigateToFeed={() => setCurrentPage('feed')}
          />
        );
      default:
        return <LandingPage onGetStarted={() => setCurrentPage('feed')} />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentPage()}
    </div>
  );
};

export default CheesyApp;