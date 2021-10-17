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
// import { DataLendNFT } from 'app/apis/lendNft';


export default function LendNFTResult(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const { actions, sagaActions } = useLendNFTPageSlice();
  const { lendNftPageState } = useSelector(selector);
  const { search, pathname } = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    const params = {};
    dispatch(sagaActions.fetchListReq(params));
  }, [search, dispatch, sagaActions, actions]);

  return (
    <Container maxWidth="lg" component="main" sx={root}>
      {/* {matches && (
        <FilterSidebar>
          <Filter displayClose>
            <CBAccordion header="test" labels={testData} />
          </Filter>
        </FilterSidebar>
      )} */}
      <Grid container rowSpacing={1.5} columnSpacing={5.375}>
        <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }}>
          <Typography variant="h6" sx={resultTypo}>
            {props.lendNftPageState?.total_elements} 
            collateral offers match your search
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="20px">
            {props.lendNftPageState?.map((item, index) => (
              <LendCard key={index} item={item} />
            ))}
            {/* {DataLendNFT.map((item, index) => (
              <LendCard key={index} item={item} />
            ))} */}
          </Box>
          <ButtonPagination
            count={10}
            variant="outlined"
            shape="rounded"
            sx={{ mt: { xs: 2, md: 6 } }}
          />
        </Grid>
        <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
          <ButtonMenuResults sx={{ ml: 'auto' }} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {/* <Filter>
              <CBAccordion header="test" labels={testData} />
            </Filter> */}
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
