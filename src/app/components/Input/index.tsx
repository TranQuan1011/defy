import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  FieldValue,
  ValidationRule,
} from 'react-hook-form';
import { SxProps, Theme } from '@mui/system';
import { InputProps } from '@mui/material';

interface Props {
  label: string;
  type: string;
  placeholder: string;
  InputProps?: Partial<InputProps>;
  sx?: SxProps<Theme>;
  control?: Control<FieldValues>;
  rules?: Object;
}

export default function Input(props): JSX.Element {
  const name = props.label.toLowerCase();

  return (
    <>
      <Typography
        component="label"
        sx={{
          display: 'block',
          fontSize: '1rem',
          fontWeight: 500,
        }}
      >
        {props.label}
      </Typography>
      <Controller
        control={props.control}
        name={name}
        rules={props.rules}
        defaultValue=""
        render={({ field, fieldState }) => {
          const { ref, ...fieldProps } = field;
          const { error } = fieldState;
          return (
            <TextField
              fullWidth
              color="warning"
              sx={{ ...textfield, ...props.sx }}
              type={props.type}
              placeholder={props.placeholder}
              InputProps={props.InputProps}
              error={error && Boolean(error.message)}
              helperText={error && error.message}
              {...fieldProps}
            />
          );
        }}
      />
    </>
  );
}

const textfield = {
  borderRadius: '22px',
  '& .MuiOutlinedInput-root': {
    height: '44px',
    borderRadius: '22px',
    '& input': {
      pt: 0,
      pb: 0,
      height: '100%',
      lineHeight: '44px',
    },
  },
  '& fieldset': {
    border: '1px solid #74767B',
  },
};
