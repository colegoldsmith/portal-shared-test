import { ThemeOptions } from '@mui/material';

const menuOverrides: ThemeOptions['components'] = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&:hover': {
          backgroundColor: theme.palette.neutral.plainHoverBg,
        },
      }),
    },
  },
};

export default menuOverrides;
