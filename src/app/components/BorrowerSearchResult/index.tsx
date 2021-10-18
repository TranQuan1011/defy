import * as React from 'react';
import { Box } from '@mui/system';
import { Ads } from './components/ads';
import { Typography } from '@mui/material';
import { PersonalCard } from './components/PersonalCard';
import LendCard from './components/LendCard';
import { MenuFilter } from './components/MenuFilter';
import boostmoney from '../../assets/image/boostMoney.svg';
import money from '../../assets/image/moneyResult.svg';
interface data {
  data: any;
  card: any;
}

export const BorrowerSearchResult = (props: data) => {
  return (
    <Box>
      <Ads
        img={money}
        header="Become your onw bank"
        content="Sign up for pawnshop to get great benefits from"
        defi={true}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Typography variant="h6">Personal Lending</Typography>
        <Box>View detail</Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {props.card &&
          props.card
            .slice(0, 2)
            .map((item, index) => (
              <PersonalCard
                key={index}
                address={item.associatedAddress}
                minInterest={item.minInterestRate}
                maxInterest={item.maxInterestRate}
                reputation={item.reputation}
                completedContracts={item.completedContracts}
              />
            ))}
      </Box>
      <Ads
        img={boostmoney}
        header="Want an instant loan?"
        content="Submit your collateral to get a loan in seconds"
        defi={false}
      />
      <MenuFilter />
      <Box>
        {props.data &&
          props.data.map((item, index) => (
            <LendCard
              key={index}
              state={item.type}
              shopname={item.pawnShop.name}
              interest={item.interest}
              interestMax={item.interestMax}
              interestMin={item.interestMin}
              durationqtyMax={item.durationQtyMax}
              durationqtyMin={item.durationQtyMin}
              allowedloanMax={item.allowedLoanMax}
              allowedloanMin={item.allowedLoanMin}
              durationqtyType={item.durationQtyType}
              ltv={item.loanToValue}
              avatar={item.pawnShop.avatar}
              symbol={item.acceptableAssetsAsLoan}
              reputation={item.pawnShop.reputation}
              accept={item.acceptableAssetsAsCollateral}
            />
          ))}
      </Box>
    </Box>
  );
};
