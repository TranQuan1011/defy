import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';

export default function CBAccordion(props) {
  return (
    <Accordion sx={root} elevation={0} disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={heading}>{props.header}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={detail}>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            {props.labels.map(item => (
              <FormControlLabel
                control={<Checkbox name={item} color="secondary" />}
                label={item}
              />
            ))}
          </FormGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
}

const root = {
  background: '#282C37',
  '& .MuiButtonBase-root': {
    pl: 1.5,
    pr: 1.5,
  },
  maxHeight: '176px',
  overflow: 'scroll',
  '&::before': {
    backgroundColor: '#45484F',
    height: '2px',
  },
};

const detail = {
  pl: 1.5,
  pr: 1.5,
};

const heading = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
};
