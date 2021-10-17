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

export interface User {
  email: string;
  birthday: any;
  phoneNumber: any;
  address: any;
  isActive: boolean;
  createdAt: number;
  activatedAt: number;
  links: any;
  pawnShop: any;
  kyc: any;
  id: number;
  name: string;
}

export interface Crypto {
  id: number;
  usdExchange: number;
  symbol: string;
  address: string;
  isWhitelistCollateral: boolean;
  isWhitelistSupply: boolean;
  url?: string;
}

export interface GlobalReducer {
  user: User | null;
  collateral: Crypto[];
  loan: Crypto[];
}
