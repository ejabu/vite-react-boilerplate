import { reactGetUsers } from './user-service-consumer';
import UserService from './user.service';

jest.mock('./user.service');

// jest.mock('./user.service', () => {
//   return jest.fn().mockImplementation(() => {
//     return { getUsers: jest.fn().mockResolvedValue([1, 2, 3]) };
//   });
// });

beforeEach(() => {
  const spy = jest.spyOn(UserService.prototype, 'getUsers');
  spy.mockResolvedValue([1, 2, 3]);
});

afterEach(() => {
  jest.clearAllMocks();
});

it('Default Mock', async () => {
  const count = await reactGetUsers();
  expect(count).toBe(3);
});

it('Specified mock', async () => {
  const spy = jest.spyOn(UserService.prototype, 'getUsers');
  spy.mockResolvedValue([1, 2, 2, 4]);
  const count = await reactGetUsers();
  expect(count).toBe(4);
});
