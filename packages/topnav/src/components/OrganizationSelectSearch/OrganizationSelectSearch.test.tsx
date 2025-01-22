import { render, screen, fireEvent } from '@testing-library/react';
import OrganizationSearch from './index';

describe('OrganizationSearch', () => {
  const mockSetOrganizationSearchItem = vi.fn();

  const renderComponent = (organizationSearchItem = '') => {
    return render(
      <OrganizationSearch
        setOrganizationSearchItem={mockSetOrganizationSearchItem}
        organizationSearchItem={organizationSearchItem}
      />
    );
  };

  it('renders the search input field', () => {
    renderComponent();
    const searchField = screen.getByTestId('organization-search-field');
    expect(searchField).toBeInTheDocument();
  });

  it('displays the correct placeholder text', () => {
    renderComponent();
    const searchField = screen.getByPlaceholderText('Search orgs...');
    expect(searchField).toBeInTheDocument();
  });

  it('updates the search value when typing', () => {
    renderComponent();
    const searchField = screen.getByTestId('organization-search-field');
    fireEvent.change(searchField, { target: { value: 'test org' } });
    expect(mockSetOrganizationSearchItem).toHaveBeenCalledWith('test org');
  });

  it('displays the current search value', () => {
    const currentSearchValue = 'current search';
    renderComponent(currentSearchValue);
    const searchField = screen.getByTestId(
      'organization-search-field'
    ) as HTMLInputElement;
    expect(searchField.value).toBe(currentSearchValue);
  });
});
