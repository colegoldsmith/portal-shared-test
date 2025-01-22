import { screen, renderWithRouter, fireEvent } from 'utils/testUtils';
import AccountAvatar from '.';

const mockHandleAvatarClick = vi.fn();
const mockProps = {
  userEmail: 'stranger.things@email.com',
  handleAvatarClick: mockHandleAvatarClick,
};

describe('<AccountAvatar />', () => {
  it('renders the component with the correct props', () => {
    renderWithRouter(<AccountAvatar {...mockProps} />);
    const avatarEl = screen.getByTestId('account-avatar');
    expect(avatarEl).toBeInTheDocument();
    fireEvent.click(avatarEl);
    expect(mockHandleAvatarClick).toHaveBeenCalled();
  });
});
