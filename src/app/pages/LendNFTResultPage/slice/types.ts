export interface LendNFTPageState {
  isFilterbarOpen: boolean;
  filterOption: FilterOption;
  list: List;
}

export interface List {
  content: Item[];
  total_pages: number;
  total_elements: number;
}

export interface Option {
  [key: string]: boolean;
}

export interface FilterOption {
  duration: Option;
  nftType: Option;
  loan: Option;
  name: string;
}

export interface Item {
  id: number;
  nftName: string;
  reputation: number | null;
  borrowerWalletAddress: string;
  durationTime: number;
  durationType: number;
  nftAssetLocation: string;
  nftEvaluatedPrice: number;
  nftEvaluatedSymbol: string;
  expectedLoanAmount: number;
  expectedLoanSymbol: string;
  nftAvatarCid: string;
}

export interface FetchParams {
  loanSymbol?: string;
  durationType?: number;
  nftType?: string;
  page?: number;
  size?: number;
  name?: string;
}
