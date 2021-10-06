
import React from 'react';
import { makeStyles } from '@mui/styles';
import Input from 'app/components/Input/index';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BackgroundButton } from 'app/components/Button/index';

const useStyles = makeStyles({
    text: {
        fontSize: '14px',
        lineHeight: '17px',
        color: '#ffffff',
    },
    span: {
        color: '#DBA83D',
    },
    btn: {
        margin: '30px 40%',
    }
  });

  export default function Signin() {
  const classes = useStyles();
  return (
    <>
        <Box>
            <Input 
                label='Name' type='name' 
                placeholder='Enter Name' 
            />
            <Input 
                label='Email' 
                type='email' 
                placeholder='Enter Email' 
            />
            <Input 
                label='Password' 
                type='password' 
                placeholder='Enter Password' 
            />
            <Input 
                label='Confirm password' 
                type='password'
                placeholder='Enter Confirm password' 
            />
            <Typography className={classes.text}>We will not share or sell your information to 3rd parties.</Typography>
            <Typography className={classes.text}>By clicking on <span className={classes.span}>Create Account</span>, you agree to DeFi For
                You’s Terms and Conditions of Use.</Typography>
            <BackgroundButton 
                className={classes.btn}
            >
                Create Account
            </BackgroundButton>
        </Box>
    </>
  );
}

