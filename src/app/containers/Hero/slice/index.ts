import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { HeroState } from './types';

export const initialState: HeroState = {
  borrowLendTab: 0,
  lendTab: 'crypto',
};

const slice = createSlice({
  name: 'heroState',
  initialState,
  reducers: {
    changeBorrowLendTab(state, action: PayloadAction<number>) {
      state.borrowLendTab = action.payload;
    },
    changeLendTab(state, action: PayloadAction<string>) {
      state.lendTab = action.payload;
    },
  },
});

export const useHeroSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
