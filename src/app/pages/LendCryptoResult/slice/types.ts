export interface LendCryptoPageState {
  isFilterbarOpen: boolean;
  filterOption: FilterOption;
  list: List;
}

export interface List {
  content: Item[];
  _first: boolean;
  _last: boolean;
  total_pages: number;
  total_elements: number;
  page: number;
}

export interface Option {
  [key: string]: boolean;
}

export interface FilterOption {
  collateral: Option;
  loan: Option;
  duration: Option;
}

export interface Item {
  id: number;
  walletAddress: string;
  reputation: number;
  completedContracts: number;
  collateralSymbol: string;
  collateralAmount: number;
  loanSymbol: string;
  durationType: number;
  durationQty: number;
}

export interface FetchParams {
  page?: number;
  size?: number;
  collateralSymbols?: string;
  loanSymbols?: string;
  durationTypes?: number;
}
