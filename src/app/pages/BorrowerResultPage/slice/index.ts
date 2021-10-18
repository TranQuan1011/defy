import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import {
  Item,
  BorrowerResultState,
  List,
  FilterOption,
  Card,
  CardItem,
} from './types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import rootSaga from './saga';
import * as sagaActions from './sagaActions';

export const initialState: BorrowerResultState = {
  isFilterbarOpen: false,
  filterOption: {
    collateral: {
      XRP: false,
      ETH: false,
      LTC: false,
      BTC: false,
      DFY: false,
      BNB: false,
      DOT: false,
      ADA: false,
      WBNB: false,
    },
    loan: {
      USDT: false,
      DFY: false,
      BUSD: false,
      USDC: false,
      DAI: false,
    },
    loanType: {
      Auto: false,
      SemiAuto: false,
      Negotiation: false,
    },
    duration: {
      Weeks: false,
      Month: false,
    },
  },
  list: {
    content: [] as Item[],
    total_pages: 0,
    total_elements: 0,
    page: 0,
    has_next: true,
    has_previous: true,
    is_first: true,
    is_last: true,
    number: 0,
    number_of_elements: 0,
    size: 0,
  },
  card: {
    content: [] as CardItem[],
    number: 0,
    page: 0,
    size: 0,
    number_of_elements: 0,
    is_first: true,
    is_last: true,
    has_next: true,
    has_previous: true,
    total_pages: 0,
    total_elements: 0,
  },
};
const slice = createSlice({
  name: 'borrowerResultPage',
  initialState,
  reducers: {
    openFilterbar(state) {
      state.isFilterbarOpen = true;
    },
    closeFilterbar(state) {
      state.isFilterbarOpen = false;
    },
    updateCollateral(state, action: PayloadAction<string>) {
      state.filterOption.collateral[action.payload] =
        !state.filterOption.collateral[action.payload];
    },
    updateLoan(state, action: PayloadAction<string>) {
      state.filterOption.loan[action.payload] =
        !state.filterOption.loan[action.payload];
    },
    updateDuration(state, action: PayloadAction<string>) {
      state.filterOption.duration[action.payload] =
        !state.filterOption.duration[action.payload];
    },
    updateLoanType(state, action: PayloadAction<string>) {
      state.filterOption.loanType[action.payload] =
        !state.filterOption.loanType[action.payload];
    },
    resetFilter(state) {
      state.filterOption = initialState.filterOption;
    },
    setList(state, action: PayloadAction<List>) {
      state.list = action.payload;
    },
    setCard(state, action: PayloadAction<Card>) {
      state.card = action.payload;
    },
    setFilterOption(state, action: PayloadAction<FilterOption>) {
      state.filterOption = {
        collateral: {
          ...state.filterOption.collateral,
          ...action.payload.collateral,
        },
        loan: {
          ...state.filterOption.loan,
          ...action.payload.loan,
        },
        loanType: {
          ...state.filterOption.loanType,
          ...action.payload.loanType,
        },
        duration: {
          ...state.filterOption.duration,
          ...action.payload.duration,
        },
      };
    },
  },
});

export const { actions: borrowerResultPageActions } = slice;

export const useBorrowerResultPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'borrowerSearchResult', saga: rootSaga });
  return { actions: slice.actions, sagaActions };
};
