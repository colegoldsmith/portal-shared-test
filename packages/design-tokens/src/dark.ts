import colors from './colors';

const dark = {
  // background
  background: {
    body: colors.zinc[900],
    level1: colors.zinc[800],
    level2: colors.zinc[700],
    level3: colors.zinc[600],
    surface: colors.zinc[900],
    tooltip: colors.white,
    modal: colors.zinc[900],
  },
  // text
  text: {
    disabled: colors.zinc[700],
    inverse: colors.black,
    placeholder: colors.zinc[500],
    primary: colors.white,
    secondary: colors.zinc[200],
    tertiary: colors.zinc[300],
  },
  // divider
  divider: colors.zinc[700],
  // focus ring
  focusVisible: colors.white,
  // disabled
  disabledBg: colors.zinc[800],
  disabledColor: colors.zinc[600],
  // data
  cyan: { main: colors.cyan[500] },
  indigo: { main: colors.indigo[400] },
  lime: { main: colors.lime[400] },
  orange: { main: colors.orange[400] },
  fuchsia: { main: colors.fuchsia[300] },
  pink: { main: colors.pink[300] },
  teal: { main: colors.teal[500] },
  // intents
  failure: {
    main: colors.red[500],
    outlinedBorder: colors.red[600],
    outlinedColor: colors.white,
    outlinedHoverBg: colors.red[600],
    outlinedHoverBorder: colors.red[600],
    softBg: colors.red[950],
    softColor: colors.red[200],
    softHoverBg: colors.red[900],
    solidBg: colors.red[700],
    solidColor: colors.white,
    solidHoverBg: colors.red[500],
  },
  neutral: {
    main: colors.white,
    outlinedBorder: colors.zinc[700],
    outlinedColor: colors.white,
    outlinedHoverBg: colors.zinc[700],
    outlinedHoverBorder: colors.zinc[700],
    plainColor: colors.white,
    plainHoverBg: colors.zinc[700],
    softBg: colors.zinc[800],
    softColor: colors.white,
    softHoverBg: colors.zinc[700],
    solidBg: colors.white,
    solidColor: colors.black,
    solidHoverBg: colors.zinc[200],
  },
  primary: {
    main: colors.purple[400],
    outlinedBorder: colors.purple[600],
    outlinedColor: colors.white,
    outlinedHoverBg: colors.purple[600],
    outlinedHoverBorder: colors.purple[600],
    softBg: colors.purple[950],
    softColor: colors.purple[200],
    softHoverBg: colors.purple[900],
    solidBg: colors.purple[700],
    solidColor: colors.white,
    solidHoverBg: colors.purple[500],
  },
  success: {
    main: colors.emerald[500],
    outlinedBorder: colors.emerald[600],
    outlinedColor: colors.white,
    outlinedHoverBg: colors.emerald[600],
    outlinedHoverBorder: colors.emerald[600],
    softBg: colors.emerald[950],
    softColor: colors.emerald[200],
    softHoverBg: colors.emerald[900],
    solidBg: colors.emerald[700],
    solidColor: colors.white,
    solidHoverBg: colors.emerald[500],
  },
  warning: {
    main: colors.amber[400],
    outlinedBorder: colors.amber[600],
    outlinedColor: colors.white,
    outlinedHoverBg: colors.amber[600],
    outlinedHoverBorder: colors.amber[600],
    softBg: colors.amber[950],
    softColor: colors.amber[300],
    softHoverBg: colors.amber[900],
    solidBg: colors.amber[500],
    solidColor: colors.black,
    solidHoverBg: colors.amber[400],
  },
};

export default dark;
