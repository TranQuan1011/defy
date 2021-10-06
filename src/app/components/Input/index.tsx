import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Input(props) {
  return (
    <>
      <Typography
          component="label"
          sx= {{
            display:"block",
            fontSize: "1rem",
            fontWeight: 500,        
          }}
        >
          {props.label}
        </Typography>
        <TextField
          sx={{
            borderRadius: "22px",
            "& .MuiOutlinedInput-root": {
              height: "44px",
              borderRadius: "22px",
              "& input": {
                pt:0,
                pb:0,
                height:"100%",
                lineHeight: "44px"
              }
            },
            "& fieldset": {
              border: "1px solid #74767B"
            }
          }}
          type={props.type}
          placeholder={props.placeholder}
          InputProps={props.InputProps}
        />
    </>
  );
}