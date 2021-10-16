import { base } from './base';

const fetchBorrowrResult = () => base.get('/pawn-shop-package/search?size=10');

export default fetchBorrowrResult;
