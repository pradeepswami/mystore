import styled from 'styled-components';

import { Route, Routes, Link, Navigate } from 'react-router-dom';

import { FeatureBooks } from '@mystore/feature-book';
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@mystore/core-ui';

import { CartFeature } from '@mystore/cart-feature';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books!</Link>
            <Link to="/cart">Cart</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path="/books" element={<FeatureBooks />} />
          <Route path="/cart" element={<CartFeature />} />
          <Route path="/" Component={() => <Navigate to="/books" />} />
        </Routes>
      </Main>
    </StyledApp>
  );
}

export default App;
