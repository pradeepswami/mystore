import { render } from '@testing-library/react';

import Book from './book';

describe('Book', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Book book={{"title":"b-title", "author":"auth" }} onAdd={() => {}} />);
    expect(baseElement).toBeTruthy();
  });
});
