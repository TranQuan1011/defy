import { ButtonHigh, ButtonLow } from './style';
import { Box } from '@mui/system';

import ButtonGroup from '@mui/material/ButtonGroup';

export const MenuFilter = () => {
  return (
    <Box sx={{ width: '100%', marginBottom: '20px' }}>
      <ButtonLow>Interest rate</ButtonLow>
      <ButtonHigh>Loan to value</ButtonHigh>
      <ButtonLow>Duration</ButtonLow>
      <ButtonHigh>Limitation</ButtonHigh>
      <ButtonLow>Pawnshop rating</ButtonLow>
    </Box>
  );
};
