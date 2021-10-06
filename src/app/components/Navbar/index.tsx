import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ButtonColor, ButtonNoColor } from '../Button';
import { useTheme } from '@mui/material/styles';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../../assets/image/defi-logo.png';
import SignUp from '../../../assets/image/sign-up.png';
import { Grid } from '@mui/material';
import { LinkButton } from './style';
const NavBar = props => {
  const { history } = props;
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [ele, setEl] = React.useState(false);
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // Ham dieu huong
  const handleMenuClick = page => {
    if (page === '/login') {
      setEl(true);
    } else {
      setEl(false);
    }
    history.push(page);
    setAnchorEl(null);
  };
  // Ham dieu huong
  const handleClick = page => {
    if (page === '/login') {
      setEl(true);
    } else {
      setEl(false);
    }
    history.push(page);
  };

  return (
    <Box sx={{ minWidth: '100%' }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography component="div" sx={{ margin: '20px 81px 20px 0' }}>
            <Link onClick={() => handleClick('/')} to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Typography>
          {matches ? ( // breackpoint
            <Grid container>
              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                spacing={3}
              >
                {ele && ( // xuat hien Sign Up khi an vao nut Login
                  <Grid item>
                    <Link to="/">
                      <img src={SignUp} alt="link" />
                    </Link>
                  </Grid>
                )}
                <Grid item>
                  <ButtonNoColor onClick={() => handleMenuClick('/')}>
                    Connect
                  </ButtonNoColor>
                </Grid>
                <Grid item>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuClick('/')}>
                  <LinkButton to="/">Pawn</LinkButton>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/')}>
                  <LinkButton to="/">Borrow</LinkButton>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/')}>
                  <LinkButton to="/">Lend</LinkButton>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/')}>
                  <LinkButton to="/">NFT</LinkButton>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/')}>
                  <LinkButton to="/">My Account</LinkButton>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/')}>
                  <LinkButton to="/">FAQ</LinkButton>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/')}>
                  <ButtonColor>Become a Pawnshop</ButtonColor>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/')}>
                  <ButtonNoColor>Buy DFY</ButtonNoColor>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/login')}>
                  <ButtonNoColor>Login</ButtonNoColor>
                </MenuItem>
              </Menu>
            </Grid>
          ) : (
            // Navbar
            <Grid container alignItems="center">
              <Grid container item spacing={3} xs={6} alignItems="center">
                <Grid item>
                  <LinkButton onClick={() => handleClick('/')} to="/">
                    Pawn
                  </LinkButton>
                </Grid>
                <Grid item>
                  <LinkButton onClick={() => handleClick('/')} to="/">
                    Borrow
                  </LinkButton>
                </Grid>
                <Grid item>
                  <LinkButton onClick={() => handleClick('/')} to="/">
                    Lend
                  </LinkButton>
                </Grid>
                <Grid item>
                  <LinkButton onClick={() => handleClick('/')} to="/">
                    NFT
                  </LinkButton>
                </Grid>
                <Grid item>
                  <LinkButton onClick={() => handleClick('/')} to="/">
                    My Account
                  </LinkButton>
                </Grid>
                <Grid item>
                  <LinkButton onClick={() => handleClick('/')} to="/">
                    FAQ
                  </LinkButton>
                </Grid>
                {ele && ( // xuat hien Sign Up khi an vao nut Login
                  <Grid item>
                    <Link to="/">
                      <img src={SignUp} alt="link" />
                    </Link>
                  </Grid>
                )}
              </Grid>
              <Grid container item spacing={3} xs={6} justifyContent="flex-end">
                <Grid item>
                  <ButtonColor onClick={() => handleClick('/')}>
                    Become a Pawnshop
                  </ButtonColor>
                </Grid>
                <Grid item>
                  <ButtonNoColor onClick={() => handleClick('/')}>
                    Buy DFY
                  </ButtonNoColor>
                </Grid>
                <Grid item>
                  <ButtonNoColor onClick={() => handleClick('/')}>
                    Connect
                  </ButtonNoColor>
                </Grid>
                <Grid item>
                  <ButtonNoColor onClick={() => handleClick('/login')}>
                    Login
                  </ButtonNoColor>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withRouter(NavBar);
