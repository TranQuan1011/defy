import { Box } from '@mui/system';
import { TextBox, LinkBoxYellow } from '../style';
import vn from '../../../assets/icon/flag.vn.png';
import england from '../../../assets/icon/image 2.png';
import { useTranslation } from 'react-i18next';

export const ContactVietNam = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box sx={{ fontWeight: 600, marginBottom: '20px' }}>
        {t('footer.office.haNoi')}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          lineHeight: '2',
        }}
      >
        <LinkBoxYellow sx={{ margin: '0 1rem 0 0' }}>
          +84 9643 66605
        </LinkBoxYellow>
        <Box>
          <img src={vn} alt="global" />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          lineHeight: '2',
        }}
      >
        <LinkBoxYellow sx={{ margin: '0 1rem 0 0' }}>
          +84 9644 41735
        </LinkBoxYellow>
        <Box sx={{ marginLeft: '3px' }}>
          <img src={england} alt="global" />
        </Box>
      </Box>
      <TextBox>
        BT NQ 25-15 Vinhomes Riverside, Long Bien, Hanoi, Vietnam
      </TextBox>
    </Box>
  );
};
