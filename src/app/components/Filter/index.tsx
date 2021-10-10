import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Filter(props) {
  return (
    <Box
      width="100%"
      sx={{ borderRadius: '20px', backgroundColor: '#282C37', pt: 1, pb: 3.75 }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        pl={1.5}
        pr={1.5}
        mb={1}
      >
        <Button
          variant="text"
          color="inherit"
          sx={{
            textTransform: 'none',
            textDecoration: 'underline !important',
            p: 0,
          }}
        >
          Reset filter
        </Button>
        <IconButton
          sx={{
            background: '#E0E0E0 !important',
            color: '#828282',
            height: '29px',
            width: '29px',
            display: props.displayClose ? 'inline-flex' : 'none',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      {props.children}
    </Box>
  );
}
