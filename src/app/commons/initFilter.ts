import { FetchParams } from 'app/pages/LendCryptoResult/slice/types';
import { FilterOption, Option } from 'app/pages/LendCryptoResult/slice/types';

const filterOption = {
  collateral: {
    XRP: true,
    ETH: true,
    LTC: true,
    BTC: true,
    DFY: true,
    BNB: true,
    DOT: true,
    ADA: true,
    WBNB: true,
  },
  loan: {
    USDT: true,
    DFY: true,
    BUSD: true,
    USDC: true,
    DAI: true,
  },
  duration: {
    Weeks: true,
    Month: true,
  },
};

const initFilter = (param: FetchParams) => {
  const newFilter = {} as FilterOption;
  // handle collateral
  if (!param.collateralSymbols) {
    newFilter.collateral = filterOption.collateral;
  } else {
    const newCollateral = {} as Option;
    param.collateralSymbols.split(',').forEach(item => {
      newCollateral[item] = true;
    });
    newFilter.collateral = newCollateral;
  }
  // handle loan
  if (!param.loanSymbols) {
    newFilter.loan = filterOption.loan;
  } else {
    const newLoan = {} as Option;
    param.loanSymbols.split(',').forEach(item => {
      newLoan[item] = true;
    });
    newFilter.loan = newLoan;
  }
  // handle duration
  if (!param.durationTypes) {
    newFilter.duration = filterOption.duration;
  } else {
    const newDuration = {} as Option;
    newDuration[param.durationTypes === 0 ? 'Weeks' : 'Month'] = true;
    newFilter.duration = newDuration;
  }
  return newFilter;
};

export default initFilter;
