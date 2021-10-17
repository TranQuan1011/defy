import React from 'react';
import Grid from '@mui/material/Grid';
import { SxProps, styled } from '@mui/system';
import { Theme, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import Input from 'app/components/Input';
import Dropdown from 'app/components/Dropdown';
import { ButtonColor, ButtonNoColor } from 'app/components/Button';
import DefySelect from 'app/components/DefySelect';
import selector from './selector';
import concatQuery from 'app/commons/concatQuery';
import history from 'app/history';

export default function Cryps() {
  const { control, handleSubmit } = useForm({
    mode: 'all',
  });
  const globalState = useSelector(selector);

  const onSubmit: SubmitHandler<any> = data => {
    const query = concatQuery(data);
    history.push(`/pawn/offer${query}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        alignItems="flex-end"
        columnSpacing={1}
        rowSpacing={2}
        mb={1}
      >
        <Grid item xs={7} sm={8}>
          <Input
            label="Collateral"
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
            name="collateralSymbols"
            list={globalState?.collateral}
          />
        </Grid>
        <Grid item xs={7} sm={8}>
          <Typography
            component="label"
            sx={{
              display: 'block',
              fontSize: '1rem',
              fontWeight: 500,
            }}
          >
            Or
          </Typography>
          <ButtonNoColor
            sx={{
              width: 'auto',
              height: '40px',
              pl: { sm: 2.5 },
              pr: { sm: 2.5 },
            }}
          >
            Choose Existing Collateral
          </ButtonNoColor>
        </Grid>
        <Grid item xs={5} sm={4}></Grid>
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
        <Grid item xs={7} sm={8}>
          <Input
            label="Loan Amount"
            type="number"
            placeholder="Enter Amount"
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
      </Grid>
      <Typography variant="body2">
        Recommended amount <InfoIcon fontSize="inherit" />
      </Typography>
      <ButtonColor fullWidth sx={submitBtn} type="submit">
        <SearchIcon /> Search
      </ButtonColor>
    </StyledForm>
  );
}

const StyledForm = styled('form')({
  width: '100%',
});

const EndAbor: SxProps<Theme> = {
  width: 'auto',
  padding: '8px 12px',
  borderRadius: '172px',
  mr: -1,
};

const submitBtn: SxProps<Theme> = {
  mt: 5,
  mb: 3,
};
