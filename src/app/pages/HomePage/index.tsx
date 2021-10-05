import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import Input from 'app/components/Input/index';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>

      <Input/>
    </>
  );
}
