import React, { useEffect, useRef } from 'react';
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
import { useMediaQuery, Chip, Avatar, PaginationItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useLendNFTPageSlice } from './slice';
import selector from './slice/selectors';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import getParamsValue from 'app/commons/getParamValue';
import getIconUrl from 'app/commons/getIconUrl';
import history from 'app/history';
import SearchField from './SearchField';
import initFilter from 'app/commons/initLendNFTFilter';

const paramsArr = [
  'page',
  'size',
  'loanSymbol',
  'nftType',
  'durationType',
  'name',
];

export default function LendNFTResult() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const { actions, sagaActions } = useLendNFTPageSlice();
  const { isFilterbarOpen, filterOption, list, loan } = useSelector(selector);
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

  useEffect(() => {
    if (ref.current) {
      ref.current = null;
      return;
    }
    const { nftType: nft, loan, duration, name } = filterOption;
    const nftType = Object.keys(nft)
      .filter(item => nft[item])
      .map(item => (item === 'Haft NFT' ? 0 : 1))
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
    const url = `nftType=${nftType}&loanSymbol=${loanSymbols}&durationType=${durationTypes}&name=${name}`;
    history.push(`/pawn/lender/nft-result?${url}`);
  }, [filterOption]);

  return (
    <Container maxWidth="lg" component="main" sx={root} ref={ref}>
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
              <SearchField
                onValChange={(tempVal: string) =>
                  dispatch(actions.updateName(tempVal))
                }
                initialVal={getParamsValue(search, 'name') || ''}
                nameVal={filterOption.name}
              />
            </Box>
            <CBAccordion
              header="Duration"
              labels={['Weeks', 'Month']}
              name="duration"
              filterOption={filterOption}
              onChange={item => dispatch(actions.updateDuration(item))}
            />
            <CBAccordion
              header="NFT type"
              labels={['Haft NFT', 'Soft NFT']}
              name="nftType"
              filterOption={filterOption}
              onChange={item => dispatch(actions.updateNFTTypes(item))}
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
          </Filter>
        </FilterSidebar>
      )}
      <Grid container rowSpacing={1.5} columnSpacing={5.375}>
        <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }}>
          <Typography variant="h6" sx={resultTypo}>
            {list.total_elements} collateral offers match your search
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="20px">
            {list.content.map(item => (
              <LendCard key={item.id} data={item} />
            ))}
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
                <SearchField
                  onValChange={(tempVal: string) =>
                    dispatch(actions.updateName(tempVal))
                  }
                  initialVal={getParamsValue(search, 'name') || ''}
                  nameVal={filterOption.name}
                />
              </Box>
              <CBAccordion
                header="Duration"
                labels={['Weeks', 'Month']}
                name="duration"
                filterOption={filterOption}
                onChange={item => dispatch(actions.updateDuration(item))}
              />
              <CBAccordion
                header="NFT type"
                labels={['Haft NFT', 'Soft NFT']}
                name="nftType"
                filterOption={filterOption}
                onChange={item => dispatch(actions.updateNFTTypes(item))}
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
