import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export default function Sidebar(props) {
  return (
    <SwipeableDrawer
      anchor="right"
      open={true}
      onOpen={() => {}}
      onClose={() => {}}
      sx={{
        '& > .MuiPaper-root': {
          backgroundImage: 'none',
          width: '90%',
          backgroundColor: '#282C37',
        },
      }}
    >
      {props.children}
    </SwipeableDrawer>
  );
}
