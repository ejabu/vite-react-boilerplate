import { cx } from 'class-variance-authority';

import { useCase } from './useCase';

const UserList = () => {
  const { users, pageIndex, handleNext, handlePrevious, isFetching } =
    useCase();

  return (
    <div>
      <div className={cx('text-blue-500', pageIndex === 2 && 'text-red-500')}>
        User List
      </div>
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
