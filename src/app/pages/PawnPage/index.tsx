import React from 'react';

import HomeAds from 'app/components/HomeAds';
import WhyBorrow from 'app/containers/WhyBorrow';
import Hero from 'app/containers/Hero';
import Pawnshop from 'app/components/Pawnshop/PawnshopContainer';

export default function PawnPage() {
  return (
    <>
      <Hero />
      <WhyBorrow />
      <Pawnshop />
      <HomeAds />
    </>
  );
}
