import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe('Search', () => {
  it('renders app component correctly', () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a search input bar', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
