import { render } from '@testing-library/react';

import Books from './books';

describe('Books', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Books books={[{ "title":"b-title", "author":"auth" }]} onAdd={(book: any) => {}} />);
    expect(baseElement).toBeTruthy();
  });
});
