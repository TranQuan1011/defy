import { Box } from '@mui/system';
import * as React from 'react';
import Container from '@mui/material/Container';
import { TextBox, LinkBox } from './style';
import { Typography } from '@mui/material';
import { Social } from './Component/social';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonNoColor, ButtonColor } from '../../components/Button/index';
export const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      <Social />
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgba(19, 23, 31, 1)',
          padding: '1rem 0 1.5rem',
          bottom: '0',
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
              <LinkBox onClick={handleClickOpen('paper')}>
                Term Of Services
              </LinkBox>
              <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="lg"
                sx={{ height: '70%' }}
              >
                <DialogTitle id="scroll-dialog-title">
                  <Typography variant="h4" textAlign="center" fontWeight="700">
                    Term Of Services
                  </Typography>
                </DialogTitle>
                <DialogContent
                  dividers={scroll === 'paper'}
                  sx={{ width: '100%' }}
                >
                  <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  >
                    {[...new Array(30)]
                      .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                      )
                      .join('\n')}
                  </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center' }}>
                  <ButtonNoColor
                    onClick={handleClose}
                    sx={{ color: '#b03e42', border: '1px solid #b03e42' }}
                  >
                    Decline
                  </ButtonNoColor>
                  <ButtonColor onClick={handleClose} sx={{ width: '102px' }}>
                    Accept
                  </ButtonColor>
                </DialogActions>
              </Dialog>
            </div>

            <TextBox>|</TextBox>
            <LinkBox>Privacy Policy</LinkBox>
          </Box>
        </Container>
      </Box>
    </>
  );
};
