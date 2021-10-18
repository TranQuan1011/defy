import { FetchParams } from 'app/pages/BorrowerResultPage/slice/types';
import { base } from './base';

export const fetchBorrowerCard = () => {
  return base.get('/pawn-shop/search-p2p-lenders');
};
