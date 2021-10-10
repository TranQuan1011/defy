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
import { TableCellLend, LinkBox } from './style';
import { datas } from './data';
import star from '../../assets/image/Star 1.png';
import elipblue from '../../assets/image/Ellipse 45.png';
import elipyellow from '../../assets/image/Ellipse 46.png';

function createData(
  id: number,
  name: string,
  collection: number,
  contract: number,
  collateral: number,
  loan: string,
  duration: number,
) {
  return { id, name, collection, contract, collateral, loan, duration };
}

const rows = datas.map(data =>
  createData(
    data.data.id,
    data.data.borrow.name,
    data.data.borrow.collection,
    data.data.borrow.contracts,
    data.data.collateral,
    data.data.loan,
    data.data.duration,
  ),
);

export default function LendTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#282C37', fontWeight: '600' }}>
            <TableCell>#</TableCell>
            <TableCellLend align="left">Borrower</TableCellLend>
            <TableCellLend align="left">Collateral</TableCellLend>
            <TableCellLend align="left">Loan currency</TableCellLend>
            <TableCellLend align="left">Duration</TableCellLend>
            <TableCellLend align="left"></TableCellLend>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">
                <Box>
                  <LinkBox>{row.name}</LinkBox>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={star} alt="rate" />
                    <Box sx={{ margin: '0.2rem 1rem 0 0.2rem' }}>
                      {row.collection}
                    </Box>
                    <span>|</span>
                    <Box sx={{ margin: '0.2rem 1rem 0 ' }}>{row.contract}</Box>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={elipblue} alt="ellipse" />
                  <Box sx={{ margin: '0 1rem' }}>{row.collateral}</Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={elipyellow} alt="ellipse" />
                  <Box sx={{ margin: '0 1rem' }}>{row.loan}</Box>
                </Box>
              </TableCell>
              <TableCell align="left">{row.duration}</TableCell>
              <TableCell align="left">
                <ButtonColor sx={{ fontWeight: '600' }}>Send Offer</ButtonColor>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
