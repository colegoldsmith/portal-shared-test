import colors from './colors';

const light = {
  // background
  background: {
    body: colors.white,
    level1: colors.zinc[50],
    level2: colors.zinc[100],
    level3: colors.zinc[200],
    surface: colors.white,
    tooltip: colors.black,
    modal: colors.white,
  },
  // text
  text: {
    disabled: colors.zinc[200],
    inverse: colors.white,
    placeholder: colors.zinc[400],
    primary: colors.black,
    secondary: colors.zinc[700],
    tertiary: colors.zinc[500],
  },
  // divider
  divider: colors.zinc[200],
  // focus ring
  focusVisible: colors.black,
  // disabled
  disabledBg: colors.zinc[100],
  disabledColor: colors.zinc[300],
  // data
  cyan: { main: colors.cyan[600] },
  indigo: { main: colors.indigo[700] },
  lime: { main: colors.lime[700] },
  orange: { main: colors.orange[600] },
  fuchsia: { main: colors.fuchsia[600] },
  teal: { main: colors.teal[700] },
  pink: { main: colors.pink[600] },
  // intents
  failure: {
    main: colors.red[600],
    outlinedBorder: colors.red[300],
    outlinedColor: colors.black,
    outlinedHoverBg: colors.red[300],
    outlinedHoverBorder: colors.red[300],
    softBg: colors.red[100],
    softColor: colors.red[800],
    softHoverBg: colors.red[200],
    solidBg: colors.red[600],
    solidColor: colors.white,
    solidHoverBg: colors.red[800],
  },
  neutral: {
    main: colors.black,
    outlinedBorder: colors.zinc[200],
    outlinedColor: colors.black,
    outlinedHoverBg: colors.zinc[200],
    outlinedHoverBorder: colors.zinc[200],
    plainColor: colors.black,
    plainHoverBg: colors.zinc[200],
    softBg: colors.zinc[100],
    softColor: colors.black,
    softHoverBg: colors.zinc[200],
    solidBg: colors.black,
    solidColor: colors.white,
    solidHoverBg: colors.zinc[700],
  },
  primary: {
    main: colors.purple[600],
    outlinedBorder: colors.purple[300],
    outlinedColor: colors.black,
    outlinedHoverBg: colors.purple[300],
    outlinedHoverBorder: colors.purple[300],
    softBg: colors.purple[100],
    softColor: colors.purple[800],
    softHoverBg: colors.purple[200],
    solidBg: colors.purple[600],
    solidColor: colors.white,
    solidHoverBg: colors.purple[800],
  },
  success: {
    main: colors.emerald[600],
    outlinedBorder: colors.emerald[300],
    outlinedColor: colors.black,
    outlinedHoverBg: colors.emerald[300],
    outlinedHoverBorder: colors.emerald[300],
    softBg: colors.emerald[100],
    softColor: colors.emerald[800],
    softHoverBg: colors.emerald[200],
    solidBg: colors.emerald[600],
    solidColor: colors.white,
    solidHoverBg: colors.emerald[800],
  },
  warning: {
    main: colors.amber[600],
    outlinedBorder: colors.amber[300],
    outlinedColor: colors.black,
    outlinedHoverBg: colors.amber[300],
    outlinedHoverBorder: colors.amber[300],
    softBg: colors.amber[100],
    softColor: colors.amber[700],
    softHoverBg: colors.amber[200],
    solidBg: colors.amber[600],
    solidColor: colors.white,
    solidHoverBg: colors.amber[700],
  },
};

export default light;
