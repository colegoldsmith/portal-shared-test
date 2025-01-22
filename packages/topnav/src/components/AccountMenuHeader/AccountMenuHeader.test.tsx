import { renderWithRouter, screen } from 'utils/testUtils';
import AccountMenuHeader from '.';

const mockProps = {
  fullName: 'Stranger Things',
  email: 'stranger.things@email.com',
};

describe('<AccountMenuHeader />', () => {
  it('renders the component successfully with correct name', () => {
    renderWithRouter(<AccountMenuHeader {...mockProps} />);
    screen.getByText(/stranger things/i);
    screen.getByText(/stranger.things@email.com/i);
  });
});
