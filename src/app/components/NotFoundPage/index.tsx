import * as React from 'react';
import styled from 'styled-components/macro';
import { P } from './P';
import { Helmet } from 'react-helmet-async';

import Filter from '../Filter';
import CBAccordion from '../CBAccordion';
import Sidebar from '../Sidebar';

export function NotFoundPage() {
  return (
    <Sidebar>
      <Filter displayClose>
        <CBAccordion
          header="Test"
          labels={['test', 'test', 'test', 'test', 'test', 'test']}
        />
        <CBAccordion header="Test" labels={['test', 'test', 'test']} />
      </Filter>
    </Sidebar>
    /* <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Page not found.</P>
      </Wrapper> */
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: black;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
