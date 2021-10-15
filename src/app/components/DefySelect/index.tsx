import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function DefySelect(props) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue="All"
      render={({ field }) => {
        const { ref, ...fieldProps } = field;
        return (
          <FormControl fullWidth sx={root} color="warning">
            <Select {...fieldProps} defaultValue="All">
              <MenuItem value={'All'}>All</MenuItem>
              <MenuItem value={0}>Weeks</MenuItem>
              <MenuItem value={1}>Months</MenuItem>
            </Select>
          </FormControl>
        );
      }}
    />
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
