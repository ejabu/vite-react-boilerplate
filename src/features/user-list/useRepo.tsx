import { useQuery } from '@tanstack/react-query';

import userService from '../../services/user.service';

export const useRepo = (pageIndex: number) => {
  const query = useQuery({
    initialData: [],
    queryKey: [pageIndex],
    queryFn: () => userService.getUsers(pageIndex),
    cacheTime: 5 * 60 * 1000,
  });

  return query;
};
