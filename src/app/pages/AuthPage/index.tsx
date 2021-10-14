import React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';
import { Theme } from '@mui/material';
import { SxProps, styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { useRouteMatch, useLocation } from 'react-router-dom';
import history from 'app/history';

import ResponsiveImg from 'app/components/ResponsiveImg';
import LogIn from 'app/components/LogIn';
import heroImg from 'app/assets/image/Frame.png';
import SignUp from 'app/components/SignUp';
import authPageSelector from './slice/selector';
import { useAuthPageSlice } from './slice';

export default function AuthPage() {
  const { actions, sagaActions } = useAuthPageSlice();
  const authPageState = useSelector(authPageSelector);
  const { path } = useRouteMatch();
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get('tab');

  const handleTabChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    history.push(`${path}?tab=${value}`);
  };

  return (
    <Box component="main" padding="20px 16px">
      <StyledContainer>
        <Box
          component="section"
          sx={{
            maxWidth: 'lg',
            width: {
              xs: '100%',
              md: '70%',
            },
          }}
        >
          <Typography component="h1" sx={h1}>
            Exclusive on <DefySpan>DeFi For You.</DefySpan>
          </Typography>
          <Typography component="h2" variant="subtitle1" sx={h2}>
            Register new DeFi For You account from{' '}
            <DefySpan>01/08/2021 </DefySpan>
            to <DefySpan>31/12/2021</DefySpan> to have 100% chance of receiving
            DFY tokens
          </Typography>
        </Box>

        <Grid container rowSpacing={3} columnSpacing={11}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Tabs
              value={tab || '2'}
              textColor="secondary"
              indicatorColor="secondary"
              sx={tabs}
              onChange={handleTabChange}
            >
              <StyledTab label="Sign up" value={'1'} />
              <StyledTab label="Log in" value={'2'} />
            </Tabs>
            {location.search === '?tab=1' ? (
              <SignUp
                captchaRes={authPageState?.signup.recaptcha_response}
                onCaptchaChange={actions.changeRecaptcha}
                showPassword={actions.signupShowPassword}
                showConfirmPassword={actions.signupShowConfirmPassword}
                isShowPassword={authPageState?.signup.showPassword}
                isShowConfirmPassword={
                  authPageState?.signup.showConfirmPassword
                }
                submitAction={sagaActions.signUpReq}
              />
            ) : (
              <LogIn
                showPassword={actions.loginShowPassword}
                isShowPassword={authPageState?.login.showPassword}
                submitAction={sagaActions.logInReq}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <ResponsiveImg src={heroImg} alt="computer" />
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
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
  lineHeight: '37px',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.breakpoints.values['xl'],
  [theme.breakpoints.up('lg')]: {
    width: '80%',
  },
}));

const h1: SxProps<Theme> = {
  fontWeight: 'bold',
  fontSize: {
    xs: '2.5rem',
    lg: '3.8rem',
  },
};

const h2: SxProps<Theme> = {
  fontWeight: theme => theme.typography.fontWeightMedium,
  fontSize: {
    lg: '1.4rem',
  },
  marginBottom: {
    xs: '2.3rem',
    lg: '3.5rem',
  },
};

const tabs: SxProps<Theme> = {
  '& .MuiTabs-flexContainer': {
    columnGap: '3.2rem',
    '& button': {
      textTransform: 'none',
    },
  },
};
