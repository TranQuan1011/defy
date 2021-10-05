import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { CustomButton, BackgroundButton } from 'app/components/Button/index';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
      <CustomButton>Button</CustomButton>
      <BackgroundButton>Background</BackgroundButton>
    </>
  );
}
