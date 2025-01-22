import {
  solidInputMixin,
  plainInputMixin,
  softInputMixin,
  outlinedInputMixin,
} from '../mixins';

import { InputColor } from '../mixins/inputMixins';

export const COLORS = {
  error: 'error',
  neutral: 'neutral',
  primary: 'primary',
  secondary: 'neutral',
  success: 'success',
  warning: 'warning',
};

export const VARIANTS: Record<
  'contained' | 'outlined' | 'plain' | 'soft' | 'solid' | 'text',
  (color: InputColor, theme: any) => any
> = {
  contained: solidInputMixin,
  outlined: outlinedInputMixin,
  plain: plainInputMixin,
  soft: softInputMixin,
  solid: solidInputMixin,
  text: plainInputMixin,
};
