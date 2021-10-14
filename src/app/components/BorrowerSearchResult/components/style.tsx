import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import { Button } from '@mui/material';

export const TypoBlue = styled(Typography)`
  text-decoration: underline;
  color: #2596ff;
  :hover {
    cursor: pointer;
  }
`;

export const TypoGreen = styled(Typography)`
  color: #3fd762;
`;

export const OrangeState = styled(Box)`
  width: 100px;
  height: 26px;
  border-radius: #fe951a;
  background: rgba(254, 149, 26, 0.2);
  border: 1px solid #fe951a;
  text-align: center;
  font-size: 14px;
  border-radius: 13.5px;
  color: #fe951a;
  font-weight: 600;
`;

export const BlueState = styled(Box)`
  width: 100px;
  height: 26px;
  border-radius: #2596ff;
  background: rgba(37, 150, 255, 0.2);
  border: 1px solid #2596ff;
  text-align: center;
  font-size: 14px;
  color: #2596ff;
  font-weight: 600;
  border-radius: 13.5px;
`;

export const RedState = styled(Box)`
  width: 100px;
  height: 26px;
  border-radius: #ff4848;
  background: rgba(255, 72, 72, 0.2);
  border: 1px solid #ff4848;
  text-align: center;
  font-size: 14px;
  color: #ff4848;
  font-weight: 600;
  border-radius: 13.5px;
`;

export const ButtonHigh = styled(Button)`
  text-transform: none;
  color: #ffffff;
  height: 50px;
  width: 20%;
  border-radius: 9px;
  background-color: #282c37;
  :hover {
    background-color: rgba(219, 168, 61, 0.1);
    border: 1px solid #dba83d;
  }
`;
export const ButtonLow = styled(Button)`
  text-transform: none;
  color: #ffffff;
  height: 50px;
  width: 20%;
  border-radius: 9px;
  background-color: #232732;
  :hover {
    background-color: rgba(219, 168, 61, 0.1);
    border: 1px solid #dba83d;
  }
`;
