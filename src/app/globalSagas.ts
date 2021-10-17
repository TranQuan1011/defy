import { takeLatest, call, all, put } from 'redux-saga/effects';
import {
  fetchUserReq,
  fetchUserSuccess,
  setCollateral,
  setLoan,
  fetchCrypto,
} from './globalActions';
import { confirmToken } from 'app/apis/auth';
import fetchCryptoApi from './apis/fetchCrypto';
import { Crypto } from 'app/commons/types';

// workers
function* userReq({ payload }: { type: string; payload: string }) {
  try {
    const res = yield call(confirmToken, payload);
    yield put(fetchUserSuccess(res.data.data));
  } catch (error: any) {
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken');
    } else {
      console.log(error.response.data.errorCodes[0]);
    }
  }
}

function* cryptopReq() {
  try {
    const res = yield call(fetchCryptoApi);
    const cryptos = res.data.data as Crypto[];
    const col = cryptos.filter(item => item.isWhitelistCollateral);
    const loans = cryptos.filter(item => item.isWhitelistSupply);
    yield put(setLoan(loans));
    yield put(setCollateral(col));
  } catch (error: any) {
    console.log(error.response.data.errorCodes[0]);
  }
}

// watchers
function* watchUserReq() {
  const type = fetchUserReq.toString();
  yield takeLatest(type, userReq);
}

function* watchCryptoReq() {
  const type = fetchCrypto.toString();
  yield takeLatest(type, cryptopReq);
}

export default function* rootSaga() {
  yield all([watchUserReq(), watchCryptoReq()]);
}
