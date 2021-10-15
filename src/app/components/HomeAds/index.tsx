import homeAds from 'app/assets/image/homeAds.png';
import homeAdsmobile from 'app/assets/image/homeAdsmobile.png';
import { ButtonColor } from 'app/components/Button/index';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export default function HomeAds() {
  return (
    <Box sx={box}>
      <Backgroud>
        <Typography sx={text}>Become a Pawnshop</Typography>
        <Typography sx={content}>
          Open your own pawn shop and discover a new business opportunity with
          an unmatched ROI. Be a part of the world's financial revolution.
        </Typography>
        <Typography sx={contentMobile}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
        </Typography>
        <ButtonColor sx={button}>Learn more </ButtonColor>
      </Backgroud>
    </Box>
  );
}

const Backgroud = styled.div`
  background-image: url(${homeAds});
  background-size: cover;
  background-position: right;
  max-width: 1200px;
  border-radius: 20px;
  padding: 48px 0px 56px 98px;
  @media only screen and (min-width: 320px) and (max-width: 410px) {
    background-image: url(${homeAdsmobile});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    padding: 12px 12px 10px 12px;
    width: 95%;
  }
  @media only screen and (min-width: 410px) and (max-width: 600px) {
    background-image: url(${homeAdsmobile});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    padding: 30px 0px 30px 32px;
    width: 95%;
  }
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    padding: 48px 0px 56px 68px;
  }
  @media (max-width: 1200px) {
    width: 95%;
  }
`;
const box: SxProps<Theme> = {
  justifyContent: 'center',
  margin: '60px 0px 80px 0px',
  padding: '0px',
  display: 'flex',
  '@media (max-width: 600px)': {
    margin: '30px 0px 40px 0px',
  },
};
const text: SxProps<Theme> = {
  fontSize: '36px',
  lineHeight: '44px',
  fontWeight: '600',
  color: '#ffffff',
  paddingBottom: '16px',
  width: '70%',
  '@media only screen and (min-width: 410px) and (max-width: 600px)': {
    paddingBottom: '14px',
  },
  '@media (max-width: 410px)': {
    paddingBottom: '7px',
  },
  '@media (max-width: 600px)': {
    fontSize: '16px',
    lineHeight: '20px',
  },
  '@media only screen and (min-width: 600px) and (max-width: 850px)': {
    paddingBottom: '16px',
    fontSize: '28px',
    lineHeight: '34px',
  },
};
const content: SxProps<Theme> = {
  fontSize: '20px',
  lineHeight: '24px',
  fontWeight: '500',
  paddingBottom: '30px',
  width: '70%',
  '@media (max-width: 600px)': {
    display: 'none',
  },
  '@media only screen and (min-width: 600px) and (max-width: 750px)': {
    fontSize: '16px',
    lineHeight: '20px',
    width: '60%',
  },
  '@media (min-width: 750px)': {
    width: '50%',
  },
};
const button: SxProps<Theme> = {
  width: '142px',
  height: '48px',
  fontSize: '16px',
  lineHeight: '20px',
  '@media (max-width: 600px)': {
    width: '123px',
    height: '36px',
    fontSize: '14px',
    lineHeight: '17px',
  },
};
const contentMobile: SxProps<Theme> = {
  display: 'none',
  fontSize: '12px',
  lineHeight: '15px',
  fontWeight: '500',
  paddingBottom: '12px',
  width: '45%',
  '@media (max-width: 410px)': {
    display: 'block',
    paddingBottom: '14px',
  },
  '@media only screen and (min-width: 410px) and (max-width: 600px)': {
    paddingBottom: '25px',
    display: 'block',
  },
};
