## MUI Theme Overrides

The purpose of these files is to override base MUI component styles to match our component design found [here](https://www.figma.com/file/t2J7iefd2d630EvNjSqiD5/Components?mode=dev).

The MUI docs for component overrides can be found [here](https://mui.com/material-ui/customization/theme-components/)

## Adding Extra Variants and Colors
MUI does not support our global variants (solid, outlined, soft, plain) out of the box so it is often necessary to add extra variant and color props to an MUI component. To achieve this we can use the variant section of the override like this
```
const MIXIN_MAP = {
  contained: solidInputMixin,
  outlined: outlinedInputMixin,
  plain: plainInputMixin,
  soft: softInputMixin,
  solid: solidInputMixin,
  text: plainInputMixin,
};
MuiButton: {
  variants: COLORS.flatMap(color =>
    VARIANTS.map(variant => ({
      props: {
        color: color as ButtonProps['color'],
        variant: variant as ButtonProps['variant'],
      },
      style: ({ theme }) => MIXIN_MAP[variant](color, theme),
    }))
  ),
}
```
Since Buttons are an interactable element we can utilize the inputMixins to apply our global variant colors. The loops will ensure we add styling for every combination of variant and color.

To ensure typescript will accept these new varaints and colors as props MUI provides overridable interfaces for many components. For example we can add extra color and variant props like this to Button
```
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
  interface ButtonPropsVariantOverrides {
    soft: true;
    solid: true;
    outlined: true;
    plain: true;
  }
}
```