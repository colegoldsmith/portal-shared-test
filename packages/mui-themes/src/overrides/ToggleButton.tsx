import { ThemeOptions } from '@mui/material';

const toggleButtonOverrides: ThemeOptions['components'] = {
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-selected': {
          '&:hover': {
            backgroundColor: theme.palette.primary.softBg,
          },
          '&:not(:first-of-type)': {
            borderColor: theme.palette.primary.main,
            borderWidth: '2px',
          },
          backgroundColor: theme.palette.primary.softBg,
          borderColor: theme.palette.primary.main,
          borderWidth: '2px',
          zIndex: 1,
        },
        padding: theme.spacing(2.5, 0),
      }),
    },
  },
};

export default toggleButtonOverrides;
