import { AxiosResponse } from 'axios';
import { authBase } from './base';
import { SignUp, LogIn } from 'app/commons/types';
import axios from 'axios';

export const signUp = (data: SignUp): Promise<AxiosResponse<SignUp>> => {
  return authBase.post('/users/signup', data);
};

export const logIn = (data: LogIn): Promise<AxiosResponse<SignUp>> => {
  return authBase.post('/users/login', data);
};

export const confirmToken = (token: string): Promise<AxiosResponse<string>> => {
  console.log(`Bearer ${token}`);

  return axios.get(
    'https://staginggw.defiforyou.uk/defi-user-service/api/v1.0.0/users/profile',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
