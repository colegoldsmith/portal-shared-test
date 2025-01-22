import React, { useState } from 'react';
import { Popover, IconButton, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Grip } from 'lucide-react';
import ApplicationSwitcherItem from 'components/ApplicationSwitcherItem';
import { ApplicationType } from 'types';
import useApplicationSwitcherConfig from 'hooks/useApplicationSwitcherConfig';

const ApplicationSwitcher = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const theme = useTheme();
  const { appSelectorStyleConfig } = useApplicationSwitcherConfig();

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Button in Top Nav to Open Menu */}
      <IconButton
        data-testid="app-switcher-button"
        onClick={handleOnClick}
        sx={{ mr: { md: 1, xs: 2 } }}
      >
        <Grip color={theme.palette.text.secondary} size={18} />
      </IconButton>
      {/* Popover Component - Applications Menu */}
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        onClose={handleOnClose}
        open={Boolean(anchorEl)}
        slotProps={{
          paper: { 'data-testid': 'app-switcher-container' } as any,
        }}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '12px',
          },
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <Grid
          container
          sx={{
            maxWidth: 320,
            p: 3,
            rowGap: 2,
          }}
        >
          {Object.entries(appSelectorStyleConfig).map(
            ([appType, configOptions]) => (
              <Grid key={appType} size={{ xs: 4 }}>
                <ApplicationSwitcherItem
                  {...configOptions}
                  onClick={() => {
                    // Overwriting the onClick from the spread in
                    // order to use the handleClose for all of them
                    configOptions.onClick();
                    handleOnClose();
                  }}
                  type={appType as ApplicationType}
                />
              </Grid>
            )
          )}
        </Grid>
      </Popover>
    </>
  );
};

export default ApplicationSwitcher;
