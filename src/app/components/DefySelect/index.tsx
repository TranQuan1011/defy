import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export default function DefySelect() {
  return (
    <FormControl fullWidth sx={root} color="warning">
      <Select value={10}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

const root: SxProps<Theme> = {
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
