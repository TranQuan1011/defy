import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

import ResponsiveImg from 'app/components/ResponsiveImg';
import heroNFT from 'app/assets/image/HeroNFT.png';
import { ButtonColor } from 'app/components/Button';
import { Typography } from '@mui/material';

export default function NFT() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ResponsiveImg src={heroNFT} alt=" Hero NFT" />
      <ButtonColor sx={{ mt: 5, mb: 3, padding: '14px 24px' }}>
        Find NFT lenders
      </ButtonColor>
      <Typography variant="subtitle1" align="center">
        Don’t have hard NFT? <StyledLink>Create new</StyledLink>
      </Typography>
    </Box>
  );
}

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'underline',
}));
