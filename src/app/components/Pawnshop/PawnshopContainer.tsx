import React from 'react';
import Slider from 'react-slick';
import PawnshopCard from './PawnshopCard';
import pawnshop1 from 'app/assets/image/pawnshop_1.png';
import pawnshop2 from 'app/assets/image/pawnshop_2.png';
import pawnshop3 from 'app/assets/image/pawnshop_3.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export default function Pawnshop() {
  const PawnshopItem = [
    {
      id: 1,
      image: pawnshop1,
      description: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      image: pawnshop2,
      description: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      image: pawnshop3,
      description: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 4,
      image: pawnshop2,
      description: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 5,
      image: pawnshop3,
      description: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 6,
      image: pawnshop1,
      description: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
  ];
  const sliders = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const PawnshopContainer = PawnshopItem.map(item => {
    return (
      <PawnshopCard
        key={item.id}
        image={item.image}
        description={item.description}
        content={item.content}
      />
    );
  });
  return (
    <Box sx={box}>
      <Typography sx={title}>Explore Featured Pawnshops</Typography>
      <Box sx={slider}>
        <Typography sx={seeAll}>See all <ArrowRightAltIcon/></Typography>
        <Slider {...sliders}>{PawnshopContainer}</Slider>
      </Box>
    </Box>
  );
}

const box: SxProps<Theme> = {
  background: '#232732',
}
const title: SxProps<Theme> = {
  fontSize: '36px',
  lineHeight: '44px',
  color: '#dba83d',
  textAlign: 'center',
  fontWeight: '600',
  paddingTop: '60px',
  paddingBottom: '64px',
}
const slider: SxProps<Theme> = {
  maxWidth: '1340px',
  margin: '0 auto',
  '@media (max-width: 750px)': {
    maxWidth: '350px',
  },
  '@media (min-width: 750px) and (max-width: 1028px)': {
    maxWidth: '448px',
  },
  '@media (min-width: 1028px) and (max-width: 1080px):': {
    maxWidth: '600px',
    margin: '0 auto',
  },
  '@media (min-width: 1080px) and (max-width: 1600px)': {
    maxWidth: '880px',
  },
  '& .slick-arrow': {
    top: '34%',
    '&::before': {
      color: '#C9CACD',
      fontSize: '74px',
      opacity: '0.1',
      '@media (max-width: 750px)': {
        fontSize: '30px',
      }
    }
  },
  '& .slick-next': {
    right: '-40px',
    '@media (max-width: 750px)': {
      right: '-10px',
    }
  },
  '& .slick-prev': {
    left: '-80px',
    '@media (max-width: 750px)': {
      left: '-15px',
    }
  },
  '& .slick-dots': {
    visibility: 'hidden',
  }
}
const seeAll: SxProps<Theme> = {
    fontSize: '16px',
    color: '#ffffff',
    textAlign: 'right',
    fontWeight: '500',
    lineHeight: '150%',
    paddingBottom: '12px',
    margin: '0 0 0 auto',
    '@media (min-width: 320px) and (max-width: 1024px)': {
      visibility: 'hidden',
    }
}