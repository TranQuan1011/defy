import { Box } from '@mui/system';
import { LinkBox, LinkImg, LinkBoxYellow } from '../style';
import logo from '../../../assets/image/defi-logo.png';
import global from '../../../assets/icon/globe.png';
import arrow from '../../../assets/icon/Arrow 3.png';
import mail from '../../../assets/icon/mail.png';
const Contact = () => {
  return (
    <Box>
      <LinkImg to="/">
        <img src={logo} alt="logo" />
      </LinkImg>
      <Box sx={{ display: 'flex', alignItems: 'center', lineHeight: '2.5' }}>
        <LinkBox sx={{ margin: '0' }}>
          <img src={global} alt="global" />
        </LinkBox>
        <LinkBox>English (United States)</LinkBox>
        <LinkBox>
          <img src={arrow} alt="arrow" />
        </LinkBox>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', lineHeight: '2.5' }}>
        <LinkBox sx={{ margin: '0' }}>
          <img src={mail} alt="global" />
        </LinkBox>
        <LinkBoxYellow>ask@defiforyou.uk</LinkBoxYellow>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', lineHeight: '2.5' }}>
        <LinkBox sx={{ margin: '0' }}>
          <img src={mail} alt="global" />
        </LinkBox>
        <LinkBoxYellow>support@defiforyou.uk</LinkBoxYellow>
      </Box>
    </Box>
  );
};
export default Contact;
