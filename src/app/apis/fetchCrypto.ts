import { base } from './base';

const fetchCrypto = () => base.get('/crypto-asset');

export default fetchCrypto;
