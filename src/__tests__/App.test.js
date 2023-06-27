import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  it('renders app component correctly', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an image', () => {
    render(<App />);
    expect(screen.getByAltText('Nasa logo')).toBeInTheDocument();
  });
});
