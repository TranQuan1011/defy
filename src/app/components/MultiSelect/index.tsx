import React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SxProps } from '@mui/system';
import { Avatar, Box, Theme } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Controller } from 'react-hook-form';
import getIconUrl from 'app/commons/getIconUrl';

export default function MultiSelect(props) {
  const list = props.list.map(item => item.symbol);

  return (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue={list}
      rules={props.rules}
      render={({ field, fieldState: { error } }) => {
        const { ref, onChange, ...fieldProps } = field;
        return (
          <Autocomplete
            multiple
            fullWidth
            onChange={(event, newValue) => {
              onChange(newValue);
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
            options={list}
            renderOption={renderOption}
            getOptionLabel={option => option}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  avatar={<Avatar src={getIconUrl(option)} />}
                />
              ))
            }
            renderInput={params => (
              <TextField
                {...params}
                placeholder="Colleteral currency"
                color="secondary"
                error={error && Boolean(error.message)}
                helperText={error && error.message}
                sx={textField}
              />
            )}
            {...fieldProps}
          />
        );
      }}
    />
  );
}

const renderOption = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: string,
): JSX.Element => {
  return (
    <Box component="li" display="flex" columnGap="6px" {...props}>
      <Avatar sx={{ width: '24px', height: '24px' }} src={getIconUrl(option)} />
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
