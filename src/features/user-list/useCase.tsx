import { useState } from 'react';

import { usersStub } from './users.stub';

export const useCase = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const users = usersStub.data.filter((x) => x.age > 10);

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
