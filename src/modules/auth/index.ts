import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

export const AUTH_COOKIE_NAME = 'AUTH_TOKEN';

export type User = {
  email: string;
  name: string;
  password: string;
  token?: string;
};
const users: User[] = [
  {
    email: 'amr.halim@gmail.com',
    name: 'Amr Halim',
    password: '12345',
  },
  {
    email: 'amr.haliim@gmail.com',
    name: 'Amr',
    password: '12345',
  },
];

export const userExists = ({ email }: User): boolean => users.some((user) => user.email === email);

export const login = ({ email, password }: User): User | undefined => {
  const user = users.find((_user) => _user.email === email && _user.password === password);

  if (user) {
    user.token = uuid();
    return user;
  }
};

export const logout = (token?: string) => {
  const user = users.find((_user) => _user.token === token);

  if (user) {
    user.token = '';
  }
};

export const register = (user: User) => {
  const newUser = { ...user, token: uuid() };
  users.push(newUser);
  return newUser;
};

export const authenticate = (req: Request) => {
  const authToken = req.cookies?.[AUTH_COOKIE_NAME];

  return users.filter((user) => Boolean(user.token)).find((user) => user.token === authToken);
};

export const persistAuthToken = (res: Response, token: string) => res.cookie(AUTH_COOKIE_NAME, token);
