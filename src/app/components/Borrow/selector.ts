import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../types/RootState';

const selector = createSelector(
  (state: RootState) => state.globalReducer,
  globalState => globalState,
);

export default selector;
