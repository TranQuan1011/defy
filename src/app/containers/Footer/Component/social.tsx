import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Contact from './contact';
import { ContactVietNam } from './ContactVietNam';
import { ContactLondon } from './ContactLondon';
import { SocialNetwork } from './SocialNetwork';
import { Quick } from './Quick';
import { About } from './About';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import decor from '../../../assets/icon/decorator.png';
export const Social = () => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box
      sx={{
        borderTop: '1px solid rgba(125,111,125,.8)',
        paddingTop: '85px',
      }}
    >
      <img
        src={decor}
        alt="text"
        style={{ position: 'absolute', zIndex: -99 }}
      />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap: 'nowrap',
          paddingTop: '65px',
        }}
      >
        <Grid container>
          <Grid item xl={3} xs={12}>
            <Contact />
          </Grid>
          <Grid item md={9} xs={12} container>
            <Grid item md={7} xs={6}>
              <ContactVietNam />
              <ContactLondon />
            </Grid>
            {!matches && (
              <Grid item xl={5} xs={12}>
                <SocialNetwork />
                <Quick />
              </Grid>
            )}
          </Grid>
          <Grid item xl={3} xs={12}></Grid>
          <Grid item xl={9} xs={12} container>
            <About />
          </Grid>
          <Grid item xs={12}>
            {matches && (
              <Grid item xl={5} xs={12}>
                <SocialNetwork />
                <Quick />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
