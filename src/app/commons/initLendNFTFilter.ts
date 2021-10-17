import {
  FetchParams,
  FilterOption,
  Option,
} from 'app/pages/LendNFTResultPage/slice/types';

const filterOption = {
  duration: {
    Weeks: true,
    Month: true,
  },
  nftType: {
    'Haft NFT': true,
    'Soft NFT': true,
  },
  loan: {
    USDT: false,
    DFY: false,
    BUSD: false,
    USDC: false,
    DAI: false,
  },
  name: '',
};

const initFilter = (param: FetchParams) => {
  const newFilter = {} as FilterOption;
  // handle loan
  if (!param.loanSymbol) {
    newFilter.loan = filterOption.loan;
  } else {
    const newLoan = {} as Option;
    param.loanSymbol.split(',').forEach(item => {
      newLoan[item] = true;
    });
    newFilter.loan = newLoan;
  }
  //handle nft
  if (!param.nftType) {
    newFilter.nftType = filterOption.nftType;
  } else {
    const newNftType = {} as Option;
    param.nftType.split(',').forEach((item: string) => {
      newNftType[item === '0' ? 'Haft NFT' : 'Soft NFT'] = true;
    });
    newFilter.nftType = newNftType;
  }
  // handle duration
  if (!param.durationType) {
    newFilter.duration = filterOption.duration;
  } else {
    const newDuration = {} as Option;
    newDuration[param.durationType === 0 ? 'Weeks' : 'Month'] = true;
    newFilter.duration = newDuration;
  }
  //handle name
  if (param.name) {
    newFilter.name = param.name;
  } else {
    newFilter.name = '';
  }
  return newFilter;
};

export default initFilter;
