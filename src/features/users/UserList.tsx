import { usersStub } from './users.stub';

const UserList = () => {
  const users = usersStub.data.filter((x) => x.age > 10);

  return (
    <div>
      <h3>User List</h3>
      <br />
      {users.map((user) => {
        return <div key={user.id}>{user.lastName}</div>;
      })}
    </div>
  );
};

export default UserList;
