import { renderWithRouter, screen, fireEvent } from 'utils/testUtils';
import InterchangeableLinkButton from '.';

const mockProps = {
  text: 'Click Me',
  icon: <div>icon component</div>,
  useIconButton: false,
};

describe('<InterchangeableLinkButton />', () => {
  it('renders the component successfully with correct required props', () => {
    renderWithRouter(<InterchangeableLinkButton {...mockProps} />);
    screen.getByRole('button', { name: /Click Me/i });
  });
  it('renders Icon Button based on useIconButton prop', () => {
    renderWithRouter(
      <InterchangeableLinkButton
        {...{
          ...mockProps,
          useIconButton: true,
          dataTestId: 'now-an-icon-btn',
        }}
      />
    );
    const buttonText = screen.queryByRole('button', { name: /Click Me/i });
    expect(buttonText).not.toBeInTheDocument();
    const iconButton = screen.getByTestId('now-an-icon-btn');
    expect(iconButton).toBeInTheDocument();
  });
  it('renders the component as a normal <Button>', () => {
    const mockOnClick = vi.fn();
    renderWithRouter(
      <InterchangeableLinkButton {...{ ...mockProps, onClick: mockOnClick }} />
    );
    const buttonEl = screen.getByRole('button', { name: /Click Me/i });
    expect(buttonEl).toBeInTheDocument();
    fireEvent.click(buttonEl);
    expect(mockOnClick).toHaveBeenCalled();
  });
  it('renders the component as an <Link>/<a>', async () => {
    const mockLocation = { href: 'https://www.default.com' };
    Object.defineProperty(global.window, 'location', {
      value: mockLocation,
      writable: true,
    });
    renderWithRouter(
      <InterchangeableLinkButton
        {...{
          ...mockProps,
          dataTestId: 'material-ui-link',
          href: 'https://www.datastax.com',
          target: '_blank',
        }}
      />
    );
    const linkEl = screen.getByTestId('material-ui-link');
    expect(linkEl).toBeInTheDocument();
    expect(linkEl.tagName).toBe('A');
    // Verify link has correct attributes
    expect(linkEl).toHaveAttribute('href', 'https://www.datastax.com');
    expect(linkEl).toHaveAttribute('target', '_blank');
    // Verify location is default state
    expect(global.window.location.href).toBe('https://www.default.com');
    // Changes href on Click
    fireEvent.click(linkEl);
    global.window.location.href = linkEl.getAttribute('href') as string;
    // Check for new href
    expect(global.window.location.href).toBe('https://www.datastax.com');
    //Reset Location
    Object.defineProperty(global.window, 'location', {
      value: global.window.location,
    });
  });
  it('renders the component as a react router link', () => {
    renderWithRouter(
      <InterchangeableLinkButton
        {...{ ...mockProps, dataTestId: 'react-router-link', to: '/home' }}
      />
    );
    const routerLinkEl = screen.getByTestId('react-router-link');
    expect(routerLinkEl).toBeInTheDocument();
    expect(routerLinkEl.tagName).toBe('A');
    expect(routerLinkEl).toHaveAttribute('href', '/home');
    fireEvent.click(routerLinkEl);
    expect(routerLinkEl).toBeInTheDocument();
  });
});
