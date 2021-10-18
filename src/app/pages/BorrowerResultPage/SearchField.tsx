import React, { useState, useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  initialVal: string;
  nameVal: string;
  onValChange: (tempVal: string) => {
    payload: string;
    type: string;
  };
}

export default function SearchField({
  initialVal,
  onValChange,
  nameVal,
}: Props) {
  const [tempVal, setTempVal] = useState(initialVal);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current = null;
      return;
    }
    const id = setTimeout(() => {
      onValChange(tempVal);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [tempVal, onValChange]);

  useEffect(() => {
    setTempVal(nameVal);
  }, [nameVal]);

  return (
    <TextField
      ref={ref}
      variant="outlined"
      sx={searchField}
      color="secondary"
      placeholder="Search NFT"
      fullWidth
      InputProps={{
        startAdornment: <SearchIcon />,
      }}
      value={tempVal}
      onChange={e => setTempVal(e.target.value)}
    />
  );
}

const searchField = {
  backgroundColor: 'hsla(0, 0%, 100%, .1)',
  borderRadius: '22px',
  '& .MuiOutlinedInput-root': {
    height: '40px',
    borderRadius: '22px',
    '& input': {
      pt: 0,
      pb: 0,
      height: '100%',
      lineHeight: '40px',
    },
  },
  '& fieldset': {
    border: 'none',
  },
};
