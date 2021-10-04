import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import theme from 'app/themes/dark';
import { ChildrenProp } from 'app/commons/types';

export default function GlobalTheme(props: ChildrenProp): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
