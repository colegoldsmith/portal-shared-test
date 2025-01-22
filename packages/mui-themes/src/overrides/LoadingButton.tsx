import { CircularProgress, ThemeOptions } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';

const loadingButtonOverrides: ThemeOptions['components'] = {
  MuiLoadingButton: {
    defaultProps: {
      color: 'neutral',
      loadingIndicator: <CircularProgress color="inherit" size={16} />,
      loadingPosition: 'start',
      variant: 'contained',
    },
    styleOverrides: {
      loadingIndicator: ({ theme }) => ({
        marginRight: theme.spacing(1.5),
        position: 'unset',
      }),
    },
  },
};

export default loadingButtonOverrides;
