import { ThemeOptions } from '@mui/material';

const backdropOverrides: ThemeOptions['components'] = {
  MuiBackdrop: {
    styleOverrides: {
      invisible: {
        backdropFilter: 'none',
      },
      root: () => ({
        backdropFilter: 'blur(4px)',
      }),
    },
  },
};

export default backdropOverrides;
