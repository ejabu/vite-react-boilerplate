import { useState } from 'react';

import { useRepo } from './useRepo';

export const useCase = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, isFetching } = useRepo(pageIndex);
  const handleNext = () => {
    setPageIndex((pageIndex) => pageIndex + 1);
  };
  const handlePrevious = () => {
    setPageIndex((pageIndex) => pageIndex - 1);
  };

  return {
    users: data,
    isFetching,
    pageIndex,
    handleNext,
    handlePrevious,
  };
};
