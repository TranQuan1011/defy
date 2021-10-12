import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function BorrowerADS() {
  return (
    <Card sx={root}>
      <Box sx={box}>
        <CardMedia
          component="img"
          src=" https://staging.app.defiforyou.uk/_nuxt/img/big-coin.119fc22.png"
          sx={cardMedia}
        />
      </Box>
      <CardContent>
        <Typography component="h4" sx={header} gutterBottom>
          Want an instant loan?
        </Typography>
        <Typography variant="subtitle2" sx={subHeader}>
          Submit your collateral and get a loan in seconds
        </Typography>
      </CardContent>
    </Card>
  );
}

const root = {
  borderRadius: '20px',
  border: ' 1px solid #45484F',
  background: 'transparent',
  display: 'flex',
  padding: '23px 26px',
  columnGap: { xs: 0, md: '30px' },
  position: 'relative',
} as const;

const box = {
  width: { xs: '70px', md: '120px' },
  display: 'flex',
  alignItems: 'center',
  '@media screen and (max-width: 600px)': {
    position: 'absolute',
    top: '40px',
  },
};

const cardMedia = {
  maxWidth: '100%',
  height: 'auto',
};

const header = {
  color: '#DBA83D',
  fontWeight: 600,
  fontSize: {
    xs: '18px',
    md: '24px',
  },
  '@media screen and (max-width: 600px)': {
    pl: 10,
  },
};

const subHeader = {
  fontSize: {
    xs: '14px',
    md: '16px',
  },
  lineHeight: '17px',
  ml: {
    xs: -2,
    sm: 0,
  },
  mt: {
    xs: 3,
  },
};
