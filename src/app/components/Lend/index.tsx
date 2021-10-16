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
import SearchIcon from '@mui/icons-material/Search';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Input from 'app/components/Input';
import Dropdown from 'app/components/Dropdown';
import { ButtonColor } from 'app/components/Button';
import DefySelect from 'app/components/DefySelect';
import MultiSelect from 'app/components/MultiSelect';
import selector from './selectors';
import concatQuery from 'app/commons/concatQuery';
import history from 'app/history';

export default function Lend(props) {
  const { control, handleSubmit } = useForm({
    mode: 'all',
  });
  const dispatch = useDispatch();
  const globalState = useSelector(selector);

  const onSubmit: SubmitHandler<any> = data => {
    let query: string;
    console.log(data);
    if (props.collateralRadio === 'crypto') {
      query = concatQuery(data);
      history.push(`pawn/lender${query}`);
    } else {
      const { collateralSymbols, ...newData } = data;
      query = concatQuery(newData);
      history.push(`pawn/lender/nft-result${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              control={control}
            />
          </Grid>
          <Grid item xs={5} sm={4}>
            <Dropdown
              control={control}
              name="loanSymbols"
              list={globalState?.loan}
            />
          </Grid>
          <Grid item xs={7} sm={8}>
            <Input
              label="Duration"
              type="number"
              placeholder="Duration"
              control={control}
            />
          </Grid>
          <Grid item xs={5} sm={4}>
            <DefySelect control={control} name="durationTypes" />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" color="secondary">
              <FormLabel component="legend" sx={{ color: '#FFF' }}>
                Collateral
              </FormLabel>
              <RadioGroup
                row
                name="collateral"
                value={props.collateralRadio}
                onChange={e =>
                  dispatch(props.onCollateralRadioChange(e.target.value))
                }
              >
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
          {props.collateralRadio === 'crypto' && (
            <Grid item xs={12}>
              <MultiSelect
                control={control}
                name="collateralSymbols"
                list={globalState?.collateral}
                rules={{ required: 'Invalid value' }}
              />
            </Grid>
          )}
        </Grid>
        <ButtonColor fullWidth sx={submitBtn} type="submit">
          <SearchIcon /> Search
        </ButtonColor>
      </Box>
    </form>
  );
}

const EndAbor: SxProps<Theme> = {
  width: 'auto',
  padding: '8px 12px',
  borderRadius: '172px',
  mr: -1,
};
const submitBtn: SxProps<Theme> = {
  mt: 5,
};
