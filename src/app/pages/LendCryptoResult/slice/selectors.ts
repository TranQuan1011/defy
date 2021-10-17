import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

const selector = createSelector(
  (state: RootState) => state.lendCryptoPage.isFilterbarOpen,
  (state: RootState) => state.lendCryptoPage.filterOption,
  (state: RootState) => state.lendCryptoPage.list,
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
