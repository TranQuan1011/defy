import React from 'react';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import data from './data';
import WhyBorrowCard from 'app/components/WhyBorrowCard';

export default function WhyBorrow() {
  return (
    <Box width="100%">
      <Container maxWidth="lg" sx={container}>
        <Typography
          color="secondary"
          align="center"
          sx={{
            textTransform: 'capitalize',
            fontWeight: 600,
            fontSize: { xs: '24px', md: '36px' },
            mb: {
              xs: 6,
              md: 12.5,
            },
          }}
        >
          Why borrow with us?
        </Typography>
        <Grid container rowSpacing={6.875} columnSpacing={13.5}>
          {data.map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <WhyBorrowCard data={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const container = {
  pt: {
    xs: 5,
    md: 7.5,
  },
  pb: {
    xs: 5,
    md: 10,
  },
};
