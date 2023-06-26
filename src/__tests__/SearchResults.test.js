import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('Search', () => {
  it('renders app component correctly', () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  });
});
