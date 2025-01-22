// import { screen, renderWithRouter } from 'utils/testUtils';
// import { Mock } from 'vitest';
// import { MockedProvider } from '@apollo/client/testing';
// import TopNavigation from './index';
// import useStore from 'store';
// import { GET_ACTIVE_USER_DATA } from 'gql/queries';
// import { mockActiveUser } from 'utils/mocks';
// import { DATASTAX_DOCS_URL } from 'constants/links';

// // Mock the useStore hook
// vi.mock('store', () => ({
//   default: vi.fn(),
//   useStore: vi.fn(),
// }));

// const mocks = [
//   {
//     request: {
//       query: GET_ACTIVE_USER_DATA,
//     },
//   },
// ];

// describe('TopNavigation', () => {
//   const mockActiveOrg = {
//     customerRelationship: 'qualified',
//     email: 'stranger.things@tester.com',
//     enterpriseId: 'ent-123',
//     id: 'orgId-123',
//     name: 'stranger.things@tester.com',
//   };

//   beforeEach(() => {
//     (useStore as unknown as Mock).mockReturnValue({
//       activeOrg: mockActiveOrg,
//     });
//   });

//   it('renders the OrganizationSelectButton', () => {
//     renderWithRouter(
//       <MockedProvider addTypename mocks={mocks}>
//         <TopNavigation />
//       </MockedProvider>
//     );
//     expect(
//       screen.getByTestId('organization-select-button')
//     ).toBeInTheDocument();
//     expect(screen.getByText('stranger.things@tester.com')).toBeInTheDocument();
//   });

//   it('renders the upgrade button for qualified customers', () => {
//     renderWithRouter(
//       <MockedProvider addTypename mocks={mocks}>
//         <TopNavigation />
//       </MockedProvider>
//     );
//     expect(screen.getByText('Get free startup credits')).toBeInTheDocument();
//   });

//   it('does not render the upgrade button for non-qualified customers', () => {
//     const mocks = [
//       {
//         data: { ...{ ...mockActiveUser }, organizations: [] },
//         request: {
//           query: GET_ACTIVE_USER_DATA,
//         },
//       },
//     ];

//     (useStore as unknown as Mock).mockReturnValue({
//       activeOrg: {
//         customerRelationship: '',
//         email: 'stranger.things@tester.com',
//         enterpriseId: 'ent-123',
//         id: 'orgId-123',
//         name: 'stranger.things@tester.com',
//       },
//     });

//     renderWithRouter(
//       <MockedProvider addTypename mocks={mocks}>
//         <TopNavigation />
//       </MockedProvider>
//     );

//     expect(screen.queryByText('Upgrade')).not.toBeInTheDocument();
//   });
//   it('renders docs link, app switcher, settings', () => {
//     renderWithRouter(
//       <MockedProvider addTypename mocks={mocks}>
//         <TopNavigation />
//       </MockedProvider>
//     );
//     const docsLinkButtonEl = screen.getByTestId('docs-link');
//     expect(docsLinkButtonEl).toBeInTheDocument();
//     expect(docsLinkButtonEl).toHaveAttribute('href', DATASTAX_DOCS_URL);
//     expect(docsLinkButtonEl).toHaveAttribute('target', '_blank');
//     const setttingButtonEl = screen.getByTestId('settings-button');
//     expect(setttingButtonEl).toBeInTheDocument();
//     const appSwitcherButtonEl = screen.getByTestId('app-switcher-button');
//     expect(appSwitcherButtonEl).toBeInTheDocument();
//   });
// });
