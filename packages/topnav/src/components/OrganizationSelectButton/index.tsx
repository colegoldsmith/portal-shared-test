import { useState } from 'react';
import { Button, useTheme } from '@mui/material';
import OrganizationSelectMenu, {
  Organization,
} from 'components/OrganizationSelectMenu';
import { Building2, ChevronsUpDown } from 'lucide-react';
import EllipsisTooltipText from 'components/EllipsisTooltipText';
import { activeOrg, activeUser } from 'constants/mockdata';

const OrganizationSelectButton = (): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const { organizations = [] } = activeUser?.activeUser ?? {};

  const mappedEnterprisesWithOrgs =
    activeUser?.activeUser.enterprises?.map(
      ({
        id,
        name,
        associatedOrgs = [],
      }: {
        id: string;
        name: string;
        associatedOrgs?: string[] | null;
      }) => ({
        associatedOrgsWithData: associatedOrgs
          ?.map(orgId =>
            organizations.find((org: Organization) => org?.id === orgId)
          )
          .filter(Boolean) as Organization[],
        id,
        name,
      })
    ) || [];

  const mappedOrgs: Organization[] =
    organizations.filter((org: Organization) => {
      return !mappedEnterprisesWithOrgs.find(
        (enterprise: {
          id: string;
          associatedOrgsWithData: Organization[];
        }) => {
          return (
            enterprise.id === org.enterpriseId ||
            enterprise.associatedOrgsWithData.find(
              enterpriseOrg => enterpriseOrg?.id === org.id
            )
          );
        }
      );
    }) || [];

  const handleButtonClick = e => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="neutral"
        data-testid="organization-select-button"
        endIcon={
          <ChevronsUpDown color={theme.palette.text.placeholder} size={18} />
        }
        onClick={handleButtonClick}
        size="small"
        startIcon={<Building2 color={theme.palette.text.secondary} size={18} />}
        sx={{
          alignItems: 'center',
          border: 'none',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          ml: 3,
        }}
        variant="outlined"
      >
        <EllipsisTooltipText sx={{ ...theme.typography.button }}>
          {activeOrg.name}
        </EllipsisTooltipText>
      </Button>
      <OrganizationSelectMenu
        anchorEl={anchorEl}
        handleOrganizationMenuClose={handleMenuClose}
        menuItems={{
          enterprises: mappedEnterprisesWithOrgs,
          organizations: mappedOrgs,
        }}
      />
    </>
  );
};

export default OrganizationSelectButton;
