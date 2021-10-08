import React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SxProps } from '@mui/system';
import { Avatar, Box, Theme } from '@mui/material';
import Paper from '@mui/material/Paper';

const names = ['Oliver', 'Van', 'April'];

export default function MultiSelect() {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Autocomplete
      multiple
      fullWidth
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      PaperComponent={props => (
        <Paper
          {...props}
          sx={{
            backgroundColor: '#2f3543',
            borderRadius: '16px',
          }}
        />
      )}
      options={names}
      renderOption={renderOption}
      getOptionLabel={option => option}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            avatar={<Avatar />}
          />
        ))
      }
      renderInput={params => (
        <TextField
          {...params}
          placeholder="Colleteral currency"
          color="secondary"
          sx={textField}
        />
      )}
    />
  );
}

const renderOption = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: string,
): JSX.Element => {
  return (
    <Box component="li" display="flex" columnGap="6px" {...props}>
      <Avatar sx={{ width: '24px', height: '24px' }} />
      {option}
    </Box>
  );
};

const textField: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    borderRadius: theme => theme.typography.pxToRem(22),
    padding: '0 3px',
    paddingRight: '32px !important',
    '& .MuiOutlinedInput-input': {
      lineHeight: '100%',
      padding: '10px',
    },
  },
};
