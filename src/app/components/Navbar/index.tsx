import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ButtonColor, ButtonNoColor } from '../Button';
import { useTheme } from '@mui/material/styles';
import { Link, withRouter } from 'react-router-dom';
import Logo from 'app/assets/image/defi-logo.png';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from './Components/navlink';
import { Breakpoints } from './breakpoint';
import { SideBar } from './Components/sidebar';
import Avatar from '@mui/material/Avatar';
import Ava from '../../assets/image/Vector.svg';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { logout } from 'app/globalActions';
import ChangeLang from './Components/changeLang';

const NavBar = props => {
  const { history } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery(theme.breakpoints.down(Breakpoints.xl));
  const isMobile = useMediaQuery(theme.breakpoints.down(Breakpoints.md));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = page => {
    history.push(page);
  };
  const handleMenu = props => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const Logout = () => {
    localStorage.removeItem('accessToken');
    dispatch(logout());
  };
  return (
    <>
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
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography component="div" sx={{ padding: '20px 0' }}>
                <Link onClick={() => handleClick('/')} to="/">
                  <img width="100%" src={Logo} alt="logo" />
                </Link>
              </Typography>
              
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  justifyContent: !matches ? 'space-between' : 'flex-end',
                  width: isMobile ? '110%' : '100%',
                }}
              >
                {!matches && <NavLink />}
                {!isMobile ? (
                  <Box>
                    <ButtonColor
                      key={1}
                      sx={{ marginLeft: '20px' }}
                      onClick={() => handleClick('/')}
                    >
                      Become a Pawnshop
                    </ButtonColor>

                    <ButtonNoColor
                      key={2}
                      sx={{ marginLeft: '20px' }}
                      onClick={() => handleClick('/')}
                    >
                      Buy DFY
                    </ButtonNoColor>

                    <ButtonNoColor
                      key={3}
                      sx={{ marginLeft: '20px' }}
                      onClick={() => handleClick('/')}
                    >
                      Connect
                    </ButtonNoColor>

                    {props.user === null ? (
                      <ButtonNoColor
                        key={4}
                        sx={{ marginLeft: '20px' }}
                        onClick={() => handleClick('/login')}
                      >
                        Login
                      </ButtonNoColor>
                    ) : (
                      <>
                        <ButtonMenu
                          aria-controls="basic-menu"
                          aria-haspopup="true"
                          aria-expanded={openMenu ? 'true' : undefined}
                          onClick={handleOpenMenu}
                          style={{ color: '#fff' }}
                        >
                          <Avatar alt="avatar" src={Ava} />
                          <Box sx={{ marginLeft: '5px' }}>
                            {props.user.name}
                          </Box>
                        </ButtonMenu>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={openMenu}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            Change password
                          </MenuItem>
                          <MenuItem onClick={Logout}>Log out</MenuItem>
                        </Menu>
                      </>
                    )}
                    {matches && (
                      <IconButton onClick={handleMenu}>
                        {!open && <MenuIcon />}
                        {open && <CloseIcon />}
                      </IconButton>
                    )}
                  </Box>
                ) : (
                  <Box>
                    <ButtonNoColor
                      key={4}
                      sx={{ marginLeft: '20px' }}
                      onClick={() => handleClick('/login')}
                    >
                      Connect
                    </ButtonNoColor>
                    <IconButton onClick={handleMenu}>
                      {!open && <MenuIcon />}
                      {open && <CloseIcon />}
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>
            <ChangeLang />
          </Toolbar>
          <SideBar open={open} loginState={props.user} />
        </AppBar>
      </Box>
    </>
  );
};

export default withRouter(NavBar);

const ButtonMenu = styled(Button)`
  color: #ffffff;
  font-weight: 600;
  text-transform: none;
`;
