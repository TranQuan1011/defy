import { GET_RESULT_BORROW } from './types';

export const resultBorrowerAction = data => {
  return {
    type: GET_RESULT_BORROW,
    data,
  };
};