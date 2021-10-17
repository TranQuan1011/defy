import React, { useRef, useEffect  } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ButtonMenuResults from 'app/components/ButtonResults';
import LendCard from 'app/components/LendCard';
import { ButtonPagination } from 'app/components/Pagination';
import FilterSidebar from 'app/components/FilterSidebar';
import Filter from 'app/components/Filter';
import CBAccordion from 'app/components/CBAccordion';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLendNFTPageSlice } from './slice';
import { useSelector } from 'react-redux';
import selector from './slice/selectors';
import { useDispatch } from 'react-redux';
import Chip from '@mui/material/Chip';
import { useLocation, Link } from 'react-router-dom';
import history from 'app/history';
import PaginationItem from '@mui/material/PaginationItem';
import getParamsValue from 'app/commons/getParamValue';
import initFilter from 'app/commons/initFilter';
import Avatar from '@mui/material/Avatar';
import getIconUrl from 'app/commons/getIconUrl';
// import { DataLendNFT } from 'app/apis/lendNft';

const paramsArr = [
  'page',
  'size',
  'collateralSymbols',
  'loanSymbols',
  'durationTypes',
];

export default function LendNFTResult(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const { actions, sagaActions } = useLendNFTPageSlice();
  const { isFilterbarOpen, filterOption, list, collateral, loan } = useSelector(selector);
  // const { LendNFTPageState } = useSelector(selector);
  const { search, pathname } = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    const params = {};
    paramsArr.forEach(item => {
      const value = getParamsValue(search, item);
      if (value) {
        const newValue = !isNaN(+value) ? +value : value;
        params[item] = newValue;
      }
    });
    dispatch(sagaActions.fetchListReq(params));
    if (ref.current) {
      const filterOption = initFilter(params);
      dispatch(actions.setFilterOption(filterOption));
    }
  }, [search, dispatch, sagaActions, actions]);

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current = null;
  //     return;
  //   }
  //   const { collateral, loan, duration } = filterOption;
  //   const collateralSymbols = Object.keys(collateral)
  //     .filter(item => collateral[item])
  //     .join(',');
  //   const loanSymbols = Object.keys(loan)
  //     .filter(item => loan[item])
  //     .join(',');
  //   let durationTypes: string | string[] = Object.keys(duration).filter(
  //     item => duration[item],
  //   );
  //   if (durationTypes.length === 1) {
  //     durationTypes = durationTypes[0] === 'Weeks' ? '0' : '1';
  //   } else {
  //     durationTypes = '';
  //   }
  //   const url = `collateralSymbols=${collateralSymbols}&loanSymbols=${loanSymbols}&durationTypes=${durationTypes}`;
  //   history.push(`/pawn/lender?${url}`);
  // }, [filterOption]);

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
            {/* {props.LendNFTPageState?.total_elements}  */}
            {list.total_elements} collateral offers match your search
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="20px">
            {/* {props.LendNFTPageState?.map((item, index) => (
              <LendCard key={index} item={item} />
            ))} */}
            {/* {list?.map(() => {
              <LendCard list={list.content} />
            })} */}
            <LendCard list={list.content} />
            {/* {DataLendNFT.map((item, index) => (
              <LendCard key={index} item={item} />
            ))} */}
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
          <ButtonMenuResults sx={{ ml: 'auto' }} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Filter onReset={() => dispatch(actions.resetFilter())}>
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
