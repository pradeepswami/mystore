/*eslint no-empty-function: "error"*/
import { render } from '@testing-library/react';

import Book from './book';

describe('Book', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Book
        book={{ title: 'b-title', author: 'auth', id: 1, price: 45, rating: 4 }}
        onAdd={() => ({})}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
