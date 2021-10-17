import react, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCrypto } from 'app/globalActions';

import LendCryptoResult from '../LendCryptoResult';
import LendNFTResult from '../LendNFTResultPage';
import PawnPage from '../PawnPage';
import { Route, useRouteMatch } from 'react-router';
import BorrowerResultPage from '../BorrowerResultPage';

export function HomePage() {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

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
      <Route exact path={`${path}/offer`}>
        <BorrowerResultPage />
      </Route>
    </>
  );
}
