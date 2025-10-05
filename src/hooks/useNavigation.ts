import { useState } from 'react';
import { PageType } from '../types';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  return {
    currentPage,
    setCurrentPage
  };
};