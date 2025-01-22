// import { screen, renderWithRouter, fireEvent, waitFor } from 'utils/testUtils';
// import OrganizationSelectMenu from '.';
// import { Mock } from 'vitest';
// import {
//   mockActiveUser,
//   mockActiveOrg,
//   mockOrgsWithNoEnterprise,
//   mockAdditionalOrgs,
//   mockEnterprisesWithMappedOrgs,
// } from 'utils/mocks';
// import useStore from 'store';

// // Mock the useStore hook
// vi.mock('store', () => ({
//   default: vi.fn(),
//   useStore: vi.fn(),
// }));

// const mockProps = {
//   anchorEl: null,
//   handleOrganizationMenuClose: vi.fn(),
//   menuItems: {
//     enterprises: mockEnterprisesWithMappedOrgs,
//     organizations: mockOrgsWithNoEnterprise,
//   },
// };

// describe('<OrganizationSelectMenu />', () => {
//   beforeEach(() => {
//     (useStore as unknown as Mock).mockReturnValue({
//       activeOrg: mockActiveOrg,
//       setActiveOrg: vi.fn(),
//     });
//   });

//   it('renders the component successfully with correct data', async () => {
//     renderWithRouter(<OrganizationSelectMenu {...mockProps} />);
//     expect(
//       screen.getByTestId('organization-dropdown-menu')
//     ).toBeInTheDocument();
//     expect(
//       screen.getByText(mockActiveUser.activeUser.organizations[0].name)
//     ).toBeInTheDocument();
//   });

//   it('renders No Results Found if no organizations are passed', async () => {
//     renderWithRouter(
//       <OrganizationSelectMenu
//         {...{
//           ...mockProps,
//           menuItems: { ...mockProps.menuItems, organizations: [] },
//         }}
//       />
//     );
//     expect(screen.getByText('No result found')).toBeInTheDocument();
//   });

//   it('does NOT render the search bar if there are less than 5 Orgs', () => {
//     renderWithRouter(<OrganizationSelectMenu {...mockProps} />);
//     const searchBar = screen.queryByTestId('organization-search-field');
//     expect(searchBar).not.toBeInTheDocument();
//   });

//   it('renders the search bar if there are more than 5 Orgs', () => {
//     const manyOrgsProps = {
//       ...mockProps,
//       menuItems: {
//         ...mockProps.menuItems,
//         organizations: [
//           ...mockProps.menuItems.organizations,
//           ...mockAdditionalOrgs,
//         ],
//       },
//     };
//     renderWithRouter(<OrganizationSelectMenu {...manyOrgsProps} />);
//     const searchBar = screen.getByTestId('organization-search-field');
//     expect(searchBar).toBeInTheDocument();
//   });

//   it('filters organizations based on search input', async () => {
//     const manyOrgsProps = {
//       ...mockProps,
//       menuItems: {
//         ...mockProps.menuItems,
//         organizations: [
//           ...mockProps.menuItems.organizations,
//           ...mockAdditionalOrgs,
//         ],
//       },
//     };
//     renderWithRouter(<OrganizationSelectMenu {...manyOrgsProps} />);
//     const searchBar = screen.getByTestId('organization-search-field');
//     fireEvent.change(searchBar, { target: { value: 'additionalOrg3' } });
//     expect(screen.getByText(/additionalOrg3/i)).toBeInTheDocument();
//     await waitFor(() =>
//       expect(screen.queryByText(/additionalOrg2/i)).not.toBeInTheDocument()
//     );
//   });

//   it('calls setActiveOrg and handleOrganizationMenuClose when an organization is selected', () => {
//     const { setActiveOrg } = useStore();
//     renderWithRouter(<OrganizationSelectMenu {...mockProps} />);
//     fireEvent.click(
//       screen.getByText(mockActiveUser.activeUser.organizations[1].name)
//     );
//     expect(setActiveOrg).toHaveBeenCalledWith(
//       mockActiveUser.activeUser.organizations[1]
//     );
//     expect(mockProps.handleOrganizationMenuClose).toHaveBeenCalled();
//   });

//   it('renders enterprise organizations when provided', () => {
//     const enterpriseProps = {
//       ...mockProps,
//       menuItems: {
//         ...mockProps.menuItems,
//         enterprises: [
//           {
//             associatedOrgsWithData:
//               mockEnterprisesWithMappedOrgs[0].associatedOrgsWithData,
//             id: 'ent-1',
//             name: 'Enterprise 1',
//           },
//         ],
//       },
//     };
//     renderWithRouter(<OrganizationSelectMenu {...enterpriseProps} />);
//     expect(screen.getByText('Enterprise 1')).toBeInTheDocument();
//   });

//   it('renders Organization Settings menu item', () => {
//     renderWithRouter(<OrganizationSelectMenu {...mockProps} />);
//     expect(screen.getByText('Organization Settings')).toBeInTheDocument();
//   });
// });
