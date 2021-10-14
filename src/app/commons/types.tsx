export interface ChildrenProp {
  children?: JSX.Element;
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
  recaptcha_response: string;
}

export interface LogIn {
  username: string;
  password: string;
}
