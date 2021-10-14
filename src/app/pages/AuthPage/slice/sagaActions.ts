import { createAction } from '@reduxjs/toolkit';
import { SignUp, LogIn } from 'app/commons/types';

export const signUpReq = createAction<SignUp>('SIGN_UP_REQ');

export const logInReq = createAction<LogIn>('LOG_IN_REQ');
