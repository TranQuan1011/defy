import { createAction } from '@reduxjs/toolkit';

import { User, Crypto } from './commons/types';

export const fetchUserReq = createAction<string>('FECTH_USER_REQ');

export const fetchUserSuccess = createAction<User>('FECTH_USER_SUCCESS');

export const logout = createAction<undefined>('LOG_OUT');

export const fetchCrypto = createAction<undefined>('FETCH_CRYPTOP');

export const setCollateral = createAction<Crypto[]>('SET_COLLATERAL');

export const setLoan = createAction<Crypto[]>('SET_LOAN');
