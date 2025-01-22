import {
  Box,
  Menu,
  MenuItem,
  MenuList,
  Typography,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import { OrgListSection } from 'components/OrganizationMenuListItem';
import OrganizationListItem from 'components/OrganizationMenuListItem';
import OrganizationSelectSearch from 'components/OrganizationSelectSearch';
import { activeOrg } from 'constants/mockdata';

export interface Organization {
  id: string;
  name: string;
  email: string;
  customerRelationship?: string | null;
  enterpriseId: string | undefined | null;
}
export interface Enterprise {
  id: string;
  name: string;
  associatedOrgsWithData: Organization[];
}
export interface OrganizationSwitcherProps {
  menuItems: {
    organizations: Organization[];
    enterprises: Enterprise[];
  };
  recentOrganizations?: string[];
  anchorEl: HTMLAnchorElement | null;
  handleOrganizationMenuClose: () => void;
}

const OrganizationSelectMenu = ({
  menuItems: { organizations, enterprises },
  //   recentOrganizations,
  anchorEl,
  handleOrganizationMenuClose,
}: OrganizationSwitcherProps): JSX.Element => {
  const [organizationSearchItem, setOrganizationSearchItem] = useState('');

  const handleOnOrgItemClick = () => {
    // setActiveOrg(org);
    handleOrganizationMenuClose();
  };

  const showFilteredSearch = (org: Organization) =>
    org?.name?.toLowerCase().includes(organizationSearchItem.toLowerCase());

  return (
    <Menu
      anchorEl={anchorEl}
      data-testid="organization-dropdown-menu"
      id="organization-dropdown-menu"
      keepMounted
      onClose={handleOrganizationMenuClose}
      open={Boolean(anchorEl)}
      slotProps={{
        paper: {
          elevation: 3,
          sx: {
            '& .MuiList-root': {
              p: 0,
            },
            borderRadius: 1,
            mb: 2,
            width: 300,
          },
        },
      }}
    >
      <MenuList>
        {/* Search bar */}
        {[...organizations, ...enterprises].length > 4 && (
          <OrganizationSelectSearch
            organizationSearchItem={organizationSearchItem}
            setOrganizationSearchItem={setOrganizationSearchItem}
          />
        )}
        <Box
          data-testid="orgs-list"
          sx={{
            maxHeight: 254,
            minHeight: 254,
            overflowY: 'auto',
          }}
          tabIndex={0}
        >
          {enterprises.length > 0 &&
            enterprises.map(enterprise => {
              return (
                enterprise.associatedOrgsWithData.length > 0 && (
                  <OrgListSection key={enterprise.id} label={enterprise.name}>
                    {enterprise.associatedOrgsWithData.length > 0 &&
                      enterprise.associatedOrgsWithData.map(
                        org =>
                          showFilteredSearch(org) && (
                            <OrganizationListItem
                              activeOrg={activeOrg}
                              handleOnOrgItemClick={handleOnOrgItemClick}
                              key={org.id}
                              org={org}
                            />
                          )
                      )}
                  </OrgListSection>
                )
              );
            })}

          {/* Org without Enterprise, first.lastname@email.com at the top */}
          {organizations.length > 0 &&
            organizations.map(
              org =>
                showFilteredSearch(org) && (
                  <OrganizationListItem
                    activeOrg={activeOrg}
                    handleOnOrgItemClick={handleOnOrgItemClick}
                    key={org.id}
                    org={org}
                  />
                )
            )}

          {/* No Results Found Section */}
          {organizations.filter(org =>
            org.name
              ?.toLowerCase()
              .includes(organizationSearchItem.toLowerCase())
          )?.length === 0 && (
            <Typography
              sx={theme => ({ ml: 2.5, padding: theme.spacing(1.5, 0) })}
              variant="body2"
            >
              No result found
            </Typography>
          )}
        </Box>
        <Divider />
        <MenuItem sx={theme => ({ p: 1.5, ...theme.typography.body2 })}>
          Organization Settings
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default OrganizationSelectMenu;
