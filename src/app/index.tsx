/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Router, Redirect } from 'react-router-dom';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import { useTranslation } from 'react-i18next';
import { useInjectSaga, useInjectReducer } from 'utils/redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReq } from './globalActions';

import globaSelector from './globalSelector';
import globalSaga from './globalSagas';
import { globalReducer } from 'app/globalReducers';
import GlobalTheme from './containers/ThemeProvider';
import NavBar from './components/Navbar/index';
import AuthPage from './pages/AuthPage';
import { Footer } from './containers/Footer/index';
import BorrowerADS from './components/BorrowerADS';
import history from './history';

export function App() {
  const { i18n } = useTranslation();
  useInjectReducer({
    key: 'globalReducer',
    reducer: globalReducer,
  });
  useInjectSaga({
    key: 'globalSaga',
    saga: globalSaga,
  });
  const dispatch = useDispatch();
  const globalState = useSelector(globaSelector);

  React.useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      dispatch(fetchUserReq(token));
    }
  }, [dispatch]);
  return (
    <GlobalTheme>
      <Router history={history}>
        <Helmet
          titleTemplate="%s  | DeFi For You UK"
          defaultTitle="DeFi For You. | DeFi For You UK"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <NavBar user={globalState?.user} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/pawn" />
          </Route>
          <Route path="/pawn" component={HomePage} />
          <Route exact path="/login">
            {globalState?.user ? <Redirect to="/pawn" /> : <AuthPage />}
          </Route>
          <Route path="/test" component={BorrowerADS} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </GlobalTheme>
  );
}
