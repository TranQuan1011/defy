import { createAction } from '@reduxjs/toolkit';
import { FetchParams } from './types';
export const fetchListReq = createAction<FetchParams>('FETCH_LIST_REQ');

export const fetchCardReq = createAction<undefined>('FECTH_CARD_REQ');
