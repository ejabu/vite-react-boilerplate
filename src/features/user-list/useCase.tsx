import { usersStub } from './users.stub';

export const useCase = () => {
  const users = usersStub.data.filter((x) => x.age > 10);
  console.log('to check');

  const handleNext = () => {
    console.log('Handle Next');
  };
  const handlePrevious = () => {
    console.log('Handle Previous');
  };

  return {
    users,
    handleNext,
    handlePrevious,
  };
};
