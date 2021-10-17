import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

const selector = createSelector(
  (state: RootState) => state.lendNFTPage.isFilterbarOpen,
  (state: RootState) => state.lendNFTPage.filterOption,
  (state: RootState) => state.lendNFTPage.list,
  (state: RootState) => state.globalReducer?.loan.map(item => item.symbol),
  (isFilterbarOpen, filterOption, list, loan) => ({
    isFilterbarOpen,
    filterOption,
    list,
    loan,
  }),
);

export default selector;
