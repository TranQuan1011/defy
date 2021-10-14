import React, { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import Input from 'app/components/Input/index';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ButtonColor } from 'app/components/Button/index';
import { InputAdornment, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SignUp as Action } from 'app/commons/types';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit/dist/createAction';

interface Props {
  captchaRes: null | string | undefined;
  onCaptchaChange: (payload: string | null) => {
    payload: string | null;
    type: string;
  };
  showPassword: () => {
    payload: undefined;
    type: string;
  };
  showConfirmPassword: () => {
    payload: undefined;
    type: string;
  };
  isShowPassword: boolean | undefined;
  isShowConfirmPassword: boolean | undefined;
  submitAction: ActionCreatorWithPayload<Action, string>;
}

const useStyles = makeStyles({
  text: {
    fontSize: '14px',
    lineHeight: '17px',
    color: '#ffffff',
  },
  span: {
    color: '#DBA83D',
  },
});

export default function SignUp(props: Props): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { control, watch, handleSubmit } = useForm({
    mode: 'all',
  });
  const reCaptchaRef = useRef() as React.MutableRefObject<ReCAPTCHA>;

  const handleChange = (value: string | null): void => {
    dispatch(props.onCaptchaChange(value));
  };

  const onSubmit: SubmitHandler<any> = data => {
    if (!props.captchaRes) {
      alert('Please verify captcha');
      return;
    }
    const { 'confirm password': omit, ...temp } = data;
    const newData = { ...temp, recaptcha_response: props.captchaRes };
    dispatch(props.submitAction(newData));
    reCaptchaRef.current.reset();
    dispatch(props.onCaptchaChange(null));
  };

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <Box pt={3} display="flex" flexDirection="column">
        <Input
          label="Name"
          type="text"
          placeholder="Enter Name"
          sx={input}
          control={control}
          rules={{
            required: 'Invalid name',
          }}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter Email"
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
          label="Password"
          type={props.isShowPassword ? 'text' : 'password'}
          placeholder="Enter Password"
          sx={input}
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => dispatch(props.showPassword())}
              >
                <IconButton edge="end">
                  {props.isShowPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
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
        />
        <Input
          label="Confirm password"
          type={props.isShowConfirmPassword ? 'text' : 'password'}
          placeholder="Enter Confirm password"
          sx={input}
          control={control}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => dispatch(props.showConfirmPassword())}
              >
                <IconButton edge="end">
                  {props.isShowConfirmPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          rules={{
            required: 'Invalid password',
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
              matchPw: value =>
                value === watch('password') ||
                'The confirm password field does not match the password',
            },
          }}
        />
        <Typography className={classes.text}>
          We will not share or sell your information to 3rd parties.
        </Typography>
        <Typography className={classes.text}>
          By clicking on <span className={classes.span}>Create Account</span>,
          you agree to DeFi For You’s Terms and Conditions of Use.
        </Typography>
        <FormControl sx={{ mt: 4, mb: 5 }}>
          <ReCAPTCHA
            sitekey="6LcSG9EaAAAAABvbpHkdugGmjEWeYPp6NoPPDEvt"
            onChange={handleChange}
            ref={reCaptchaRef}
          />
        </FormControl>
        <ButtonColor sx={button} type="submit">
          Create Account
        </ButtonColor>
      </Box>
    </form>
  );
}

const button = {
  padding: '1rem 2rem',
  alignSelf: 'center',
};

const input = {
  marginBottom: '24px',
};
