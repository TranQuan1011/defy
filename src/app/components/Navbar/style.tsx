import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const LinkButton = styled(Link)`
  color: #d1d1d3;
  text-decoration: none;
  :hover {
    color: #dba83d;
  }
  :focus {
    color: #dba83d;
  }
`;
