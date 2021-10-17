import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IProps {
  image?: string;
  description?: string;
  content?: string;
}

export default function PawnshopCard(props: IProps) {
  const { t } = useTranslation();
  const { image, description, content } = props;
  return (
    <Box sx={box}>
      <Grid sx={grid}>
        <img alt="img" src={image} className="img" />
        <Typography sx={superShop}>{t('home.sliders.SuperShop')}</Typography>
        <Typography sx={rate}>
          <StarIcon sx={star} />
          1000
        </Typography>
      </Grid>
      <Grid>
        <Typography sx={des}>{description}</Typography>
        <Typography sx={cont}>{content}</Typography>
      </Grid>
    </Box>
  );
}

const box: SxProps<Theme> = {
  padding: '0 10px',
  '@media (max-width: 750px)': {
    maxWidth: '300px !important',
    margin: '0 auto',
    '& .img': {
      maxWidth: '283px',
    },
  },
  '@media (min-width: 1028px) and (max-width: 1080px)': {
    maxWidth: '428px',
    margin: ' 0 auto',
  },
  '@media (min-width: 1200px) and (max-width: 1600px)': {
    maxWidth: '300px !important',
    margin: '0 auto',
    '& .img': {
      maxWidth: '283px',
    },
  },
};
const grid: SxProps<Theme> = {
  position: 'relative',
  marginBottom: '12px',
};
const superShop: SxProps<Theme> = {
  padding: '5px 12px',
  background: '#ff4848',
  borderRadius: '15.5px',
  color: '#ffffff',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '17px',
  position: 'absolute',
  top: '12px',
  left: '12px',
  '@media (max-width: 750px)': {
    fontSize: '12px',
    lineHeight: '15px',
  },
};
const rate: SxProps<Theme> = {
  position: 'absolute',
  fontSize: '14px',
  borderRadius: '16px',
  background: '#f8b017',
  color: '#ffffff',
  textAlign: 'center',
  fontWeight: '500',
  lineHeight: '17px',
  top: '12px',
  right: '12px',
  padding: '5px 10px 3px 5px',
  '@media (max-width: 750px)': {
    fontSize: '12px',
    lineHeight: '15px',
    padding: '5px 8px 3px 5px',
  },
};
const star: SxProps<Theme> = {
  marginBottom: '3px',
  height: '15.5px',
  color: '#ffffff',
};
const des: SxProps<Theme> = {
  fontSize: '20px',
  lineHeight: '24px',
  marginBottom: '8px',
  '@media (max-width: 750px)': {
    fontSize: '18px',
    lineHeight: '22px',
    marginBottom: '4px',
  },
};
const cont: SxProps<Theme> = {
  fontSize: '16px',
  lineHeight: '20px',
  '@media (max-width: 750px)': {
    fontSize: '14px',
    lineHeight: '17px',
  },
};
