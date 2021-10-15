import * as React from 'react';
import { Box } from '@mui/system';
import { Ads } from './components/ads';
import { Typography } from '@mui/material';
import { PersonalCard } from './components/PersonalCard';
import LendCard from './components/LendCard';
import { MenuFilter } from './components/MenuFilter';
import boostmoney from '../../assets/image/boostMoney.svg';
import money from '../../assets/image/moneyResult.svg';

export const BorrowerSearchResult = () => {
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
          alignItems: 'flex-end',
        }}
      >
        <Typography variant="h6">Personal Lending</Typography>
        <Box>View detail</Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <PersonalCard />
        <PersonalCard />
      </Box>
      <Ads
        img={boostmoney}
        header="Want an instant loan?"
        content="Submit your collateral to get a loan in seconds"
        defi={false}
      />
      <MenuFilter />
      <Box>
        {[0, 1, 2, 3].map(item => (
          <LendCard key={item} state={item} />
        ))}
      </Box>
    </Box>
  );
};
