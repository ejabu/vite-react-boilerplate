import { useEffect, useState } from 'react';

import userService from '../../services/user.service';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export const useRepo = (pageIndex: number) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const users = await userService.getUsers(pageIndex);
      setUsers(users);
    }

    fetchData();
  }, [pageIndex]);

  return { users };
};
