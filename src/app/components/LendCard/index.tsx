import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Chip } from '@mui/material';

import {
  StarTypo,
  BlueUnderline,
  GreenTypo,
  CardLabel,
  CardInfo,
} from 'app/components/CardTypos';
import cardmedia from 'app/assets/image/CardMedia.png';
import tag from 'app/assets/image/tag.png';
import { ButtonColor } from '../Button';
import {item} from 'app/pages/LendNFTResultPage/slice/types'
// interface item {
//   id: number;
//   nftId: number;
//   nftStatus: number;
//   nftType: number;
//   bcNftId: number;
//   bcCollateralId: number;
//   nftName: string;
//   borrowerWalletAddress: string;
//   reputation: number;
//   durationTime: number;
//   durationType: number;
//   nftAssetLocation: string;
//   nftEvaluatedPrice: number;
//   nftEvaluatedSymbol: string;
//   expectedLoanAmount: number;
//   expectedLoanSymbol: string;
//   nftAssetTypeId: number;
//   nftAvatarCid: string;
//   nftMediaCid: string;
// }
export default function LendCard(item) {
  return (
    <Card sx={root}>
      <CardMedia component="img" src={tag} sx={tagSx} />
      <Grid container>
        <Grid item xs={12} md={3}>
          <CardMedia component="img" sx={cardMedia} src={cardmedia} />
        </Grid>
        <Grid item xs={12} md={5}>
          <CardContent sx={info}>
            <Typography component="h3" sx={h3}>
              {item.nftName}
            </Typography>
            <StarTypo>1000</StarTypo>
            <List sx={list}>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Borrower:</CardLabel>
                </ListItemText>
                <ListItemText>
                  <BlueUnderline sx={{ fontSize: '14px' }}>
                    {item.borrowerWalletAddress}
                  </BlueUnderline>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Duration:</CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>
                    {item.durationTime}{' '}
                    {item.durationType === 0
                      ? item.durationTime > 1
                        ? 'weeks'
                        : 'week'
                      : item.durationTime > 1
                      ? 'months'
                      : 'month'}
                  </CardInfo>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Asset location:</CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>{item.nftAssetLocation}</CardInfo>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Evaluated price:</CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>
                    {/* {item.nftEvaluatedPrice.toLocaleString('en')}{' '}
                    {item.nftEvaluatedSymbol} */}
                  </CardInfo>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={4} sx={lastGrid}>
          <CardLabel>Expected loan</CardLabel>
          <GreenTypo sx={currency}>
            {item.nftEvaluatedPrice} {item.nftEvaluatedSymbol}
          </GreenTypo>
          <Chip
            variant="outlined"
            color="secondary"
            label={item.nftAssetTypeId === 1 ? 'Jewelry'
              : item.nftAssetTypeId === 2 ? 'Diamond'
              : item.nftAssetTypeId === 3 ? 'Gemstone'
              : item.nftAssetTypeId === 4 ? 'At Work'
              : 'House and land'}
            icon={<i className="far fa-gem"></i>}
          />
          <ButtonColor sx={button}>Send Offer</ButtonColor>
        </Grid>
      </Grid>
    </Card>
  );
}

const root = {
  pt: {
    xs: 1.5,
    md: 2.5,
  },
  pb: {
    xs: 2.5,
  },
  pl: {
    xs: 1.5,
    md: 2.5,
  },
  pr: {
    xs: 1.5,
    md: 2.5,
  },
  borderRadius: '20px',
  position: 'relative',
  overflow: 'visible',
} as const;

const tagSx = {
  position: 'absolute',
  top: '23px',
  left: '-8px',
  maxWidth: '100%',
  width: 'auto',
} as const;

const cardMedia = {
  borderRadius: '20px',
  width: '100%',
  margin: 'auto',
};

const h3 = {
  fontSize: { xs: '18px', md: '24px' },
  fontWeight: 600,
  lineHeight: '22px',
  mb: 1.25,
};

const info = {
  pt: {
    md: 0,
  },
  pl: {
    xs: 1,
  },
  pr: {
    xs: 1,
  },
  paddingBottom: '16px !important',
};

const list = {
  mt: 2.375,
  display: 'flex',
  flexDirection: 'column',
} as const;

const lastGrid = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  alignItems: { xs: 'start', md: 'end' },
  borderTop: { xs: '1px solid #45484F', md: 'none' },
  borderLeft: { xs: 'none', md: '1px solid #45484F' },
  pt: { xs: 1.5, md: 0 },
} as const;

const button = {
  display: 'flex',
  padding: '11px 22px',
  fontSize: '16px',
  fontWeight: 500,
  height: '44px',
  mt: {
    xs: 2,
    md: 'auto',
  },
};

const currency = {
  textAlign: {
    md: 'right',
  },
} as const;
