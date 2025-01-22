import { ReactElement, ReactNode } from 'react';
import {
  render,
  RenderOptions,
  RenderResult,
  act,
} from '@testing-library/react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme } from '@astra/mui-themes';

const MockThemeProvider = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: Theme;
}) => {
  const appliedTheme = theme || createTheme(lightTheme);
  return <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>;
};

export const renderWithTheme = (
  ui: ReactElement,
  theme?: Theme,
  options?: RenderOptions
): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <MockThemeProvider theme={theme}>{children}</MockThemeProvider>
    ),
    ...options,
  });

// This is a fantastic option...use it
// This method will provide all test component
// renders with the necessary config needed to render the
// component with a Router and Theme
export const renderWithRouter = (
  component: ReactElement,
  theme?: Theme,
  options?: RenderOptions
): RenderResult => {
  return renderWithTheme(
    <BrowserRouter>{component}</BrowserRouter>,
    theme,
    options
  );
};

export const waitForData = async (ms = 0) => {
  await act(() => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  });
};

export * from '@testing-library/react';
