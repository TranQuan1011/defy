import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeAds from 'app/components/HomeAds/index';
import ButtonMenuResults from 'app/components/ButtonResults/index';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
      <HomeAds />
      <ButtonMenuResults/>
    </>
  );
}
