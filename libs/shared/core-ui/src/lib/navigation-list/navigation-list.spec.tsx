import { render } from '@testing-library/react';

import NavigationList from './navigation-list';

describe('NavigationList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationList />);
    expect(baseElement).toBeTruthy();
  });

  it('should render list successfully', () => {
    const { getByText } = render(<NavigationList>ListItem</NavigationList>);
    expect(getByText(/ListItem/gi)).toBeTruthy();
  });
});
