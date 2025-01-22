import {
  Box,
  ListItemText,
  List,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';
import { Globe, Check } from 'lucide-react';
import { ReactNode } from 'react';

interface OrgListSectionProps {
  children: ReactNode;
  label: string;
}

interface OrgListItemProps {
  org: any;
  handleOnOrgItemClick: any;
  activeOrg: any;
}

export const OrgListSection = ({
  children,
  label,
}: OrgListSectionProps): JSX.Element => {
  return (
    <MenuList>
      <MenuItem
        sx={{
          color: 'text.tertiary',
          fontFamily: 'Inter',
          fontSize: '1.5rem',
          fontWeight: 600,
          p: 1.5,
          pointerEvents: 'none',
        }}
      >
        <Globe size={16} />
        <ListItemText
          primaryTypographyProps={{
            variant: 'body2',
          }}
          sx={{ ml: 0.5 }}
        >
          {label}
        </ListItemText>
      </MenuItem>
      <List>{children}</List>
    </MenuList>
  );
};

export const CheckIcon = (): JSX.Element => (
  <Box
    data-testid="check-icon"
    sx={{
      color: 'primary.main',
      display: 'flex',
      justifyContent: 'center',
      width: 20,
    }}
  >
    <Check size={16} />
  </Box>
);

const OrganizationListItem = ({
  org,
  handleOnOrgItemClick,
  activeOrg,
}: OrgListItemProps): JSX.Element => {
  const selectedOrg = org.id === activeOrg.id;
  return (
    <MenuItem
      key={org.id}
      onClick={() => handleOnOrgItemClick(org)}
      selected={selectedOrg}
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 1.5,
        pl: org.enterpriseId ? 4 : 1.5,
      }}
    >
      <Typography
        sx={{
          overflow: 'hidden',
          textDecoration: 'none',
          textOverflow: 'ellipsis',
        }}
        variant="body2"
      >
        {org.name}
      </Typography>
      {selectedOrg && <CheckIcon />}
    </MenuItem>
  );
};

export default OrganizationListItem;
