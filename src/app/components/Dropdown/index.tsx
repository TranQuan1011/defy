import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete';
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

const names = ['Oliver', 'Van', 'April'];

const renderInput = (params: AutocompleteRenderInputParams): JSX.Element => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        display="flex"
        alignItems="center"
        columnGap="6px"
        height="100%"
        width="calc(100% - 32px)"
        padding="10px"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
      >
        <Avatar sx={{ width: '20px', height: '20px' }} />
        <Typography component="span" variant="body1">
          TEXT
        </Typography>
      </Box>
      <TextField
        {...params}
        // placeholder="Name"
        color="warning"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: theme => theme.typography.pxToRem(22),
            height: theme => theme.typography.pxToRem(44),
            padding: '0',
            paddingRight: '32px !important',
            '& .MuiOutlinedInput-input': {
              lineHeight: '100%',
              padding: '10px',
            },
          },
        }}
      />
    </Box>
  );
};

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

export default function Dropdown(): JSX.Element {
  const [value, setValue] = React.useState<string | null>(null);
  const [input, setInput] = React.useState('');
  return (
    <Autocomplete
      value={value as string}
      PaperComponent={props => (
        <Paper
          {...props}
          sx={{
            backgroundColor: '#2f3543',
            borderRadius: '16px',
          }}
        />
      )}
      noOptionsText="no data available"
      disableClearable
      options={names}
      renderInput={params => renderInput(params)}
      renderOption={renderOption}
      inputValue={input}
      onChange={(e, v, r) => setValue(v)}
      onInputChange={(e, v, r) => {
        if (r === 'input') {
          setInput(v);
        }
      }}
    />
  );
}
