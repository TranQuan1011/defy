import { createReducer } from '@reduxjs/toolkit';
import { GlobalReducer } from 'app/commons/types';
import {
  fetchUserSuccess,
  logout,
  setCollateral,
  setLoan,
} from './globalActions';

const initialState = {
  user: null,
  collateral: [],
  loan: [],
};

export const globalReducer = createReducer(initialState as GlobalReducer, {
  [fetchUserSuccess.toString()]: (state, action) => {
    return { ...state, user: action.payload };
  },
  [logout.toString()]: state => {
    return { ...state, user: null };
  },
  [setCollateral.toString()]: (state, action) => {
    return { ...state, collateral: action.payload };
  },
  [setLoan.toString()]: (state, action) => {
    return { ...state, loan: action.payload };
  },
});
