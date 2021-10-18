import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ButtonPagination } from 'app/components/Pagination';
import FilterSidebar from 'app/components/FilterSidebar';
import Filter from 'app/components/Filter';
import CBAccordion from 'app/components/CBAccordion';
import { Avatar, Chip, PaginationItem, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LendTable from 'app/components/LendTable/index';
import { BorrowerSearchResult } from 'app/components/BorrowerSearchResult';
import { useDispatch, useSelector } from 'react-redux';
import { useBorrowerResultPageSlice } from './slice';
import selector from './slice/selectors';
import { useHistory, useLocation } from 'react-router';
import getParamsValue from 'app/commons/getParamValue';
import initFilter from 'app/commons/initFilter';
import getIconUrl from 'app/commons/getIconUrl';
import { Link } from 'react-router-dom';
import SearchField from './SearchField';
import ButtonMenuResults from 'app/components/ButtonResults';

const paramsArr = [
  'page',
  'size',
  'collateralSymbols',
  'loanSymbols',
  'loanType',
  'durationTypes',
];

export default function BorrowerResultPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { actions, sagaActions } = useBorrowerResultPageSlice();
  const { isFilterbarOpen, filterOption, list, card, collateral, loan } =
    useSelector(selector);
  const { search, pathname } = useLocation();
  const ref = useRef(null);

  React.useEffect(() => {
    const params = {};
    paramsArr.forEach(item => {
      const value = getParamsValue(search, item);
      if (value) {
        const newValue = !isNaN(+value) ? +value : value;
        params[item] = newValue;
      }
    });
    dispatch(sagaActions.fetchListReq());
    dispatch(sagaActions.fetchCardReq());
  }, [search, dispatch, sagaActions, actions]);

  React.useEffect(() => {
    if (ref.current) {
      ref.current = null;
      return;
    }
    const { collateral, loan, loanType, duration } = filterOption;
    const loanTypes = Object.keys(loanType)
      .filter(item => loanType[item])
      .join(',');
    const collateralSymbols = Object.keys(collateral)
      .filter(item => collateral[item])
      .join(',');
    const loanSymbols = Object.keys(loan)
      .filter(item => loan[item])
      .join(',');
    let durationTypes: string | string[] = Object.keys(duration).filter(
      item => duration[item],
    );
    if (durationTypes.length === 1) {
      durationTypes = durationTypes[0] === 'Weeks' ? '0' : '1';
    } else {
      durationTypes = '';
    }
    const url = `collateralSymbols=${collateralSymbols}&loanSymbols=${loanSymbols}&durationTypes=${durationTypes}&loanType=${loanTypes}`;
    history.push(`/pawn/offer?${url}`);
  }, [filterOption]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container maxWidth="lg" component="main" sx={root}>
      {matches && (
        <FilterSidebar
          open={isFilterbarOpen}
          onOpen={actions.openFilterbar}
          onClose={actions.closeFilterbar}
        >
          <Filter
            displayClose
            onReset={() => dispatch(actions.resetFilter())}
            onClose={actions.closeFilterbar}
          >
            <Box pt={2} pl={1.5} pr={1.5}>
              {/* <SearchField
                onValChange={(tempVal: string) =>
                  dispatch(actions.updateName(tempVal))
                }
                initialVal={getParamsValue(search, 'name') || ''}
                nameVal={filterOption.name}
              /> */}
            </Box>
            <CBAccordion
              header="Collateral"
              labels={collateral}
              label={(item: string) => (
                <Chip
                  avatar={<Avatar src={getIconUrl(item)} />}
                  label={item}
                  variant="outlined"
                  sx={{ border: 'none' }}
                />
              )}
              name="collateral"
              filterOption={filterOption}
              onChange={item => dispatch(actions.updateCollateral(item))}
            />
            <CBAccordion
              header="Loan currency"
              labels={loan}
              label={(item: string) => (
                <Chip
                  avatar={<Avatar src={getIconUrl(item)} />}
                  label={item}
                  variant="outlined"
                  sx={{ border: 'none' }}
                />
              )}
              name="loan"
              filterOption={filterOption}
              onChange={item => dispatch(actions.updateLoan(item))}
            />
            <CBAccordion
              header="Loan Type"
              labels={['Auto', 'Semi-Auto', 'Negotiation']}
              name="loanType"
              filterOption={filterOption}
              onChange={item => dispatch(actions.updateLoanType(item))}
            />
            <CBAccordion
              header="Duration"
              labels={['Weeks', 'Month']}
              name="duration"
              filterOption={filterOption}
              onChange={item => dispatch(actions.updateDuration(item))}
            />
          </Filter>
        </FilterSidebar>
      )}
      <Grid container rowSpacing={1.5} columnSpacing={5.375}>
        <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }}>
          <Typography variant="h6" sx={resultTypo}>
            {list.total_elements} collateral offers match your search
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="20px">
            {list ? (
              <BorrowerSearchResult data={list.content} card={card.content} />
            ) : null}
          </Box>
          <ButtonPagination
            count={list.total_pages}
            page={
              !getParamsValue(search, 'page')
                ? 1
                : parseInt(getParamsValue(search, 'page') as string) + 1
            }
            renderItem={item => (
              <PaginationItem
                component={Link}
                to={`${pathname}${search.replace(/&page=\d?/, '')}&page=${
                  item.page - 1
                }`}
                {...item}
              />
            )}
            variant="outlined"
            shape="rounded"
            sx={{ mt: { xs: 2, md: 6 } }}
          />
        </Grid>
        <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
          <ButtonMenuResults
            sx={{ ml: 'auto' }}
            onClick={() => dispatch(actions.openFilterbar())}
          />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Filter onReset={() => dispatch(actions.resetFilter())}>
              <Box pt={2} pl={1.5} pr={1.5}>
                {/* <SearchField
                  onValChange={(tempVal: string) =>
                    dispatch(actions.updateName(tempVal))
                  }
                  initialVal={getParamsValue(search, 'name') || ''}
                  nameVal={filterOption.name}
                /> */}
              </Box>
              <CBAccordion
                header="Collateral"
                labels={collateral}
                label={(item: string) => (
                  <Chip
                    avatar={<Avatar src={getIconUrl(item)} />}
                    label={item}
                    variant="outlined"
                    sx={{ border: 'none' }}
                  />
                )}
                name="collateral"
                filterOption={filterOption}
                onChange={item => dispatch(actions.updateCollateral(item))}
              />
              <CBAccordion
                header="Loan currency"
                labels={loan}
                label={(item: string) => (
                  <Chip
                    avatar={<Avatar src={getIconUrl(item)} />}
                    label={item}
                    variant="outlined"
                    sx={{ border: 'none' }}
                  />
                )}
                name="loan"
                filterOption={filterOption}
                onChange={item => dispatch(actions.updateLoan(item))}
              />
              <CBAccordion
                header="Loan Type"
                labels={['Auto', 'Semi-Auto', 'Negotiation']}
                name="loanType"
                filterOption={filterOption}
                onChange={item => dispatch(actions.updateLoanType(item))}
              />
              <CBAccordion
                header="Duration"
                labels={['Weeks', 'Month']}
                name="duration"
                filterOption={filterOption}
                onChange={item => dispatch(actions.updateDuration(item))}
              />
            </Filter>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const root = {
  width: '100%',
  pt: {
    xs: 3,
    md: 3.75,
  },
  pb: {
    xs: 3,
  },
};

const resultTypo = {
  fontSize: {
    xs: '16px',
    md: '20px',
  },
  color: ' #D1D1D3',
  mb: {
    xs: 3,
  },
};
