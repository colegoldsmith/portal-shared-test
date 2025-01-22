/* eslint-disable sort-keys-fix/sort-keys-fix */
import { CSSObject, Theme } from '@mui/material';

export type InputColor =
  | 'primary'
  | 'success'
  | 'neutral'
  | 'warning'
  | 'error';

export const outlinedInputMixin = (
  color: InputColor,
  theme: Theme
): CSSObject => {
  return {
    '&.Mui-disabled': {
      borderColor: theme.palette.text.disabled,
      color: theme.palette.disabledColor,
    },
    '&:hover': {
      backgroundColor: theme.palette[color].outlinedHoverBg,
      borderColor: theme.palette[color].outlinedHoverBorder,
      color: theme.palette[color].outlinedColor,
    },
    borderColor: theme.palette[color].outlinedBorder,
    color: theme.palette[color].outlinedColor,
  };
};

export const plainInputMixin = (color: InputColor, theme: Theme): CSSObject => {
  return {
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
    '&:hover': {
      backgroundColor:
        theme.palette[color].plainHoverBg ?? theme.palette[color].softBg,
      color: theme.palette[color].plainColor ?? theme.palette[color].main,
    },
    color: theme.palette[color].plainColor ?? theme.palette[color].main,
  };
};

export const solidInputMixin = (color: InputColor, theme: Theme): CSSObject => {
  return {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.disabledBg,
      color: theme.palette.disabledColor,
    },
    '&:hover': {
      backgroundColor: theme.palette[color].solidHoverBg,
      color: theme.palette[color].solidColor,
    },
    backgroundColor: theme.palette[color].solidBg,
    color: theme.palette[color].solidColor,
  };
};

export const softInputMixin = (color: InputColor, theme: Theme): CSSObject => {
  return {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.disabledBg,
      color: theme.palette.disabledColor,
    },
    '&:hover': {
      backgroundColor: theme.palette[color].softHoverBg,
      color: theme.palette[color].softColor,
    },
    backgroundColor: theme.palette[color].softBg,
    color: theme.palette[color].softColor,
  };
};
