import { takeLatest, call, all, put } from 'redux-saga/effects';
import {
  fetchListReq as fetchListAction,
  fetchCardReq as fetchCardAction,
} from './sagaActions';
import { fetchBorrowrResult } from 'app/apis/pawnshopSearch';
import { fetchBorrowerCard } from 'app/apis/borrowerCard';
import { FetchParams } from './types';
import { borrowerResultPageActions } from './index';

function* fetchListReq({ payload }: { type: string; payload: FetchParams }) {
  try {
    const params = {
      page: 0,
      size: 10,
      ...payload,
    };
    const res = yield call(fetchBorrowrResult, params);
    yield put(borrowerResultPageActions.setList(res.data.data));
  } catch (error: any) {
    console.log(error);
  }
}

function* fetchCardReq() {
  try {
    const res = yield call(fetchBorrowerCard);
    console.log(res);
    yield put(borrowerResultPageActions.setCard(res.data.data));
  } catch (error: any) {
    console.log(error);
  }
}

function* watchFetchListReq() {
  const type = fetchListAction.toString();
  yield takeLatest(type, fetchListReq);
}
function* watchFetchCardReq() {
  const type = fetchCardAction.toString();
  yield takeLatest(type, fetchCardReq);
}

export default function* rootSaga() {
  yield all([watchFetchListReq(), watchFetchCardReq()]);
}
