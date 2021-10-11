import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Pawnshop from 'app/components/Pawnshop/PawnshopContainer';
import HomeAds from 'app/components/HomeAds/index';
import WhyBorrow from 'app/containers/WhyBorrow/index';
import Hero from 'app/containers/Hero/index';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>DeFi For You. </title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Hero />
      <WhyBorrow />
      <Pawnshop />
      <HomeAds />
    </>
  );
}
