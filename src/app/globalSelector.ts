import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../types/RootState';

const selector = createSelector(
  (state: RootState) => state.globalReducer,
  globalReducer => globalReducer,
);

export default selector;
