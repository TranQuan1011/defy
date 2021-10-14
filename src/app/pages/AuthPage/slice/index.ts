import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import authPageSaga from './saga';
import * as sagaActions from './sagaActions';

export const initialState: AuthState = {
  login: {
    showPassword: false,
  },
  signup: {
    showPassword: false,
    showConfirmPassword: false,
    recaptcha_response: null,
  },
};

const slice = createSlice({
  name: 'authPage',
  initialState,
  reducers: {
    // login
    loginShowPassword(state) {
      state.login.showPassword = !state.login.showPassword;
    },

    // signup
    signupShowPassword(state) {
      state.signup.showPassword = !state.signup.showPassword;
    },
    signupShowConfirmPassword(state) {
      state.signup.showConfirmPassword = !state.signup.showConfirmPassword;
    },
    changeRecaptcha(state, action: PayloadAction<string | null>) {
      state.signup.recaptcha_response = action.payload;
    },
  },
});

export const useAuthPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'authPageSaga', saga: authPageSaga });
  return { actions: slice.actions, sagaActions };
};
