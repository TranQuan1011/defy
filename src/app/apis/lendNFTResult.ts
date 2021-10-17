import { base } from './base';
import { FetchParams } from 'app/pages/LendCryptoResult/slice/types';

export const fetchList = (params: FetchParams) => {
  return base.get('/account/collaterals/nfts/search', {
    params,
  });
};
