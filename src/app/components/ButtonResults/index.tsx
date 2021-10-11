import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import filterIcon from 'app/assets/icon/filterIcon.png';

const FilterButton = props => {
  return (
    <StyledButton variant="outlined" color="secondary" sx={props.sx}>
      <Img src={filterIcon} />
    </StyledButton>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  width: '30px !important',
  height: '30px',
  minWidth: 0,
  padding: '6px',
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const Img = styled('img')({
  height: '100%',
});

export default FilterButton;
