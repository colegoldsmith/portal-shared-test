import { screen, renderWithRouter, waitForData } from 'utils/testUtils';
import AccountMenu from '.';

describe('<AccountMenu />', () => {
  it('renders the component successfully', async () => {
    renderWithRouter(
        <AccountMenu />
    );
    await waitForData();
    screen.getByTestId('account-dropdown-menu');
    screen.getByText('Stranger Things');
    screen.getByText(/stranger.things@email.com/i);
    screen.getByText(/Account settings/i);
    screen.getByText(/what's new/i);
    screen.getByText(/command palette/i);
    screen.getByText(/feature preview/i);
    screen.getByText(/logout/i);
  });
  it('renders default name if no first/last name returned', async () => {
   
    renderWithRouter(
        <AccountMenu />
    );
    await waitForData();
    screen.getByTestId('account-dropdown-menu');
    expect(screen.queryByText('Stranger Things')).not.toBeInTheDocument();
    expect(
      screen.queryByText(/stranger.things@email.com/i)
    ).not.toBeInTheDocument();
    screen.getByText('Guest');
  });
});
