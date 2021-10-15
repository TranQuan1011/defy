import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import {
  StarTypo,
  GreenTypo,
  CardLabel,
  CardInfo,
} from 'app/components/CardTypos';
import cardmedia from 'app/assets/image/CardMedia.png';
import { ButtonColor } from '../../Button';
import { BlueState, OrangeState, RedState } from './style';
export default function LendCard(props) {
  return (
    <Card sx={root}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <CardMedia component="img" sx={cardMedia} src={cardmedia} />
        </Grid>
        <Grid item xs={12} md={5}>
          <CardContent sx={info}>
            <Typography component="h3" sx={h3}>
              {props.shopname}
            </Typography>
            <StarTypo>1000</StarTypo>
            <List sx={list}>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Available:</CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>RandomText</CardInfo>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Limit:</CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>RandomText</CardInfo>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Duration:</CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>6 - 12 months</CardInfo>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>LVT:</CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>up to 80%</CardInfo>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={4} sx={lastGrid}>
          <CardLabel>Interest rate</CardLabel>
          <GreenTypo sx={currency}>15% APR</GreenTypo>
          <CardLabel>Collateral accepted</CardLabel>
          <CardInfo>BTC, EHB, BNB {'&'} +8 more</CardInfo>
          {props.state === 0 && <BlueState>Auto</BlueState>}
          {props.state === 1 && <OrangeState>Semi - Auto</OrangeState>}
          {props.state === 2 && <RedState>Negotiation</RedState>}
          <ButtonColor sx={button}>View detail</ButtonColor>
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
  marginBottom: '20px',
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

const redState = {};
