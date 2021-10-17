import { createAction } from '@reduxjs/toolkit';

export const fetchListReq = createAction<undefined>('FETCH_LIST_REQ');

export const fetchCardReq = createAction<undefined>('FECTH_CARD_REQ');
