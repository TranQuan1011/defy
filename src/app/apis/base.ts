import axios from 'axios';

export const authBase = axios.create({
  baseURL:
    'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0',
});

export const ResultLendNft = axios.create({
  baseURL: 'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/account/collaterals/nfts/search',
});
