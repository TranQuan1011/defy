import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ResponsiveImg from '../ResponsiveImg';

export default function WhyBorrowCard({ data, index }) {
  return (
    <Grid container columnSpacing={3}>
      <Grid
        item
        xs={4}
        sm={12}
        order={{ xs: index % 2 === 0 ? 1 : 2, sm: 1 }}
        style={{ height: '80px' }}
      >
        <ResponsiveImg src={data.icon} alt={data.heading} />
      </Grid>
      <Grid item xs={8} sm={12} order={{ xs: index % 2 === 0 ? 2 : 1, sm: 2 }}>
        <Typography
          component="h3"
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            textAlign: {
              xs: index % 2 === 0 ? 'left' : 'right',
              sm: 'center',
            },
            mt: {
              md: 5,
            },
            mb: {
              xs: 1,
              md: 2.5,
            },
          }}
        >
          {data.heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: {
              xs: index % 2 === 0 ? 'left' : 'right',
              sm: 'center',
            },
          }}
        >
          {data.body}
        </Typography>
      </Grid>
    </Grid>
  );
}
