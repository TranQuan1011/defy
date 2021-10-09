import { Box } from '@mui/system';

import github from '../../../assets/icon/Exclude.png';
import tele from '../../../assets/icon/icon.png';
import fb from '../../../assets/icon/facebook.png';
import youtube from '../../../assets/icon/youtube.png';
import linkin from '../../../assets/icon/linkedin.png';
import twitter from '../../../assets/icon/twitter.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export const SocialNetwork = () => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box>
      <Box sx={{ fontWeight: 600, marginBottom: '24px' }}>Find us on</Box>
      {!matches && (
        <a href="https://github.com/defi-vn/">
          <img src={github} alt="github" style={{ marginRight: '30px' }} />
        </a>
      )}
      <a href="https://t.me/DeFiForYou_English">
        <img src={tele} alt="Telegram" style={{ marginRight: '30px' }} />
      </a>

      <a href="https://www.facebook.com/DeFiForYouDFY">
        <img src={fb} alt="Facebook" style={{ marginRight: '30px' }} />
      </a>

      <a href="https://www.youtube.com/channel/UCGaSCU17Zo_2CzJNaBeUHaA/featured">
        <img src={youtube} alt="Youtube" style={{ marginRight: '30px' }} />
      </a>

      <a href="https://www.linkedin.com/company/defiforyou">
        <img src={linkin} alt="LinkedIn" style={{ marginRight: '30px' }} />
      </a>

      <a href="https://twitter.com/Defiforyou">
        <img src={twitter} alt="Twtter" />
      </a>
    </Box>
  );
};
