import { takeLatest, call, all, put } from 'redux-saga/effects';
import { fetchListReq as fetchListAction } from './sagaAction';
import { fetchList } from 'app/apis/lendNft';
import { FetchParams } from './types';
import { lendNFTPageActions } from './index';

function* fetchListReq({ payload }: { type: string; payload: FetchParams }) {
  try {
    const params = {
      ...payload,
    };
    const res = yield call(fetchList, params);
    yield put(lendNFTPageActions.setList(res.data.data));
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