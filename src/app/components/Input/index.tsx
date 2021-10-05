// import { styled } from '@mui/material/styles';
// import { InputBase } from '@mui/material';

// export const Label = styled(InputBase)`
//   position: absolute;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 17px;
//   color: #FFFFFF;
// `;

// export const FormInput = styled(InputBase)`
//   position: absolute;
//   font-style: normal;
//   width: 584px;
//   height: 44px;
//   margin-top: 27px;
//   padding-left: 15px;
//   border: 1px solid #74767B;
//   box-sizing: border-box;
//   border-radius: 22px;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 20px;
//   color: #FFFFFF;
//   background: none;
// `;

import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const data = [
  {
      type: "inputText",
      name: "name",
      label: "Name",
      placeholder :"Name",
      required: true
  }
]

export default function Input() {
  return (
    <div>
      {data.map(item => (
        <div>
          <Typography
            position = 'absolute'
            font-style = 'normal'
            font-weigh = '500'
            font-size = '14px'
            line-height = '17px'
            color = '#fdfdfd'
          >
            {item.label}
          </Typography>
          <div>
            <TextField 
              sx={{
                position: 'absolute',
                fontStyle: 'normal',
                width: '584px',
                height: '44px',
                paddingLeft: '15px',
                border: '1px solid #74767B',
                borderRadius: '22px',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '20px',
                color: 'white',
                marginTop: '27px',
              }}
              type={item.type} 
              placeholder={item.placeholder} 
            />
          </div>
        </div>
      ))}
    </div>
  );
}