import { createReducer } from '@reduxjs/toolkit';
import { GlobalReducer } from 'app/commons/types';
import { fetchUserSuccess, logout } from './globalActions';

const initialState = {
  user: null,
};

export const globalReducer = createReducer(initialState as GlobalReducer, {
  [fetchUserSuccess.toString()]: (state, action) => {
    return { ...state, user: action.payload };
  },
  [logout.toString()]: state => {
    return { ...state, user: null };
  },
});
