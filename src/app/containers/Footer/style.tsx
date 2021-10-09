import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export const TextBox = styled(Box)`
  color: #8894a5;
  font-size: 14px;
`;
export const LinkBox = styled(Box)`
  color: #8894a5;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #c2c2c2;
  }
  margin: 0 1rem;
`;
export const LinkBoxYellow = styled(Box)`
  color: #dba83d;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #ddc38c;
  }
  margin: 0 1rem;
`;
export const LinkImg = styled(Link)``;

export const SocialBox = styled(Box)``;
