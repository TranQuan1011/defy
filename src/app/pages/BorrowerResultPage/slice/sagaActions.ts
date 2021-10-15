import { createAction } from '@reduxjs/toolkit';
import { resultBorrower } from 'app/commons/types';

export const resultBorrowerReq = createAction<resultBorrower>(
  'RESULT_BORROWER_REQ',
);
