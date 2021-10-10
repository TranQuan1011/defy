import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

export default function Page() {
  return (
    <Box sx={box}>
      <Pagination count={10} sx={page} shape="rounded" variant="outlined"/>
    </Box>
  );
};

const box: SxProps<Theme> = {
  maxWidth: '600px',
  margin: '0 auto',
  '@media (max-width: 600px)': {
    display: 'none',
  },
}
const page: SxProps<Theme> = {
  '& .Mui-selected': {
    '& :hover': {
      backgroundColor: '#DBA83D',
    }
  },
}
