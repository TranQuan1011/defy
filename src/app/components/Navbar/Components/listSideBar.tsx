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
const ListSideBar = props => {
  const { history } = props;
  const handleClick = page => {
    history.push(page);
  };
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <List>
        <ListItem sx={{ justifyContent: 'center', flexDirection: 'column' }}>
          <Avatar alt="avatar" src={Ava} />
          <ButtonNoColor
            onClick={() => handleClick('/login')}
            sx={{ marginTop: '10px' }}
          >
            Login
          </ButtonNoColor>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary="Pawn" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary="Starking" />
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
          <BoxButton>My Account</BoxButton>
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
              <BoxButton>Borrower Profile</BoxButton>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/">
                    <ListItemText primary="Collateral" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/">
                    <ListItemText primary="Contracts" />
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
              <BoxButton>Lender Profile</BoxButton>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem>
                  <LinkButton to="/">Offers sent</LinkButton>
                </ListItem>
                <ListItem>
                  <LinkButton to="/">Contracts</LinkButton>
                </ListItem>
                <ListItem>
                  <LinkButton to="/">Pawnshop Loan Packages</LinkButton>
                </ListItem>
                <ListItem>
                  <LinkButton to="/">Loan requests</LinkButton>
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
                Staking
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
                  <LinkButton to="/">NTF List</LinkButton>
                </ListItem>
                <ListItem>
                  <LinkButton to="/">NTF Aucion</LinkButton>
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
          <ListItemButton component="a" href="/login">
            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
export default withRouter(ListSideBar);
