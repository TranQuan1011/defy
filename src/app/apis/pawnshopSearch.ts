import { AxiosResponse } from 'axios';
import { authBase } from './base';
import { resultBorrower } from 'app/commons/types';

export const searchResult = (
  data: resultBorrower,
): Promise<AxiosResponse<resultBorrower>> => {
  return authBase.get('/pawn-shop-package/search', { params: { data } });
};
