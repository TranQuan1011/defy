export interface LendNFTPageState {
  list: List;
}

export interface List {
  content: item[];
  _first: boolean;
  _last: boolean;
  total_pages: number;
  total_elements: number;
  page: number;
}

export interface item {
  id: number;
  nftId: number;
  nftStatus: number;
  nftType: number;
  bcNftId: number;
  bcCollateralId: number;
  nftName: string;
  borrowerWalletAddress: string;
  reputation: number;
  durationTime: number;
  durationType: number;
  nftAssetLocation: string;
  nftEvaluatedPrice: number;
  nftEvaluatedSymbol: string;
  expectedLoanAmount: number;
  expectedLoanSymbol: string;
  nftAssetTypeId: number;
  nftAvatarCid: string;
  nftMediaCid: string;
}

export interface FetchParams {
  page?: number;
  size?: number;
  collateralSymbols?: string;
  loanSymbols?: string;
  durationTypes?: number;
}