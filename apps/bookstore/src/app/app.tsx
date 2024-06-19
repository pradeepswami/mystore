import styled from 'styled-components';

import { Route, Routes, Link, Navigate } from 'react-router-dom';

import { FeatureBooks } from '@mystore/feature-book';
import {
  GlobalStyles,
  Button,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@mystore/core-ui';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path="/books" element={<FeatureBooks />} />
          <Route path="/" Component={() => <Navigate to="/books" />} />
        </Routes>
      </Main>
    </StyledApp>
  );
}

export default App;
