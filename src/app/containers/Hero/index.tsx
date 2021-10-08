import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Typed from 'react-typed';
import { Theme } from '@mui/material';
import { SxProps, styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/system/Box';

import ResponsiveImg from 'app/components/ResponsiveImg';
import heroImg from 'app/assets/image/Hero.png';
import Borrow from 'app/components/Borrow';

export default function Hero() {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: theme => theme.palette.background.paper,
      }}
      pt={3}
      pb={3}
    >
      <Container maxWidth="lg">
        <Grid container rowSpacing={3} columnSpacing={12}>
          <Grid item xs={12} md={6}>
            <Typography component="h1" sx={h1}>
              <Box
                sx={{
                  display: 'block',
                  '@media screen and (min-width: 500px)': {
                    display: 'inline',
                  },
                }}
              >
                <Typed
                  showCursor={false}
                  strings={['Lend', 'Borrow']}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                />{' '}
                with
              </Box>
              <DefySpan> DeFi For You </DefySpan>
            </Typography>
            <Typography component="p" sx={p}>
              Get Crypto Loans Instantly, Regardless of Your Credit Rating
            </Typography>
            <ResponsiveImg src={heroImg} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tabs value={0} textColor="secondary" sx={tabs}>
              <StyledTab label="Borrow" />
              <StyledTab label="Lend" />
            </Tabs>
            <Borrow />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const DefySpan = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 600,
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px',
  },
  lineHeight: '24px',
  '&.Mui-selected': {
    fontSize: '20px',
  },
}));

const h1: SxProps<Theme> = {
  fontSize: {
    xs: '36px',
    md: '60px',
  },
  textTransform: 'capitalize',
  fontWeight: 'bold',
  mb: 1,
};

const p: SxProps<Theme> = {
  fontSize: {
    xs: '16px',
    md: '20px',
  },
  fontWeight: 500,
  mb: 2,
};

const tabs: SxProps<Theme> = {
  '& .MuiTabs-flexContainer': {
    '& button': {
      textTransform: 'none',
    },
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
};
