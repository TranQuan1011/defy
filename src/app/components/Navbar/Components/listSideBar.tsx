import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { LinkButton, BoxButton } from '../style';
import { withRouter } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Ava from '../../../assets/image/Vector.svg';
import { ButtonNoColor } from 'app/components/Button';
import { useDispatch } from 'react-redux';
import { logout } from 'app/globalActions';
import { useTranslation } from 'react-i18next';

const ListSideBar = props => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { history } = props;
  const handleClick = page => {
    history.push(page);
  };
  const Logout = () => {
    localStorage.removeItem('accessToken');
    dispatch(logout());
  };
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <List>
        <ListItem sx={{ justifyContent: 'center', flexDirection: 'column' }}>
          <Avatar alt="avatar" src={Ava} />
          {!props.loginState && (
            <ButtonNoColor
              onClick={() => handleClick('/login')}
              sx={{ marginTop: '10px' }}
            >
              {t('navBar.login')}
            </ButtonNoColor>
          )}
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary={t('navBar.pawn')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary={t('navBar.staking')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary="NTF" />
          </ListItemButton>
        </ListItem>
      </List>
      <Accordion
        square={true}
        disableGutters={true}
        sx={{
          color: '#fff',
          minHeight: '44px',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
        >
          <BoxButton>{t('navBar.account')}</BoxButton>
        </AccordionSummary>

        <AccordionDetails>
          <Accordion
            disableGutters={true}
            square={true}
            sx={{
              color: '#fff',
              minHeight: '44px',
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#fff',
                    minHeight: '44px',
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
            >
              <BoxButton>{t('navBar.borrowProfile')}</BoxButton>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/">
                    <ListItemText primary={t('navBar.collateral')} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/">
                    <ListItemText primary={t('navBar.contract')} />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            disableGutters={true}
            square={true}
            sx={{
              boxShadow: 'none',
              color: '#fff',
              minHeight: '44px',
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#fff',
                    minHeight: '44px',
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
            >
              <BoxButton>{t('navBar.lendProfile')}</BoxButton>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem>
                  <LinkButton to="/">{t('navBar.offer')}</LinkButton>
                </ListItem>
                <ListItem>
                  <LinkButton to="/">{t('navBar.contract')}</LinkButton>
                </ListItem>
                <ListItem>
                  <LinkButton to="/">{t('navBar.package')}</LinkButton>
                </ListItem>
                <ListItem>
                  <LinkButton to="/">{t('navBar.loan')}</LinkButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters={true}
            square={true}
            sx={{
              boxShadow: 'none',
              color: '#fff',
              minHeight: '44px',
            }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
            >
              <LinkButton style={{ marginLeft: '0' }} to="/">
              {t('navBar.staking')}
              </LinkButton>
            </AccordionSummary>
          </Accordion>
          <Accordion
            disableGutters={true}
            square={true}
            sx={{
              boxShadow: 'none',
              color: '#fff',
              minHeight: '44px',
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#fff',
                    minHeight: '44px',
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
            >
              <BoxButton>NFT</BoxButton>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem>
                  <LinkButton to="/">{t('navBar.list')}</LinkButton>
                </ListItem>
                <ListItem>
                  <LinkButton to="/">{t('navBar.auction')}</LinkButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={Logout}>
            <ListItemText primary={t('navBar.logOut')} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
export default withRouter(ListSideBar);
