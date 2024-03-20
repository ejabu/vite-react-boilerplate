import { useState } from 'react';

import { useRepo } from './useRepo';

export const useCase = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { users } = useRepo(pageIndex);
  const handleNext = () => {
    setPageIndex((pageIndex) => pageIndex + 1);
  };
  const handlePrevious = () => {
    setPageIndex((pageIndex) => pageIndex - 1);
  };

  return {
    users,
    pageIndex,
    handleNext,
    handlePrevious,
  };
};
