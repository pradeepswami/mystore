import { render, waitFor } from '@testing-library/react';

import FeatureBooks from './feature-books';

describe('FeatureBooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureBooks />);
    expect(baseElement).toBeTruthy();
  });

  it('should have feature text', async () => {
    const { getByText } = render(<FeatureBooks />);
    await waitFor(() => expect(getByText(/Oscar/gi)).toBeTruthy());
  });
});
