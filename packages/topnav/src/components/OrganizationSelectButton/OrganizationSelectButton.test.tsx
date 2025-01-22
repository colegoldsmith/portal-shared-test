// import {
//   screen,
//   renderWithRouter,
//   fireEvent,
//   waitForData,
// } from 'utils/testUtils';
// import { Mock } from 'vitest';
// import { MockedProvider } from '@apollo/client/testing';
// import OrganizationSelectButton from './index';
// import { GET_ACTIVE_USER_DATA } from 'gql/queries';
// import useStore from 'store';
// import {
//   mockActiveUser,
//   mockActiveOrg,
//   mockOrgsWithNoEnterprise,
// } from 'utils/mocks';

// vi.mock('store', () => ({
//   default: vi.fn(),
//   useStore: vi.fn(),
// }));

// const mocks = [
//   {
//     request: {
//       query: GET_ACTIVE_USER_DATA,
//     },
//     result: {
//       data: mockActiveUser,
//     },
//   },
// ];

// describe('OrganizationSelectButton', () => {
//   beforeEach(() => {
//     (useStore as unknown as Mock).mockReturnValue({
//       activeOrg: mockActiveOrg,
//     });
//   });

//   it('renders the button with the active organization name', async () => {
//     renderWithRouter(
//       <MockedProvider mocks={mocks}>
//         <OrganizationSelectButton />
//       </MockedProvider>
//     );

//     expect(
//       await screen.findByText('stranger.things@email.com')
//     ).toBeInTheDocument();
//   });

//   it('opens the OrganizationSelectMenu when clicked', async () => {
//     renderWithRouter(
//       <MockedProvider mocks={mocks}>
//         <OrganizationSelectButton />
//       </MockedProvider>
//     );

//     const button = await screen.findByTestId('organization-select-button');
//     fireEvent.click(button);

//     expect(
//       await screen.findByTestId('organization-dropdown-menu')
//     ).toBeInTheDocument();
//   });

//   it('renders the Building2 icon', async () => {
//     renderWithRouter(
//       <MockedProvider mocks={mocks}>
//         <OrganizationSelectButton />
//       </MockedProvider>
//     );

//     const button = await screen.findByTestId('organization-select-button');
//     expect(button.querySelector('svg')).toBeInTheDocument();
//   });

//   it('does not render Enterprise name if there are no associated orgs', async () => {
//     const mocks = [
//       {
//         request: {
//           query: GET_ACTIVE_USER_DATA,
//         },
//         result: {
//           data: {
//             ...mockActiveUser,
//             activeUser: {
//               ...mockActiveUser.activeUser,
//               organizations: mockOrgsWithNoEnterprise,
//             },
//           },
//         },
//       },
//     ];
//     renderWithRouter(
//       <MockedProvider mocks={mocks}>
//         <OrganizationSelectButton />
//       </MockedProvider>
//     );
//     await waitForData();
//     expect(screen.queryByText('enterprise1')).not.toBeInTheDocument();
//   });
// });
