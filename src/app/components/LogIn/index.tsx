import React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

import Input from 'app/components/Input';
import { ButtonColor } from 'app/components/Button';

export default function LogIn() {
  return (
    <Box pt={3} display="flex" flexDirection="column">
      <Input type="email" placeholder="Email" label="Email" sx={input} />
      <Input
        type="password"
        placeholder="Password"
        label="Password"
        sx={input}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <ButtonColor sx={button}>Log in</ButtonColor>
    </Box>
  );
}

const button: SxProps<Theme> = {
  width: 'auto',
  padding: '1rem 2rem',
  alignSelf: 'center',
};

const input: SxProps<Theme> = {
  mb: 3,
};
