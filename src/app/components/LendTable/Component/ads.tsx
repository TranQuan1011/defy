import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import GroupUpArrow from '../../../assets/image/GroupUpArrow.png';
import UpArrow from '../../../assets/image/uparrow.svg';
import money from '../../../assets/image/money.svg';

export const AdsRow: React.FC = () => {
  return (
    <Card sx={{ backgroundColor: '#627eea' }}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="600" color="#ffca2a">
            Become your onw bank
          </Typography>
          <Box>
            <Typography fontWeight="600">
              Sign up for pawnshop to get great benefits from{' '}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <img
            style={{ position: 'absolute', right: '44px' }}
            src={GroupUpArrow}
            alt="group arrow"
          />
          <img style={{ position: 'relative' }} src={money} alt="money" />
          <img src={UpArrow} alt="up arrow" />
        </Box>
      </CardContent>
    </Card>
  );
};
