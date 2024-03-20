import axios, { AxiosResponse } from 'axios';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type UserResponse = {
  users: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};

class UserService {
  async getUsers(pageIndex: number): Promise<User[]> {
    const skip = (pageIndex - 1) * 10;
    const limit = 10;
    const url = `https://dummyjson.com/users?skip=${skip}&limit=${limit}`;
    const { data }: AxiosResponse<UserResponse> = await axios.get(url);

    return data.users;
  }
}

const userService = new UserService();

export default userService;
