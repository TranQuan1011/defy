import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

export const ButtonPagination = styled(Pagination)({
  '& .MuiPagination-ul': {
    justifyContent: 'center',
  },
  '& .Mui-selected': {
    background: '#DBA83D !important',
    color: ' #282C37',
    border: 'none',
  },
});
