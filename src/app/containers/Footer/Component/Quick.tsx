import { Box } from '@mui/system';
import { LinkBox } from '../style';
import arrow from '../../../assets/icon/Arrow 3.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

export const Quick = () => {
  const { t } = useTranslation();
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box sx={{ marginTop: matches ? '40px' : '110px' }}>
      <Box sx={{ fontWeight: 600, marginBottom: '24px' }}>{t('footer.quickNav.title')}</Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          lineHeight: '2',
        }}
      ></Box>
      <LinkBox sx={{ marginBottom: '5px', marginTop: '5px' }}>
        {t('footer.quickNav.whitepaper')}
        <img src={arrow} alt="arrow" />
      </LinkBox>
      <LinkBox sx={{ marginBottom: '6px', marginTop: '5px' }}>
        {t('footer.quickNav.mobile')}
        <img src={arrow} alt="arrow" />
      </LinkBox>
    </Box>
  );
};
