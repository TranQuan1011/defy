import { AxiosResponse } from 'axios';
import base from './base';
import { SignUp, LogIn } from 'app/commons/types';

export const signUp = (data: SignUp): Promise<AxiosResponse<SignUp>> => {
  return base.post('/users/signup', data);
};

export const logIn = (data: LogIn): Promise<AxiosResponse<SignUp>> => {
  return base.post('/users/login', data);
};

export const confirmToken = (token: string): Promise<AxiosResponse<string>> => {
  return base.get('/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
