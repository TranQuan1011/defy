
import React from 'react';
import { makeStyles } from '@mui/styles';
import Input from 'app/components/Input/index';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ButtonColor } from 'app/components/Button/index';
import { SxProps } from '@mui/system';
import { Theme, InputAdornment,IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
                sx={input}
            />
            <Input 
                label='Email' 
                type='email' 
                placeholder='Enter Email' 
                sx={input}
            />
            <Input 
                label='Password' 
                type='password' 
                placeholder='Enter Password' 
                sx={input}
                InputProps= {{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton edge="end">
                            <VisibilityIcon />
                        </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Input 
                label='Confirm password' 
                type='password'
                placeholder='Enter Confirm password' 
                sx={input}
                InputProps= {{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton edge="end">
                            <VisibilityOffIcon />
                        </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Typography className={classes.text}>We will not share or sell your information to 3rd parties.</Typography>
            <Typography className={classes.text}>By clicking on <span className={classes.span}>Create Account</span>, you agree to DeFi For
                You’s Terms and Conditions of Use.</Typography>
            <ButtonColor 
                className={classes.btn}
            >
                Create Account
            </ButtonColor>
        </Box>
    </>
  );
}

const input: SxProps<Theme> = {
    marginBottom: '24px',
}
