import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

const selector = createSelector(
  (state: RootState) => state.authPage,
  authPageState => authPageState,
);

export default selector;
