import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Input from 'app/components/Input';
import Dropdown from 'app/components/Dropdown';
import { ButtonColor } from 'app/components/Button';
import DefySelect from 'app/components/DefySelect';
import MultiSelect from 'app/components/MultiSelect';

export default function Lend() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme => theme.palette.background.default,
        borderRadius: ' 20px',
        padding: { xs: '16px 12px', sm: '24px 30px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        alignItems="flex-end"
        columnSpacing={1}
        rowSpacing={2}
        mb={1}
      >
        <Grid item xs={7} sm={8}>
          <Input
            label="Loan amount"
            type="number"
            placeholder="Enter amount"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ButtonColor sx={EndAbor}>Max</ButtonColor>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={5} sm={4}>
          <Dropdown />
        </Grid>
        <Grid item xs={7} sm={8}>
          <Input label="Duration" type="number" placeholder="Duration" />
        </Grid>
        <Grid item xs={5} sm={4}>
          <DefySelect />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" color="secondary">
            <FormLabel component="legend" sx={{ color: '#FFF' }}>
              Collateral
            </FormLabel>
            <RadioGroup row name="collateral">
              <FormControlLabel
                value="crypto"
                control={<Radio color="secondary" />}
                label="Crypto"
              />
              <FormControlLabel
                value="nft"
                control={<Radio color="secondary" />}
                label="NFT"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <MultiSelect />
        </Grid>
      </Grid>
    </Box>
  );
}

const EndAbor: SxProps<Theme> = {
  width: 'auto',
  padding: '8px 12px',
  borderRadius: '172px',
  mr: -1,
};
