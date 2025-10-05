import { useState } from 'react';
import { User } from '../types';

const currentUser: User = {
  name: 'You',
  avatar: '😎',
  cheeseLevel: 42
};

export const useUser = () => {
  const [user] = useState<User>(currentUser);

  return {
    user
  };
};