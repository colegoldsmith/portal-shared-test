// import { screen, fireEvent } from '@testing-library/react';
// import OrganizationListItem from './index';
// import { renderWithTheme } from 'utils/testUtils';
// import { mockActiveOrg } from 'utils/mocks';

// describe('OrganizationListItem', () => {
//   const mockOrg = {
//     id: 'orgId-678',
//     name: 'Test Organization',
//     email: 'test@tester.com',
//     enterpriseId: 'ent-123',
//     customerRelationship: 'qualified',
//   };

//   const mockHandleOnOrgItemClick = vi.fn();

//   it('renders the organization name', () => {
//     renderWithTheme(
//       <OrganizationListItem
//         org={mockOrg}
//         handleOnOrgItemClick={mockHandleOnOrgItemClick}
//         activeOrg={mockActiveOrg}
//       />
//     );
//     expect(screen.getByText('Test Organization')).toBeInTheDocument();
//   });

//   it('calls handleOnOrgItemClick when clicked', () => {
//     renderWithTheme(
//       <OrganizationListItem
//         org={mockOrg}
//         handleOnOrgItemClick={mockHandleOnOrgItemClick}
//         activeOrg={mockActiveOrg}
//       />
//     );
//     fireEvent.click(screen.getByText('Test Organization'));
//     expect(mockHandleOnOrgItemClick).toHaveBeenCalledWith(mockOrg);
//   });

//   it('displays a check icon when the organization is selected', () => {
//     renderWithTheme(
//       <OrganizationListItem
//         org={mockActiveOrg}
//         handleOnOrgItemClick={mockHandleOnOrgItemClick}
//         activeOrg={mockActiveOrg}
//       />
//     );
//     expect(screen.getByTestId('check-icon')).toBeInTheDocument();
//   });

//   it('does not display a check icon when the organization is not selected', () => {
//     renderWithTheme(
//       <OrganizationListItem
//         org={mockOrg}
//         handleOnOrgItemClick={mockHandleOnOrgItemClick}
//         activeOrg={mockActiveOrg}
//       />
//     );
//     expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument();
//   });
// });
