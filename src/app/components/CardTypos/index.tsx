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
        fontSize: '16px',
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

const GreenTypo = styled(Typography)({
  textAlign: 'right',
  color: '#3FD762',
  fontSize: '30px',
  lineHeight: '37px',
  fontWeight: 600,
});

const BlueUnderline = styled(Typography)({
  textDecoration: 'underline',
  color: '#2596FF',
});

const CardLabel = styled(Typography)({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '20px',
  color: '#A2A3A7',
});

const CardInfo = styled(Typography)({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '20px',
});

export { StarTypo, BlueUnderline, GreenTypo, CardLabel, CardInfo };
