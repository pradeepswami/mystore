import { render } from '@testing-library/react';

import Books from './books';
import { IBook } from '@mystore/shared/model';

describe('Books', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Books
        books={[
          { title: 'b-title', author: 'auth', id: 1, price: 45, rating: 4 },
        ]}
        onAdd={(book: IBook) => ({})}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
