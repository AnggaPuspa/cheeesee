import React from 'react';
import { Plus } from 'lucide-react';
import { NewPost } from '../types';

interface CreatePostModalProps {
  isOpen: boolean;
  newPost: NewPost;
  onClose: () => void;
  onUpdatePost: (updates: Partial<NewPost>) => void;
  onSubmit: () => void;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  newPost,
  onClose,
  onUpdatePost,
  onSubmit
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Cheesy Post 🧀</h2>
        <textarea
          value={newPost.content}
          onChange={(e) => onUpdatePost({ content: e.target.value })}
          placeholder="Share your cheesiest pickup line or joke..."
          className="w-full border-2 border-gray-200 rounded-2xl p-4 mb-4 min-h-32 focus:border-yellow-400 focus:outline-none"
        />
        <div className="flex gap-2 mb-4">
          {(['pickup-line', 'joke', 'meme'] as const).map((type) => (
            <button
              key={type}
              onClick={() => onUpdatePost({ type })}
              className={`flex-1 py-2 rounded-full font-semibold transition-all ${
                newPost.type === type ? 'bg-yellow-400 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {type === 'pickup-line' ? 'Pickup Line' :
               type === 'joke' ? 'Joke' : 'Meme'}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-200 transition-all"
          >
            Batal
          </button>
          <button
            onClick={onSubmit}
            disabled={!newPost.content.trim()}
            className="flex-1 bg-yellow-400 text-white font-semibold py-3 rounded-full hover:bg-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post Now! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110"
      aria-label="Create new post"
    >
      <Plus size={32} />
    </button>
  );
};