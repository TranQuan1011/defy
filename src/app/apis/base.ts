import axios from 'axios';

export const authBase = axios.create({
  baseURL:
    'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0',
});
