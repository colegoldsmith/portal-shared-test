import { CSSObject, Theme } from '@mui/material';
import { InputColor } from './inputMixins';

export const outlinedChipMixin = (
  color: InputColor,
  theme: Theme
): CSSObject => {
  return {
    '&.MuiChip-clickable:hover, &.MuiChip-clickable.Mui-focusVisible': {
      backgroundColor: theme.palette[color].outlinedHoverBg,
    },
    borderColor: theme.palette[color].outlinedBorder,
    color: theme.palette[color].outlinedColor,
  };
};

export const softChipMixin = (color: InputColor, theme: Theme): CSSObject => {
  return {
    '&.MuiChip-clickable:hover, &.MuiChip-clickable.Mui-focusVisible': {
      backgroundColor: theme.palette[color].softHoverBg,
    },
    backgroundColor: theme.palette[color].softBg,
    color: theme.palette[color].softColor,
  };
};
