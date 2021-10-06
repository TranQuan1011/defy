import React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';
import { Theme } from '@mui/material';
import { SxProps, styled } from '@mui/system';

import ResponsiveImg from 'app/components/ResponsiveImg';

export default function AuthPage() {
  return (
    <Box component="main" padding="20px 16px">
      <StyledContainer>
        <Typography component="h1" sx={h1} gutterBottom>
          Exclusive on <DefySpan>DeFi For You.</DefySpan>
        </Typography>
        <Typography component="h2" variant="subtitle1" sx={h2}>
          Register new DeFi For You account from{' '}
          <DefySpan>01/08/2021 </DefySpan>
          to <DefySpan>31/12/2021</DefySpan> to have 100% chance of receiving
          DFY tokens
        </Typography>
        <Grid container rowSpacing={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Tabs
              value={0}
              textColor="secondary"
              indicatorColor="secondary"
              sx={tabs}
            >
              <StyledTab label="Sign up" />
              <StyledTab label="Log in" />
            </Tabs>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <ResponsiveImg
              src="https://techcrunch.com/wp-content/uploads/2020/03/DarkMode_iPhone.jpg"
              alt="computer"
            />
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
}

const DefySpan = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 600,
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  lineHeight: '37px',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    maxWidth: '90%',
  },
}));

const h1: SxProps<Theme> = {
  fontWeight: 'bold',
  fontSize: '36px',
  lineHeight: '44px',
};

const h2: SxProps<Theme> = {
  fontWeight: theme => theme.typography.fontWeightMedium,
  lineHeight: '17px',
  marginBottom: '32px',
};

const tabs: SxProps<Theme> = {
  '& .MuiTabs-flexContainer': {
    columnGap: '3.2rem',
  },
};
