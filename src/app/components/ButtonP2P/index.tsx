import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ButtonP2P = styled(Button)`
  border: 1px solid #232732;
  border-radius: 9px;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  background: #232732;
  padding: 15px 33px;
  text-transform: none;
  &:hover{
    background: rgba(219, 168, 61, 0.1);
    border: 1px solid #DBA83D;
    box-sizing: border-box;
    border-radius: 2px;
  }
  @media (max-width: 600px){
    font-size: 12px;
    line-height: 15px;
  }
`;
