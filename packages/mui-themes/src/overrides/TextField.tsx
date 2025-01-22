import { ThemeOptions } from '@mui/material';

const textFieldOverrides: ThemeOptions['components'] = {
  MuiFormHelperText: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.secondary,
        ...theme.typography.body2,
      }),
    },
  },
  MuiInputBase: {
    defaultProps: {
      fullWidth: true,
    },
    styleOverrides: {
      error: ({ theme }) => ({
        '& .MuiInputBase-input::placeholder, & .MuiInputBase-input::before': {
          color: theme.palette.error.main,
        },
      }),
      input: ({ theme }) => ({
        '&::placeholder, &::before': {
          color: theme.palette.text.placeholder,
          opacity: 1,
        },
      }),
    },
  },
  MuiInputLabel: {
    defaultProps: {
      shrink: true,
    },
    styleOverrides: {
      asterisk: ({ theme }) => ({
        color: theme.palette.error.main,
      }),
      root: ({ theme }) => ({
        '&.Mui-focused:not(.Mui-error)': {
          color: theme.palette.text.secondary,
          transform: 'none',
        },
        color: theme.palette.text.secondary,
        ...theme.typography['inter-sm--medium'],
        marginBottom: theme.spacing(0.5),
        position: 'relative',
        transform: 'none',
      }),
    },
  },
  MuiOutlinedInput: {
    defaultProps: {
      notched: false,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& legend': { width: 'unset' },
        '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.text.disabled,
        },
        '&.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.text.primary,
        },
      }),
    },
  },
  MuiSelect: {
    defaultProps: {
      displayEmpty: true,
    },
    styleOverrides: {
      icon: ({ theme }) => ({
        color: theme.palette.text.secondary,
      }),
      select: ({ ownerState }) => {
        const { placeholder, value, defaultValue } = ownerState || {};
        return {
          // @ts-ignore @TODO: need to fix this
          ...(placeholder &&
            !(value || defaultValue) && {
              // The content property for pseudo-elements (::before) only accepts static strings, not variables like placeholder.
              '&::before': {
                content: `"${placeholder}"`,
              },
            }),
        };
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      size: 'small',
      variant: 'outlined',
    },
  },
};

export default textFieldOverrides;
