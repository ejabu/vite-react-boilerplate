export const useCase = () => {
  console.log('to check');

  const handleNext = () => {
    console.log('Handle Next');
  };
  const handlePrevious = () => {
    console.log('Handle Previous');
  };

  return {
    handleNext,
    handlePrevious,
  };
};
