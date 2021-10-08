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
const NavBar = props => {
  const { history } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery(theme.breakpoints.down(Breakpoints.xl));
  const isMobile = useMediaQuery(theme.breakpoints.down(Breakpoints.md));
  const handleClick = page => {
    history.push(page);
  };
  const handleMenu = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
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

                    <ButtonNoColor
                      key={4}
                      sx={{ marginLeft: '20px' }}
                      onClick={() => handleClick('/login')}
                    >
                      Login
                    </ButtonNoColor>
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
          </Toolbar>
          <SideBar open={open} />
        </AppBar>
      </Box>
    </>
  );
};

export default withRouter(NavBar);
