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
import { Divider, List, ListItem } from '@mui/material';
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
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              component="div"
              sx={{ margin: '20px 0', height: 'auto' }}
            >
              <Link onClick={() => handleClick('/')} to="/">
                <img width="100%" src={Logo} alt="logo" />
              </Link>
            </Typography>
            {matches ? (
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  marginLeft: '20px',
                }}
              >
                {!isLap && ele ? (
                  <Link style={{ marginRight: '10px' }} to="/">
                    <img src={SignUp} alt="link" />
                  </Link>
                ) : (
                  <></>
                )}
                <ButtonNoColor onClick={() => handleClick('/')}>
                  Connect
                </ButtonNoColor>
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

                <Drawer open={state} onClose={toggleDrawer(false)}>
                  {list()}
                </Drawer>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginLeft: '81px',
                }}
              >
                <Box sx={{ width: '50%' }}>
                  {menuList.map(item => (
                    <LinkButton
                      onClick={() => handleClick(item.url)}
                      to={item.url}
                      sx={{ margin: '10px 36px 10px 0' }}
                    >
                      {item.name}
                    </LinkButton>
                  ))}
                </Box>
                <Box>
                  {ele && ( // xuat hien Sign Up khi an vao nut Login
                    <Link style={{ marginLeft: '20px' }} to="/">
                      <img src={SignUp} alt="link" />
                    </Link>
                  )}
                  <ButtonColor
                    sx={{ marginLeft: '20px' }}
                    onClick={() => handleClick('/')}
                  >
                    Become a Pawnshop
                  </ButtonColor>

                  <ButtonNoColor
                    sx={{ marginLeft: '20px' }}
                    onClick={() => handleClick('/')}
                  >
                    Buy DFY
                  </ButtonNoColor>

                  <ButtonNoColor
                    sx={{ marginLeft: '20px' }}
                    onClick={() => handleClick('/')}
                  >
                    Connect
                  </ButtonNoColor>

                  <ButtonNoColor
                    sx={{ marginLeft: '20px' }}
                    onClick={() => handleClick('/login')}
                  >
                    Login
                  </ButtonNoColor>
                </Box>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withRouter(NavBar);
