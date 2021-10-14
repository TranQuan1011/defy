import { createAction } from '@reduxjs/toolkit';

import { User } from './commons/types';

export const fetchUserReq = createAction<string>('FECTH_USER_REQ');

export const fetchUserSuccess = createAction<User>('FECTH_USER_SUCCESS');
