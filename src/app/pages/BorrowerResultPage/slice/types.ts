export interface BorrowerResultState {
  isFilterbarOpen: boolean;
  filterOption: FilterOption;
  list: List;
  card: Card;
}

export interface Card {
  content: CardItem[];
  number: number;
  page: number;
  size: number;
  number_of_elements: number;
  is_first: boolean;
  is_last: boolean;
  has_next: boolean;
  has_previous: boolean;
  total_pages: number;
  total_elements: number;
}

export interface List {
  content: Item[];
  total_pages: number;
  total_elements: number;
  page: number;
  has_next: boolean;
  has_previous: boolean;
  is_first: boolean;
  is_last: boolean;
  number: number;
  number_of_elements: number;
  size: number;
}

export interface Option {
  [key: string]: boolean;
}

export interface FilterOption {
  collateral: Option;
  loan: Option;
  loanType: Option;
  duration: Option;
  name: string;
}

export interface Item {
  name: string;
  interest: number;
  interstMax: number;
  interestMin: number;
  durationtyMax: number;
  durationqtyMin: number;
  allowedloanMax: number;
  allowedloanMin: number;
  durationtyType: number;
  ltv: number;
  avatar: string;
  symbol: string;
  reputation: number;
  accept: [];
  state: number;
}
export interface CardItem {
  associatedAddress: string;
  minInterestRate: number;
  maxInterestRate: number;
  reputation: number;
  completedContracts: number;
  medals: [];
}
export interface FetchParams {
  page?: number;
  size?: number;
  collateralSymbols?: string;
  loanSymbols?: string;
  durationTypes?: number;
  interestRange?: number;
  ltv?: number;
  loanType?: string;
  name?: string;

}
