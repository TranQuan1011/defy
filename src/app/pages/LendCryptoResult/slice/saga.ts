import { takeLatest, call, all, put } from 'redux-saga/effects';
import { fetchListReq as fetchListAction } from './sagaActions';
import { fetchList } from 'app/apis/lendCrypResult';
import { FetchParams } from './types';
import { lendCryptoPageActions } from './index';

function* fetchListReq({ payload }: { type: string; payload: FetchParams }) {
  try {
    const params = {
      page: 0,
      size: 10,
      ...payload,
    };
    const res = yield call(fetchList, params);
    yield put(lendCryptoPageActions.setList(res.data.data));
  } catch (error: any) {
    console.log(error);
  }
}

function* watchFetchListReq() {
  const type = fetchListAction.toString();
  yield takeLatest(type, fetchListReq);
}

export default function* rootSaga() {
  yield all([watchFetchListReq()]);
}
