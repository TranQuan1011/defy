import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
export const Ads = props => {
  return (
    <Card
      sx={{
        backgroundColor: '#171a23',
        backgroundImage: 'none',
        border: '1px solid #32353d',
        borderRadius: '20px',
        marginBottom: '20px',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={props.img} alt="image" />
        <Box sx={{ marginLeft: '15px' }}>
          <Typography variant="h6" fontWeight="600" color="#ffca2a">
            {props.header}
          </Typography>
          <Box>
            <Typography fontWeight="600">
              {props.content}{' '}
              {props.defi && (
                <span style={{ color: '#ffca2a' }}>Defi For You</span>
              )}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
