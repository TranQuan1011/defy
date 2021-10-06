/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import { useTranslation } from 'react-i18next';
import GlobalTheme from './containers/ThemeProvider';
import NavBar from './components/Navbar/index';
import AuthPage from './pages/AuthPage';


export function App() {
  const { i18n } = useTranslation();
  return (
    <GlobalTheme>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={AuthPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </GlobalTheme>
  );
}
