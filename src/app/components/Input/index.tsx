import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Input(props) {
  return (
    <>
      <Typography
            },
          },
          '& fieldset': {
            border: '1px solid #74767B',
          },
          ...props.sx,
        }}
        type={props.type}
        placeholder={props.placeholder}
        InputProps={props.InputProps}
      />
    </>
  );
}
