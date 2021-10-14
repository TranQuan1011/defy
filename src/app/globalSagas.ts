import { takeLatest, call, all, put } from 'redux-saga/effects';
import { fetchUserReq, fetchUserSuccess } from './globalActions';
import { confirmToken } from 'app/apis/auth';

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

function* watchUserReq() {
  const type = fetchUserReq.toString();
  yield takeLatest(type, userReq);
}

export default function* rootSaga() {
  yield all([watchUserReq()]);
}
