import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import LendCryptoResult from '../LendCryptoResult';
import LendNFTResult from '../LendNFTResultPage';
import PawnPage from '../PawnPage';
import { Route, useRouteMatch } from 'react-router';

export function HomePage() {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={path}>
        <PawnPage />
      </Route>
      <Route exact path={`${path}/lender`}>
        <LendCryptoResult />
      </Route>
      <Route exact path={`${path}/lender/nft-result`}>
        <LendNFTResult />
      </Route>
    </>
  );
}
