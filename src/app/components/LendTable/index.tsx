import * as React from 'react';
import Table from '@mui/material/Table';
import Box from '@mui/system/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ButtonColor } from '../Button/index';
import { TableCellLend, LinkBox, CellSpacing } from './style';
import { datas } from './data';
import star from '../../assets/image/Star 1.png';
import elipblue from '../../assets/image/Ellipse 45.png';
import elipyellow from '../../assets/image/Ellipse 46.png';
import { AdsRow } from './Component/ads';
import { Item } from 'app/pages/LendCryptoResult/slice/types';
import getIconUrl from 'app/commons/getIconUrl';

interface Props {
  list: Item[];
}

export default function LendTable({ list }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          borderCollapse: 'separate',
          borderSpacing: '0 4px',
          backgroundColor: '#171a23',
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: '#1f232d', fontWeight: '600' }}>
            <TableCell>#</TableCell>
            <TableCellLend align="left">Borrower</TableCellLend>
            <TableCellLend align="left">Collateral</TableCellLend>
            <TableCellLend align="left">Loan currency</TableCellLend>
            <TableCellLend align="left">Duration</TableCellLend>
            <TableCellLend align="left"></TableCellLend>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item: Item, index: number) => {
            if (index % 5 === 0 && index % 2 !== 0) {
              return (
                <React.Fragment key={item.id}>
                  <TableRow key="ads" sx={{ borderCollapse: 'separate' }}>
                    <TableCell
                      colSpan={6}
                      sx={{ paddingRight: '0', paddingLeft: '0' }}
                    >
                      <AdsRow />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    key={item.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      backgroundColor: '#282c37',
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">
                      <Box>
                        <LinkBox>{item.walletAddress}</LinkBox>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <img src={star} alt="rate" />
                          <Box sx={{ margin: '0.2rem 1rem 0 0.2rem' }}>
                            {item.reputation}
                          </Box>
                          <span>|</span>
                          <Box sx={{ margin: '0.2rem 1rem 0 ' }}>
                            {item.completedContracts} contracts
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={getIconUrl(item.collateralSymbol)}
                          alt="ellipse"
                        />
                        <Box sx={{ margin: '0 1rem' }}>
                          {item.collateralSymbol} {item.collateralAmount}
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={getIconUrl(item.loanSymbol)} alt="ellipse" />
                        <Box sx={{ margin: '0 1rem' }}>{item.loanSymbol}</Box>
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      {item.durationQty}{' '}
                      {item.durationType === 0 ? 'Weeks' : 'Months'}
                    </TableCell>
                    <TableCell align="left">
                      <ButtonColor sx={{ fontWeight: '600' }}>
                        Send Offer
                      </ButtonColor>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            }
            return (
              <TableRow
                key={item.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: '#282c37',
                }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">
                  <Box>
                    <LinkBox>{item.walletAddress}</LinkBox>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={star} alt="rate" />
                      <Box sx={{ margin: '0.2rem 1rem 0 0.2rem' }}>
                        {item.reputation}
                      </Box>
                      <span>|</span>
                      <Box sx={{ margin: '0.2rem 1rem 0 ' }}>
                        {item.completedContracts} contracts
                      </Box>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={getIconUrl(item.collateralSymbol)}
                      alt="ellipse"
                    />
                    <Box sx={{ margin: '0 1rem' }}>
                      {item.collateralSymbol} {item.collateralAmount}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={getIconUrl(item.loanSymbol)} alt="ellipse" />
                    <Box sx={{ margin: '0 1rem' }}>{item.loanSymbol}</Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  {' '}
                  {item.durationQty}{' '}
                  {item.durationType === 0 ? 'Weeks' : 'Months'}
                </TableCell>
                <TableCell align="left">
                  <ButtonColor sx={{ fontWeight: '600' }}>
                    Send Offer
                  </ButtonColor>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
