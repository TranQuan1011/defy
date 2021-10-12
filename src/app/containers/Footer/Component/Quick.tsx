import { Box } from '@mui/system';
import { LinkBox } from '../style';
import arrow from '../../../assets/icon/Arrow 3.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export const Quick = () => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box sx={{ marginTop: matches ? '40px' : '110px' }}>
      <Box sx={{ fontWeight: 600, marginBottom: '24px' }}>Quick Navigation</Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          lineHeight: '2',
        }}
      ></Box>
      <LinkBox sx={{ marginBottom: '5px', marginTop: '5px' }}>
        Whitepaper
        <img src={arrow} alt="arrow" />
      </LinkBox>
      <LinkBox sx={{ marginBottom: '6px', marginTop: '5px' }}>
        Get the mobile app
        <img src={arrow} alt="arrow" />
      </LinkBox>
    </Box>
  );
};
