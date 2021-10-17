import React from 'react';
import Box from '@mui/system/Box';
import { styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouteMatch, useLocation } from 'react-router-dom';
import history from 'app/history';

import Cryps from './Cryps';
import NFT from './NFT';

export default function Borrow() {
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get('tab');
  const { path } = useRouteMatch();

  const handleTabChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    history.push(`${path}?tab=${value}`);
  };

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
        value={tab || '1'}
        textColor="secondary"
        onChange={handleTabChange}
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
        <StyledTab label="Cryptocurrency" value={'1'} />
        <StyledTab label="NFT" value={'2'} />
      </Tabs>
      {tab === '2' ? <NFT /> : <Cryps />}
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
