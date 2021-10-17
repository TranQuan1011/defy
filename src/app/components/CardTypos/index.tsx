import React from 'react';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';

const StarTypo = props => {
  return (
    <Typography
      component="p"
      sx={{
        fontWeight: 500,
        fontSize: { xs: '14px', md: '16px' },
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        columnGap: '6px',
      }}
    >
      <StarIcon
        sx={{
          color: '#F8B017',
        }}
      />
      {props.children}
    </Typography>
  );
};

const GreenTypo = styled(Typography)(({ theme }) => ({
  color: '#3FD762',
  fontSize: '24px',
  lineHeight: '37px',
  fontWeight: 600,
  [theme.breakpoints.up('md')]: {
    fontSize: '30px',
  },
}));

const BlueUnderline = styled(Typography)({
  textDecoration: 'underline',
  color: '#2596FF',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const CardLabel = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  color: '#A2A3A7',
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

const CardInfo = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

export { StarTypo, BlueUnderline, GreenTypo, CardLabel, CardInfo };
