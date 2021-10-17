import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useDispatch } from 'react-redux';

export default function Sidebar(props) {
  const dispatch = useDispatch();

  return (
    <SwipeableDrawer
      anchor="right"
      open={props.open}
      onOpen={() => dispatch(props.onOpen())}
      onClose={() => dispatch(props.onClose())}
      sx={{
        '& > .MuiPaper-root': {
          backgroundImage: 'none',
          width: '90%',
          backgroundColor: '#282C37',
          padding: '32px 0',
        },
      }}
    >
      {props.children}
    </SwipeableDrawer>
  );
}
