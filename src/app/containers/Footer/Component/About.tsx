import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TextBox } from '../style';
import { Box } from '@mui/system';
export const About = () => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box sx={{ marginTop: matches ? '30px' : '56px' }}>
      <Box sx={{ fontWeight: 600, marginBottom: '24px' }}>
        About DeFi For You.
      </Box>
      <TextBox sx={{ marginBottom: '4px', marginTop: '4px' }}>
        <span style={{ fontWeight: 600, color: '#dba83d' }}>DeFi For You</span>{' '}
        is a trading style of Miles Mann Limited registered office at 5
        Southgate Street, Gloucester, Gloucestershire, GL1 1TG1 Licensed
        authorised and regulated by the Financial Conduct Authority to exercise
        lender's rights and duties under a regulated credit agreement (excluding
        high-cost short-term credit, bill of sale agreement, and home collected
        credit agreement), and has the right to exercise lender's rights and
        duties under a regulated credit agreement (excluding high-cost
        short-term credit, bill of sale agreement, and home collected credit
        agreement)
      </TextBox>
    </Box>
  );
};
