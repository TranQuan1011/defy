import { Box } from '@mui/system';
import { TextBox, LinkBoxYellow } from '../style';
import england from '../../../assets/icon/image 2.png';
import arrow from '../../../assets/icon/Arrow 3.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ContactLondon = () => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box sx={{ marginTop: '56px' }}>
      <Box sx={{ fontWeight: 600, marginBottom: matches ? '30px' : '24px' }}>
        DeFi For You — London Office
      </Box>
      <Box
        sx={{
          display: matches ? 'block' : 'flex',
          alignItems: 'center',
          lineHeight: '2',
        }}
      >
        <LinkBoxYellow sx={{ margin: '0 1rem 0 0' }}>
          +44 7479 739139
        </LinkBoxYellow>
        <Box sx={{ marginRight: '1rem' }}>
          <img src={england} alt="global" />
        </Box>
        <LinkBoxYellow sx={{ margin: matches ? 0 : '0 1rem 0 0' }}>
          Sean Mason - Business CFO
        </LinkBoxYellow>
      </Box>
      <TextBox sx={{ marginBottom: '4px', marginTop: '4px' }}>
        Office 32 19-21 Crawford Street, London, United Kingdom, W1H 1PJ
      </TextBox>
      <TextBox sx={{ marginBottom: '4px', marginTop: '4px' }}>
        Registration Number:<b> 13126050</b>
      </TextBox>

      <LinkBoxYellow sx={{ margin: '0 1rem 0 0' }}>
        View on Companies House
        <img
          src={arrow}
          alt="arrow"
          style={{ color: 'dba83d', marginLeft: '10px' }}
        />
      </LinkBoxYellow>
    </Box>
  );
};
