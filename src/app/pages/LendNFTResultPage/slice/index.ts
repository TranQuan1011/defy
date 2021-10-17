import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Item, LendNFTPageState, List, FilterOption } from './types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import rootSaga from './saga';
import * as sagaActions from './sagaActions';

export const initialState: LendNFTPageState = {
  isFilterbarOpen: false,
  filterOption: {
    duration: {
      Weeks: false,
      Month: false,
    },
    nftType: {
      'Haft NFT': false,
      'Soft NFT': false,
    },
    loan: {
      USDT: false,
      DFY: false,
      BUSD: false,
      USDC: false,
      DAI: false,
    },
    name: '',
  },
  list: {
    content: [] as Item[],
    total_pages: 0,
    total_elements: 0,
  },
};

const slice = createSlice({
  name: 'lendNFTPage',
  initialState,
  reducers: {
    openFilterbar(state) {
      state.isFilterbarOpen = true;
    },
    closeFilterbar(state) {
      state.isFilterbarOpen = false;
    },
    updateLoan(state, action: PayloadAction<string>) {
      state.filterOption.loan = {
        USDT: false,
        DFY: false,
        BUSD: false,
        USDC: false,
        DAI: false,
        [action.payload]: !state.filterOption.loan[action.payload],
      };
    },
    updateDuration(state, action: PayloadAction<string>) {
      state.filterOption.duration[action.payload] =
        !state.filterOption.duration[action.payload];
    },
    updateNFTTypes(state, action: PayloadAction<string>) {
      state.filterOption.nftType[action.payload] =
        !state.filterOption.nftType[action.payload];
    },
    updateName(state, action: PayloadAction<string>) {
      state.filterOption.name = action.payload;
    },
    resetFilter(state) {
      state.filterOption = initialState.filterOption;
    },
    setList(state, action: PayloadAction<List>) {
      state.list = action.payload;
    },
    setFilterOption(state, action: PayloadAction<FilterOption>) {
      state.filterOption = {
        nftType: {
          ...state.filterOption.nftType,
          ...action.payload.nftType,
        },
        loan: {
          ...state.filterOption.loan,
          ...action.payload.loan,
        },
        duration: {
          ...state.filterOption.duration,
          ...action.payload.duration,
        },
        name: action.payload.name,
      };
    },
  },
});

export const { actions: lendNFTPageActions } = slice;

export const useLendNFTPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'lendNFTResult', saga: rootSaga });
  return { actions: slice.actions, sagaActions };
};
