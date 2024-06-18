import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';

import { FeatureBooks } from '@mystore/feature-book';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <header>
        <h1>Bookstore</h1>
      </header>
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feature-books">FeatureBooks</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/feature-books" element={<FeatureBooks />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
