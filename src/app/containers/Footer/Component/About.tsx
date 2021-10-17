import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TextBox } from '../style';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box sx={{ marginTop: matches ? '30px' : '56px' }}>
      <Box sx={{ fontWeight: 600, marginBottom: '24px' }}>
        {t('footer.about.title')}
      </Box>
      <TextBox sx={{ marginBottom: '4px', marginTop: '4px' }}>
        <span style={{ fontWeight: 600, color: '#dba83d' }}>DeFi For You</span>{' '}
          {t('footer.about.content')}
      </TextBox>
    </Box>
  );
};
