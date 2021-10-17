import { FetchParams } from 'app/pages/BorrowerResultPage/slice/types';
import { base } from './base';

export const fetchBorrowrResult = (params: FetchParams) => {
  return base.get('/pawn-shop-package/search', {
    params,
  });
};
