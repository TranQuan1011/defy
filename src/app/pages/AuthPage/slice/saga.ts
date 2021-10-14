import { takeLatest, call, all, put } from 'redux-saga/effects';

import {
  signUpReq as signUpAction,
  logInReq as logInAction,
} from './sagaActions';
import { signUp, logIn } from 'app/apis/auth';
import { SignUpAction, LogInAction } from './types';
import { fetchUserReq } from 'app/globalActions';

function* signUpReq({ payload }: SignUpAction) {
  try {
    const data = yield call(signUp, payload);

    if (
      window.confirm(
        'Please check your Email and confirm to active your account',
      )
    ) {
      const win = window.open('https://mail.google.com/', '_blank') as Window;
      win.focus();
    }
  } catch (error: any) {
    if (
      error.response.data.errorCodes[0] ===
      'user.register.email-already-existed'
    ) {
      alert('This email already registered');
    } else {
      alert(
        `Error ${error.response.status} : ${error.response.data.errorCodes[0]}`,
      );
    }
  }
}
function* logInReq({ payload }: LogInAction) {
  try {
    const data = yield call(logIn, payload);
    const token = data.data.access_token;
    localStorage.setItem('accessToken', token);
    yield put(fetchUserReq(token));
  } catch (error: any) {
    if (error.response.status === 401) {
      alert('Username or Password is incorrect');
    } else {
      alert(
        `Error ${error.response.status} : ${error.response.data.errorCodes[0]}`,
      );
    }
  }
}

function* watchSignUpReq() {
  const type = signUpAction.toString();
  yield takeLatest(type, signUpReq);
}
function* watchLogInReq() {
  const type = logInAction.toString();
  yield takeLatest(type, logInReq);
}

export default function* rootSaga() {
  yield all([watchSignUpReq(), watchLogInReq()]);
}
