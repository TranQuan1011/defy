import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export const TextBox = styled(Box)`
  color: #8894a5;
  font-size: 14px;
`;
export const LinkBox = styled(Link)`
  color: #8894a5;
  font-size: 14px;
  text-decoration: none;
  :hover {
    color: #c2c2c2;
  }
  margin: 0 1rem;
`;
