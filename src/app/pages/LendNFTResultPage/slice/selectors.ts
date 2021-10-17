import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

const selector = createSelector(
  (state: RootState) => state.lendNftPage,
  (lendNftPageState) => ({lendNftPageState}),
);

export default selector;
