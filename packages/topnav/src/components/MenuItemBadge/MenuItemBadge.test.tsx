import { renderWithRouter, screen } from 'utils/testUtils';
import MenuItemBadge from '.';

const mockProps = {
  text: 'Badge Text',
};

describe('<MenuItemBadge />', () => {
  it('renders the component with default props/styles', () => {
    renderWithRouter(<MenuItemBadge {...mockProps} />);
    const badgeEl = screen.getByText(/badge text/i).parentElement;
    expect(badgeEl).toBeInTheDocument();
    expect(badgeEl).toHaveStyle({
      'background-color': 'rgb(250, 250, 250)',
      color: 'rgb(113, 113, 122)',
    });
  });
  it('receives bgColor and textColor and renders the component appropriately', () => {
    renderWithRouter(
      <MenuItemBadge
        {...{ ...mockProps, bgColor: '#fafafa', textColor: '#000' }}
      />
    );
    const badgeEl = screen.getByText(/badge text/i).parentElement;
    expect(badgeEl).toBeInTheDocument();
    expect(badgeEl).toHaveStyle({
      'background-color': '#fafafa',
      color: '#000',
    });
  });
});
