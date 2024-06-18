import { render } from '@testing-library/react';

import FeatureBooks from './feature-books';

describe('FeatureBooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureBooks />);
    expect(baseElement).toBeTruthy();
  });

  it('should have feature text', () => {
    const { getByText } = render(<FeatureBooks />);
    expect(getByText(/FeatureBooks/gi)).toBeTruthy();
  });
});
