import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

const selector = createSelector(
  (state: RootState) => state.borrowerResultPage.isFilterbarOpen,
  (state: RootState) => state.borrowerResultPage.filterOption,
  (state: RootState) => state.borrowerResultPage.list,
  (state: RootState) => state.borrowerResultPage.card,
  (state: RootState) =>
    state.globalReducer?.collateral.map(item => item.symbol),
  (state: RootState) => state.globalReducer?.loan.map(item => item.symbol),
  (isFilterbarOpen, filterOption, list, card, collateral, loan) => ({
    isFilterbarOpen,
    filterOption,
    list,
    card,
    collateral,
    loan,
  }),
);

export default selector;
