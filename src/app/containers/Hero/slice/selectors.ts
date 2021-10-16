import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

const selector = createSelector(
  (state: RootState) => state.heroState,
  heroState => ({
    heroState,
  }),
);

export default selector;
