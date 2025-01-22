import React, { useState } from 'react';
import { Menu, MenuItem, Typography, styled, useTheme } from '@mui/material';
import AccountAvatar from 'components/AccountAvatar';
import AccountMenuHeader from 'components/AccountMenuHeader';
import MenuItemBadge from 'components/MenuItemBadge';
import { isMacSystem } from 'utils/helpers';
import { activeUser } from 'constants/mockdata';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5, 2),
}));

const AccountMenu = (): JSX.Element => {
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] =
    useState<HTMLElement | null>(null);
  const theme = useTheme();
  const activeUserData = activeUser?.activeUser;
  const userEmail = activeUserData?.email ?? '';

  const handleAvatarClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setAccountMenuAnchorEl(e.currentTarget);
  };

  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setAccountMenuAnchorEl(null);
  };

  const getFullName = (): string => {
    if (activeUserData) {
      const { firstName, lastName } = activeUserData;
      return `${firstName} ${lastName}`;
    }
    return 'Guest';
  };

  return (
    <>
      <AccountAvatar
        handleAvatarClick={handleAvatarClick}
        userEmail={userEmail}
      />
      <Menu
        anchorEl={accountMenuAnchorEl}
        data-testid="account-dropdown-menu"
        id="account-dropdown-menu"
        keepMounted
        onClose={handleClose}
        open={Boolean(accountMenuAnchorEl)}
        slotProps={{
          paper: {
            elevation: 3,
            sx: {
              '& .MuiList-root': {
                py: 0,
              },
              borderRadius: 1,
              width: 340,
            },
          },
        }}
      >
        <AccountMenuHeader email={userEmail} fullName={getFullName()} />
        <StyledMenuItem autoFocus onClick={handleClose}>
          <Typography variant="body2">Account settings</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography variant="body2">What's new</Typography>
          {/* Real Logic to Follow with acutal What's new length - TBD */}
          <MenuItemBadge
            bgColor={theme.palette.primary.main}
            text="3"
            textColor={theme.palette.background.body}
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography variant="body2">Command palette</Typography>
          <MenuItemBadge text={isMacSystem() ? '⌘K' : 'Ctrl+K'} />
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography variant="body2">Feature preview</Typography>
          <MenuItemBadge text="DS-Internal" />
        </StyledMenuItem>
        <StyledMenuItem
          sx={theme => ({
            borderTop: `1px solid ${theme.palette.divider}`,
            py: 1.5,
          })}
        >
          <Typography variant="body2">Logout</Typography>
        </StyledMenuItem>
      </Menu>
    </>
  );
};
export default AccountMenu;
