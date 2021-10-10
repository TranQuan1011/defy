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
import Divider from '@mui/material/Divider';

export default function CBAccordion(props) {
  return (
    <>
      <Accordion sx={root} elevation={0} disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={heading}>{props.header}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={detail}>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              {props.labels.map((item, index) => (
                <FormControlLabel
                  control={<Checkbox name={item} color="secondary" />}
                  label={item}
                  key={index}
                />
              ))}
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </>
  );
}

const root = {
  background: '#282C37',
  width: '100%',
  '& .MuiButtonBase-root': {
    pl: 1.5,
    pr: 1.5,
  },
  '&::before': {
    backgroundColor: '#45484F',
    display: 'none',
  },
};

const detail = {
  maxHeight: '176px',
  overflow: 'scroll',
  overflowX: 'hidden',
  pl: 1.5,
  mr: 2.2,
  pt: 0,
} as const;

const heading = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
};
