import { useState } from 'react';
import { NewPost } from '../types';

export const useCreatePost = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPost, setNewPost] = useState<NewPost>({ content: '', type: 'pickup-line' });

  const openModal = () => setShowCreateModal(true);
  const closeModal = () => {
    setShowCreateModal(false);
    setNewPost({ content: '', type: 'pickup-line' });
  };

  const updateNewPost = (updates: Partial<NewPost>) => {
    setNewPost(prev => ({ ...prev, ...updates }));
  };

  return {
    showCreateModal,
    newPost,
    openModal,
    closeModal,
    updateNewPost
  };
};