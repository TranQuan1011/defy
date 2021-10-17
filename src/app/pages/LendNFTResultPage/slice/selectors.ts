import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

const selector = createSelector(
  // (state: RootState) => state.lendNftPage,
  // (LendNFTPageState) => ({LendNFTPageState}),
  (state: RootState) => state.lendNftPage.isFilterbarOpen,
  (state: RootState) => state.lendNftPage.filterOption,
  (state: RootState) => state.lendNftPage.list,
  (state: RootState) =>
    state.globalReducer?.collateral.map(item => item.symbol),
  (state: RootState) => state.globalReducer?.loan.map(item => item.symbol),
  (isFilterbarOpen, filterOption, list, collateral, loan) => ({
    isFilterbarOpen,
    filterOption,
    list,
    collateral,
    loan,
  }),
);

export default selector;
