import { ThemeOptions } from '@mui/material';

const radioOverrides: ThemeOptions['components'] = {
  MuiRadio: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&:hover': {
          '&.Mui-checked': {
            color: theme.palette.primary.main,
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
          color: theme.palette.primary.main,
        },
        color: theme.palette.primary.main,
      }),
    },
  },
};

export default radioOverrides;
