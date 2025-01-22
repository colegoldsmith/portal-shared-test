import { renderWithRouter, screen, fireEvent, waitFor } from 'utils/testUtils';
import ApplicationSwitcher from '.';

describe('<ApplicationSwitcher />', () => {
  it('opens the mneu and renders the component successfully', async () => {
    renderWithRouter(<ApplicationSwitcher />);
    const appSwitcherNavButton = screen.getByTestId('app-switcher-button');
    fireEvent.click(appSwitcherNavButton);
    // shows all correct app titles
    await waitFor(() =>
      expect(screen.getByTestId('app-switcher-container')).toBeInTheDocument()
    );
    screen.getByText('Langflow');
    screen.getByText('Astra DB');
    screen.getByText('Admin');
    screen.getByText('Billing');
    // shows all correct app icon badges
    screen.getByTestId(/application-tile-global_portal/i);
    screen.getByTestId(/application-tile-astra_db/i);
    screen.getByTestId(/application-tile-langflow/i);
    screen.getByTestId(/application-tile-admin/i);
    screen.getByTestId(/application-tile-billing/i);
  });
  it('should not show the menu if the user does not click the button', () => {
    renderWithRouter(<ApplicationSwitcher />);
    const appSwitcherEl = screen.queryByTestId('app-switcher-container');
    expect(appSwitcherEl).not.toBeInTheDocument();
  });
});
