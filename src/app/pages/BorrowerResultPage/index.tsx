import React from 'react';
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
import LendTable from 'app/components/LendTable/index';
import { BorrowerSearchResult } from 'app/components/BorrowerSearchResult';
import axios from 'axios';
import fetchBorrowrResult from 'app/apis/pawnshopSearch';

const testData = [1, 2, 3, 4, 5, 6].map(item => `${item}`);
export default function BorrowerResultPage() {
  const [data, setData] = React.useState<any>();
  React.useEffect(() => {
    fetchBorrowrResult()
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(res => console.log(res));
  }, []);
  // if (data) {
  //   console.log(data.data.content);
  // } else {
  //   console.log('null');
  // }
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
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
            10 collateral offers match your search
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="20px">
            {data ? <BorrowerSearchResult data={data} /> : null}
          </Box>
          <ButtonPagination
            count={data ? data.data.total_pages : null}
            variant="outlined"
            shape="rounded"
            sx={{ mt: { xs: 2, md: 6 } }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
          <ButtonMenuResults sx={{ ml: 'auto' }} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Filter>
              <CBAccordion header="test" labels={testData} />
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
