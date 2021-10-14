import { createReducer } from '@reduxjs/toolkit';
import { GlobalReducer } from 'app/commons/types';
import { fetchUserSuccess } from './globalActions';

const initialState = {
  user: null,
};

export const globalReducer = createReducer(initialState as GlobalReducer, {
  [fetchUserSuccess.toString()]: (state, action) => {
    return { ...state, user: action.payload };
  },
});
