import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
export const ButtonNoColor = styled(Button)`
  height: 36px;
  border: 1px solid #dba83d;
  border-radius: 25px;
  color: #dba83d;
  font-size: 14px;
  font-weight: 500;
  background: none;
  text-transform: none;
  line-height: 14px;
`;

export const ButtonColor = styled(Button)`
  height: 36px;
  border: 1px solid #dba83d;
  border-radius: 25px;
  color: #282c37;
  font-size: 14px;
  font-weight: 500;
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );
  padding: 9px 20px 9px 20px;
  text-transform: none;
`;
