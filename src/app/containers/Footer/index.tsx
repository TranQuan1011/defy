import { Box } from '@mui/system';
import * as React from 'react';
import Container from '@mui/material/Container';
import { TextBox, LinkBox } from './style';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'rgba(19, 23, 31, 1)',
        padding: '1rem 0 1.5rem',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px',
          alignItems: 'center',
        }}
      >
        <TextBox>© 2021 DeFi For You. All rights reserved</TextBox>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <div>
            <LinkBox onClick={handleOpen} to="/">
              Term Of Services
            </LinkBox>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </div>

          <TextBox>|</TextBox>
          <LinkBox to="/">Privacy Policy</LinkBox>
        </Box>
      </Container>
    </Box>
  );
};
