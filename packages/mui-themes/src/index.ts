import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import React from 'react';
import { typography, rounded } from '@astra/design-tokens';
import * as mixins from './mixins';

type TypographyTokens = {
  [key in keyof typeof typography]: React.CSSProperties;
};

declare module '@mui/material/styles' {
  interface PaletteColor {
    outlinedColor?: string;
    outlinedBorder?: string;
    outlinedHoverBg?: string;
    outlinedHoverBorder?: string;

    softColor?: string;
    softBg?: string;
    softHoverBg?: string;

    solidColor?: string;
    solidBg?: string;
    solidHoverBg?: string;

    plainColor?: string;
    plainHoverBg?: string;
  }
  interface Palette {
    neutral: PaletteColor;
    orange: PaletteColor;
    teal: PaletteColor;
    fuchsia: PaletteColor;
    cyan: PaletteColor;
    indigo: PaletteColor;
    lime: PaletteColor;
    pink: PaletteColor;
    disabledColor: string;
    disabledBg: string;
  }
  interface PaletteOptions {
    neutral: PaletteColor;
    orange: PaletteColor;
    teal: PaletteColor;
    fuchsia: PaletteColor;
    cyan: PaletteColor;
    indigo: PaletteColor;
    lime: PaletteColor;
    pink: PaletteColor;
  }
  interface TypeBackground {
    body: string;
    surface: string;
    level1: string;
    level2: string;
    level3: string;
    tooltip: string;
    modal: string;
    brandGradient: string;
  }
  interface TypographyVariants extends TypographyTokens {
    display: React.CSSProperties;
    mono: React.CSSProperties;
  }
  interface TypographyVariantsOptions extends TypographyTokens {
    display: React.CSSProperties;
    mono: React.CSSProperties;
  }
  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    placeholder: string;
    tertiary: string;
  }
 
}

declare module '@mui/system' {
  interface Shape {
    borderRadius: number;
    rounded: typeof rounded;
  }
}

export { lightTheme, darkTheme, mixins };
