import { useCase } from './useCase';
import { usersStub } from './users.stub';

const UserList = () => {
  const users = usersStub.data.filter((x) => x.age > 10);
  const { handleNext, handlePrevious } = useCase();

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
