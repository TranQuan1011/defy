import { createAction } from '@reduxjs/toolkit';

import { User, Crypto, resultBorrower } from './commons/types';

export const fetchUserReq = createAction<string>('FECTH_USER_REQ');

export const fetchUserSuccess = createAction<User>('FECTH_USER_SUCCESS');

export const logout = createAction<undefined>('LOG_OUT');

export const fetchCrypto = createAction<undefined>('FETCH_CRYPTOP');

export const setCollateral = createAction<Crypto[]>('SET_COLLATERAL');

export const setLoan = createAction<Crypto[]>('SET_LOAN');

export const fetchBorrower = createAction<undefined>('FETCH_BORROWER');

export const setCollateralBorrower = createAction<resultBorrower[]>(
  'SET_COLLATERAL_BORROWER',
);

export const setLoanBorrower =
  createAction<resultBorrower[]>('SET_LOAN_BORROWER');
