import UserService from './user.service';

const userService = new UserService();

export const reactGetUsers = async () => {
  const users = await userService.getUsers(1);

  return users.length;
};
