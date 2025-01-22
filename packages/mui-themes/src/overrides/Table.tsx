import { ThemeOptions } from '@mui/material';

const tableOverrides: ThemeOptions['components'] = {
  MuiTableCell: {
    styleOverrides: {
      head: ({ theme }) => ({
        color: theme.palette.text.tertiary,
      }),
      root: ({ theme }) => ({
        borderColor: theme.palette.divider,
      }),
      sizeSmall: ({ theme }) => ({
        height: theme.spacing(6),
      }),
    },
  },
};

export default tableOverrides;
