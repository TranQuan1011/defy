import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { Item, LendCryptoPageState, List, FilterOption } from './types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import rootSaga from './saga';
import * as sagaActions from './sagaActions';

export const initialState: LendCryptoPageState = {
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
    duration: {
      Weeks: false,
      Month: false,
    },
  },
  list: {
    content: [] as Item[],
    _first: true,
    _last: true,
    total_pages: 0,
    total_elements: 0,
    page: 0,
  },
};

const slice = createSlice({
  name: 'lendCryptoPage',
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
    resetFilter(state) {
      state.filterOption = initialState.filterOption;
    },
    setList(state, action: PayloadAction<List>) {
      state.list = action.payload;
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
        duration: {
          ...state.filterOption.duration,
          ...action.payload.duration,
        },
      };
    },
  },
});

export const { actions: lendCryptoPageActions } = slice;

export const useLendCryptoPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'lendCryptoResult', saga: rootSaga });
  return { actions: slice.actions, sagaActions };
};
