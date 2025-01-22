import { screen, fireEvent, render } from 'utils/testUtils';
import ThemeToggle from '.';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '@astra/mui-themes';

describe('ThemeToggle', () => {
  const theme = createTheme({
    colorSchemes: { dark: darkTheme, light: lightTheme },
  });

  it('renders with system as default', () => {
    render(
      <ThemeProvider theme={theme}>
        <ThemeToggle />
      </ThemeProvider>
    );
    const systemButton = screen.getByLabelText('system');
    expect(systemButton).toHaveAttribute('aria-pressed', 'true');
    expect(systemButton).toHaveClass('Mui-selected');
  });

  it('renders theme change', () => {
    render(
      <ThemeProvider theme={theme}>
        <body data-testid="body">
          <CssBaseline />
          <ThemeToggle />
        </body>
      </ThemeProvider>
    );
    const systemButton = screen.getByLabelText('system');
    const darkButton = screen.getByLabelText('dark');
    const lightButton = screen.getByLabelText('light');
    const body = screen.getByTestId('body');

    fireEvent.click(darkButton);

    expect(systemButton).not.toHaveAttribute('aria-pressed', 'true');
    expect(systemButton).not.toHaveClass('Mui-selected');

    expect(darkButton).toHaveAttribute('aria-pressed', 'true');
    expect(darkButton).toHaveClass('Mui-selected');

    expect(body).toHaveStyle('background-color: rgb(24, 24, 27)');

    fireEvent.click(lightButton);

    expect(lightButton).toHaveAttribute('aria-pressed', 'true');
    expect(lightButton).toHaveClass('Mui-selected');
    expect(body).toHaveStyle('background-color: rgb(255, 255, 255)');
  });
});
