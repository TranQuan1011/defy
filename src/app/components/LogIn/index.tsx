import React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit/dist/createAction';

import Input from 'app/components/Input';
import { ButtonColor } from 'app/components/Button';
import { LogIn as Action } from 'app/commons/types';

interface Props {
  showPassword: () => {
    payload: undefined;
    type: string;
  };
  isShowPassword: boolean | undefined;
  submitAction: ActionCreatorWithPayload<Action, string>;
}

export default function LogIn(props: Props): JSX.Element {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<any> = data => {
    const newData = { username: data.email, password: data.password };
    dispatch(props.submitAction(newData));
  };

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <Box pt={3} display="flex" flexDirection="column">
        <Input
          type="email"
          placeholder="Email"
          label="Email"
          sx={input}
          control={control}
          rules={{
            required: 'Invalid email',
            pattern: {
              value: /\S+@\w+/,
              message: 'Invalid email',
            },
          }}
        />
        <Input
          type={props.isShowPassword ? 'text' : 'password'}
          placeholder="Password"
          label="Password"
          sx={input}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => dispatch(props.showPassword())}
                >
                  {props.isShowPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          rules={{
            required: 'Invalid password',
            minLength: {
              value: 8,
              message: 'Password length should be between 8 to 255 characters.',
            },
            maxLength: {
              value: 255,
              message: 'Password length should be between 8 to 255 characters.',
            },
            validate: {
              uppercase: value =>
                /(?=[A-Z]+)/.test(value) ||
                'Password should contain at least one uppercase letter(A-Z).',
              lowercase: value =>
                /(?=[a-z]+)/.test(value) ||
                'Password should contain at least one lowercase letter(a-z).',
              specialChar: value =>
                /(?=\P{L})(?=\W)(?=\S)/u.test(value) ||
                'Password should contain at least one special character ( @, #, %, &, !, $, etc….).',
            },
          }}
          control={control}
        />
        <ButtonColor sx={button} type="submit">
          Log in
        </ButtonColor>
      </Box>
    </form>
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
