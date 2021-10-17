import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { item, LendNFTPageState, List } from './types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import rootSaga from './saga'
import * as sagaActions from './sagaAction';

export const initialState: LendNFTPageState = {
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

