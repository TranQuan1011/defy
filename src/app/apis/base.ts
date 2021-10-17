import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const authBase = axios.create({
  baseURL:
    'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0',
});

export const ResultLendNft = axios.create({
  baseURL: 'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0',
});
