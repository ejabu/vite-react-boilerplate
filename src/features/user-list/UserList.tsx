import { useCase } from './useCase';

const UserList = () => {
  const { users, handleNext, handlePrevious } = useCase();

  return (
    <div>
      <strong>User List</strong>
      <br />
      <div>
        {users.map((user) => {
          return <div key={user.id}>{user.lastName}</div>;
        })}
      </div>
      <div>
        <button type="button" onClick={handleNext}>
          Next
        </button>
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default UserList;
