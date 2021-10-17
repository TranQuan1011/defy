import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { item, LendNFTPageState, List, FilterOption } from './types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import rootSaga from './saga'
import * as sagaActions from './sagaAction';

export const initialState: LendNFTPageState = {
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
    content: [] as item[],
    _first: true,
    _last: true,
    total_pages: 0,
    total_elements: 0,
    page: 0,
  },
};

const slice = createSlice({
  name: 'lendNftPage',  
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
    setList(state, action: PayloadAction<List>) {
      state.list = action.payload;
    },
  },
});

export const { actions: lendNFTPageActions } = slice;

export const useLendNFTPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'lendNftResult', saga: rootSaga });
  return { actions: slice.actions, sagaActions };
};

