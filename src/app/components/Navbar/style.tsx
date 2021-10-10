import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const LinkButton = styled(Link)`
  color: #d1d1d3;
  text-decoration: none;
  margin-left: 36px;
  :hover {
    color: #dba83d;
  }
  :focus {
    color: #dba83d;
  }
`;

export const BoxSideBar = styled(Box)`
  position: absolute;
  top: 70px;
  width: 100%;
  background-color: #232732;
  z-index: 999;
`;
export const BoxButton = styled(Box)`
  color: #d1d1d3;
  text-decoration: none;
  :hover {
    color: #dba83d;
  }
  :focus {
    color: #dba83d;
  }
`;
