import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

const selector = createSelector(
  (state: RootState) => state.searchAction,
  searchResult => searchResult,
);

export default selector;
