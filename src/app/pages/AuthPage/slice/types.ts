import { SignUp, LogIn } from 'app/commons/types';

export interface AuthState {
  login: {
    showPassword: boolean;
  };
  signup: {
    showPassword: boolean;
    showConfirmPassword: boolean;
    recaptcha_response: string | null;
  };
}

export interface SignUpAction {
  type: string;
  payload: SignUp;
}
export interface LogInAction {
  type: string;
  payload: LogIn;
}
