import { darkTheme, lightTheme } from '@astra/mui-themes';
import TopNavigation from '@astra/topnav';
import { createTheme, ThemeProvider } from '@mui/material';

const TopNavigationStandalone = () => {
  const theme = createTheme({
    colorSchemes: { dark: darkTheme, light: lightTheme },
    cssVariables: { colorSchemeSelector: 'class', cssVarPrefix: '' },
  });
  return (
    <ThemeProvider
      disableTransitionOnChange
      modeStorageKey="themePreference"
      theme={theme}
    >
      <TopNavigation />
    </ThemeProvider>
  );
};

export default TopNavigationStandalone;