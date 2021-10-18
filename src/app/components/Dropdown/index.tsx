import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete';
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Crypto } from 'app/commons/types';
import getIconUrl from 'app/commons/getIconUrl';

export default function Dropdown(props): JSX.Element {
  const [input, setInput] = React.useState('');
  const temp = props.list.map((item: Crypto) => item.symbol);
  const list = ['All', ...temp];

  return (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue={list[0]}
      render={({ field }) => {
        const { ref, onChange, ...fieldProps } = field;
        return (
          <Autocomplete
            PaperComponent={props => (
              <Paper
                {...props}
                sx={{
                  backgroundColor: '#2f3543',
                  borderRadius: '16px',
                  '& ul': {
                    '&::-webkit-scrollbar': {
                      width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: '#45484F',
                      borderRadius: ' 3px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: '#74767B',
                      height: '26px',
                      borderRadius: ' 3px',
                    },
                  },
                }}
              />
            )}
            defaultValue={list[0]}
            noOptionsText="no data available"
            disableClearable
            options={list}
            renderInput={params => renderInput(params, field.value, input)}
            renderOption={renderOption}
            inputValue={input}
            onInputChange={(e, v, r) => {
              if (r === 'input') {
                setInput(v);
              }
            }}
            onChange={(e, v, r) => {
              setInput('');
              onChange(v);
            }}
            {...fieldProps}
          />
        );
      }}
    />
  );
}

const renderInput = (
  params: AutocompleteRenderInputParams,
  curValue: string,
  input: string,
): JSX.Element => {
  return (
    <Box position="relative">
      {input ? null : (
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
          {curValue !== 'All' && (
            <Avatar
              sx={{ width: '20px', height: '20px' }}
              src={getIconUrl(curValue)}
            />
          )}
          <Typography component="span" variant="body1">
            {curValue}
          </Typography>
        </Box>
      )}
      <TextField
        {...params}
        // placeholder="Name"
        color="warning"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: theme => theme.typography.pxToRem(22),
            height: theme => theme.typography.pxToRem(44),
            padding: '0 !important',
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
      {option !== 'All' && (
        <Avatar
          sx={{ width: '24px', height: '24px' }}
          src={getIconUrl(option)}
        />
      )}
      {option !== 'All' ? option : 'All'}
    </Box>
  );
};
