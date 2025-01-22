import { ThemeOptions } from '@mui/material';

const linkOverrides: ThemeOptions['components'] = {
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&:hover': {
          color: theme.palette.primary.dark,
          textDecoration: 'underline',
        },
        color: theme.palette.primary.main,
        textDecoration: 'none',
      }),
    },
  },
};

export default linkOverrides;
