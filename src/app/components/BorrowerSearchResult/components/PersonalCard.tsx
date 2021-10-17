import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import { TypoBlue, TypoGreen } from './style';
import info from '../../../assets/icon/information.png';
import tick from '../../../assets/icon/tick.png';
import star from '../../../assets/image/Star 1.png';
import tag from '../../../assets/icon/tag.svg';
import laban from '../../../assets/icon/laban.png';
import bitcoin from '../../../assets/icon/bitcoin.png';
import defi from '../../../assets/icon/defi.png';
import defi2 from '../../../assets/icon/defi2.png';

import { ButtonNoColor, ButtonColor } from '../../Button/index';
export const PersonalCard = props => {
  const shortText = text => {
    if (text.length > 10) {
      return text.substring(0, 10) + '...' + text.slice(text.length - 5);
    }
  };
  return (
    <Card sx={{ borderRadius: '20px', marginBottom: '20px' }}>
      <CardContent
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '494px',
        }}
      >
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <TypoBlue variant="h6" sx={{ marginRight: '12px' }}>
            {props.address ? shortText(props.address) : 'undefined'}
          </TypoBlue>
          <img width="20px" height="20px" src={tick} alt="tick" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
          <img src={star} alt="star" height="18px" width="18px" />
          <Box sx={{ marginTop: '3px', display: 'flex' }}>
            <Typography margin="0 1.5rem 0 5px">{props.reputation}</Typography>
            <Typography>|</Typography>
            <Typography marginLeft="1.5rem">
              {props.completedContracts} signed contracts
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <TypoGreen variant="h6" sx={{ marginRight: '7.5px' }}>
            {props.minInterest} - {props.maxInterest}% interest rate
          </TypoGreen>
          <img width="15px" height="15px" src={info} alt="information" />
        </Box>
        <Box sx={{ display: 'flex', margin: '10px 0' }}>
          <ButtonNoColor sx={{ width: '94px', height: '23px' }}>
            Good LTV
          </ButtonNoColor>
          <ButtonNoColor
            sx={{ width: '146px', height: '23px', margin: '0 1rem' }}
          >
            Fast Disburement
          </ButtonNoColor>
          <ButtonNoColor sx={{ width: '94px', height: '23px' }}>
            Trusted
          </ButtonNoColor>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography>Collateral accepted:</Typography>
          <Box
            sx={{
              display: 'flex',
              width: '120px',
              margin: '0 1rem',
              justifyContent: 'space-between',
            }}
          >
            <img src={bitcoin} alt="bitcoin icon" />
            <img src={laban} alt="laban" />
            <img src={defi} alt="defi" />
            <img src={defi2} alt="defi2" />
            <img src={bitcoin} alt="bitcoin icon" />
          </Box>
          <Typography>{'& '}20 more </Typography>
        </Box>
        <ButtonColor
          sx={{
            margin: '0 auto',
            marginTop: '25px',
            fontWeight: '600',
            height: '48px',
            width: '155px',
          }}
        >
          Request Loan
        </ButtonColor>
      </CardContent>
    </Card>
  );
};
