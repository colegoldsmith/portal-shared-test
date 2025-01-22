import { renderWithRouter, screen, fireEvent } from 'utils/testUtils';
import InterchangeableIconButton from '.';

const mockProps = {
  dataTestId: 'icon-button',
  icon: <div>icon component</div>,
};

describe('<InterchangeableIconButton />', () => {
  it('renders the component successfully with correct required props', () => {
    renderWithRouter(<InterchangeableIconButton {...mockProps} />);
    screen.getByTestId('icon-button');
  });
  it('renders the component as a normal <IconButton>', () => {
    const mockOnClick = vi.fn();
    renderWithRouter(
      <InterchangeableIconButton {...{ ...mockProps, onClick: mockOnClick }} />
    );
    const buttonEl = screen.getByTestId('icon-button');
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
      <InterchangeableIconButton
        {...{
          ...mockProps,
          dataTestId: 'icon-button-link',
          href: 'https://www.datastax.com',
          target: '_blank',
        }}
      />
    );
    const linkEl = screen.getByTestId('icon-button-link');
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
      <InterchangeableIconButton
        {...{ ...mockProps, dataTestId: 'react-router-icon-link', to: '/home' }}
      />
    );
    const routerLinkEl = screen.getByTestId('react-router-icon-link');
    expect(routerLinkEl).toBeInTheDocument();
    expect(routerLinkEl.tagName).toBe('A');
    expect(routerLinkEl).toHaveAttribute('href', '/home');
    fireEvent.click(routerLinkEl);
    expect(routerLinkEl).toBeInTheDocument();
  });
});
