import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import { ButtonColor, ButtonNoColor } from '../Button';
import { useTheme } from '@mui/material/styles';
import { Link, withRouter } from 'react-router-dom';
import Logo from 'app/assets/image/defi-logo.png';
import SignUp from 'app/assets/image/sign-up.png';
import { Divider, Grid, List, ListItem } from '@mui/material';
import { LinkButton } from './style';

const menuList = [
  {
    name: 'Pawn',
    url: '/',
  },
  {
    name: 'Borrow',
    url: '/',
  },
  {
    name: 'Lend',
    url: '/',
  },
  {
    name: 'NFT',
    url: '/',
  },
  {
    name: 'My Account',
    url: '/',
  },
  {
    name: 'FAQ',
    url: '/',
  },
];
const NavBar = props => {
  const { history } = props;
  const theme = useTheme();
  const [state, setState] = React.useState(false);
  const [ele, setEl] = React.useState(false);
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLap = useMediaQuery(theme.breakpoints.down('sm'));
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuList.map(item => (
          <ListItem key={item.name}>
            <LinkButton onClick={() => handleClick(item.url)} to={item.url}>
              {item.name}
            </LinkButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ButtonColor onClick={() => handleClick('/')}>
            Become a Pawnshop
          </ButtonColor>
        </ListItem>
        <ListItem>
          <ButtonNoColor onClick={() => handleClick('/')}>
            Buy DFY
          </ButtonNoColor>
        </ListItem>
        {isMobile ? (
          <List>
            <ListItem>
              <ButtonNoColor onClick={() => handleClick('/')}>
                Connect
              </ButtonNoColor>
            </ListItem>
          </List>
        ) : (
          <></>
        )}
        <ListItem>
          <ButtonNoColor onClick={() => handleClick('/login')}>
            Login
          </ButtonNoColor>
        </ListItem>
      </List>
      <Divider />
      {isMobile && ele ? (
        <List>
          <ListItem>
            <Link onClick={() => handleClick('/')} to="/">
              <img src={SignUp} alt="link" />
            </Link>
          </ListItem>
        </List>
      ) : (
        <></>
      )}
    </Box>
  );

  const handleClick = page => {
    if (page === '/login') {
      setEl(true);
    } else {
      setEl(false);
    }
    history.push(page);
  };

  return (
    <Box
      sx={{
        minWidth: '100%',
      }}
    >
      <AppBar
        position="relative"
        sx={{ backgroundColor: 'none', backgroundImage: 'none' }}
      >
        <Toolbar>
          <Typography component="div" sx={{ margin: '20px 81px 20px 0' }}>
            <Link onClick={() => handleClick('/')} to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Typography>
          {matches ? (
            <Grid container>
              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                spacing={3}
              >
                {!isLap && ele ? (
                  <Grid item>
                    <Link to="/">
                      <img src={SignUp} alt="link" />
                    </Link>
                  </Grid>
                ) : (
                  <></>
                )}
                {!isLap ? (
                  <Grid item>
                    <ButtonNoColor onClick={() => handleClick('/')}>
                      Connect
                    </ButtonNoColor>
                  </Grid>
                ) : (
                  <></>
                )}
                <Grid item>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer(true)}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Drawer open={state} onClose={toggleDrawer(false)}>
                {list()}
              </Drawer>
            </Grid>
          ) : (
            // Navbar
            <Grid container alignItems="center">
              <Grid container item spacing={3} xs={6} alignItems="center">
                {menuList.map(item => (
                  <Grid item key={item.name}>
                    <LinkButton
                      onClick={() => handleClick(item.url)}
                      to={item.url}
                    >
                      {item.name}
                    </LinkButton>
                  </Grid>
                ))}
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
