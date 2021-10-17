import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Typography, Box, Chip, Avatar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import getIconUrl from 'app/commons/getIconUrl';
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
import { Item } from 'app/pages/LendNFTResultPage/slice/types';

interface Props {
  data: Item;
}

export default function LendCard({ data }: Props) {
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
              {data.nftName}
            </Typography>
            <StarTypo>{data.reputation || 0}</StarTypo>
            <List sx={list}>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Borrower: </CardLabel>
                </ListItemText>
                <ListItemText>
                  <BlueUnderline
                    sx={{
                      fontSize: '14px',
                    }}
                  >
                    {data.borrowerWalletAddress}
                  </BlueUnderline>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Duration: </CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>
                    {data.durationTime}{' '}
                    {data.durationType === 0 ? 'Weeks' : 'Months'}
                  </CardInfo>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Asset location: </CardLabel>
                </ListItemText>
                <ListItemText>
                  <CardInfo>{data.nftAssetLocation}</CardInfo>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText sx={{ flexBasis: '40%', flexGrow: 0 }}>
                  <CardLabel>Evaluated price: </CardLabel>
                </ListItemText>
                <ListItemText>
                  <Box
                    sx={{
                      ml: {
                        xs: 0,
                        md: 1,
                      },
                      display: 'flex',
                      alignItems: 'center',
                      columnGap: '10px',
                    }}
                  >
                    <Avatar
                      sx={{ height: '24px', width: '24px' }}
                      src={getIconUrl(data.nftEvaluatedSymbol)}
                    />
                    {data.nftEvaluatedPrice} {data.nftEvaluatedSymbol}
                  </Box>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={4} sx={lastGrid}>
          <CardLabel>Expected loan</CardLabel>
          <GreenTypo sx={currency}>
            {data.expectedLoanAmount} {data.expectedLoanSymbol}
          </GreenTypo>
          <Chip
            variant="outlined"
            color="secondary"
            label="Diamond"
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
  margin: 'auto',
  maxWidth: '100%',
  height: 'auto',
  width: 'auto',
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
