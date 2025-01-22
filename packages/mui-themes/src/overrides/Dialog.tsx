import { ThemeOptions } from '@mui/material';

const dialogOverrides: ThemeOptions['components'] = {
  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.modal,
      }),
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
        paddingTop: theme.spacing(2),
      }),
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      dividers: ({ theme }) => ({
        padding: theme.spacing(2, 3),
      }),
      root: ({ theme }) => ({
        padding: theme.spacing(1, 3),
      }),
    },
  },
};

export default dialogOverrides;
