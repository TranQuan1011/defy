import axios from 'axios';

export const getData = () => {
  axios
    .get(
      'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop-package/search',
    )
    .then(res => res.data)
    .catch(res => console.log(res));
};
