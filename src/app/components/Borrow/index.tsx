import React from 'react';
import Box from '@mui/system/Box';
import { Theme } from '@mui/material';
import { SxProps, styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Cryps from './Cryps';
import NFT from './NFT';

export default function Borrow() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme => theme.palette.background.default,
        borderRadius: ' 20px',
        padding: { xs: '16px 12px', sm: '24px 30px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {' '}
      <Tabs
        value={0}
        textColor="secondary"
        sx={{
          mb: 4,
          '& .MuiTabs-flexContainer': {
            backgroundColor: '#282C37',
            display: 'inline-flex',
            borderRadius: '172px',
            padding: '4px',
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        <StyledTab label="Cryptocurrency" />
        <StyledTab label="NFT" />
      </Tabs>
      {/* <Cryps /> */}
      <NFT />
    </Box>
  );
}

const StyledTab = styled(Tab)({
  height: '45px',
  fontWeight: 500,
  borderRadius: '172px',
  padding: '8px 12px',
  textTransform: 'none',
  '&.Mui-selected': {
    color: '#282C37',
    background:
      'linear-gradient(221.15deg, #BD8727 0%, #FFD574 49.02%, #FECA50 62.02%, #BD8727 101.47%)',
  },
});
