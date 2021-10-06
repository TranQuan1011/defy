import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Input(props) {
  return (
    <>
      <Typography
        font-weigh = '500'
        font-size = '14px'
        line-height = '17px'
        color = '#ffffff'
      >
        {props.label}
      </Typography>
        <TextField 
          sx={{
            height: '44px',
            border: '1px solid #74767B',
            borderRadius: '22px',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '20px',
            color: 'white',
            '& .MuiOutlinedInput-root': {
              height: '44px',
              border: '1px solid #74767B',
              borderRadius: '22px',
            },
          }}
          type={props.type} 
          placeholder={props.placeholder} 
          InputProps={props.InputProps}
        />
    </>
  );
}