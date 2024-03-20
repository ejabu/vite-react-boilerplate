import { useCase } from './useCase';

const UserList = () => {
  const {
    users,
    pageIndex,
    handleNext,
    handlePrevious,
    isFetching,
  } = useCase();

  return (
    <div>
      <strong>User List</strong>
      <br />
      <div>
        {users.map((user) => {
          return <div key={user.id}>{user.lastName}</div>;
        })}
      </div>
      {isFetching && <div>Spinner</div>}
      <div>
        <button type="button" onClick={handleNext}>
          Next
        </button>
        <div>{pageIndex}</div>
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default UserList;
