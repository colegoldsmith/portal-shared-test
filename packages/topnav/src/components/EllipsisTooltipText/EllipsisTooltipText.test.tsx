import { renderWithRouter, screen, fireEvent, act } from 'utils/testUtils';
import EllipsisTooltipText from '.';

const mockProps = {
  children: 'stranger.things@email.com',
};

global.ResizeObserver = class {
  // We are using class structure because the real ResizeObserver is a class provided by the browser
  // - here we are truly replicating the API structure
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
    // Callback is provided, and is called whenever
    // the observe function detects a resize event
  }
  private callback: ResizeObserverCallback;
  observe = (target: Element) => {
    // Simulate a ResizeObserverEntry
    this.callback(
      [{ target } as ResizeObserverEntry],
      this as unknown as ResizeObserver
    );
  };
  unobserve = vi.fn();
  disconnect = vi.fn();
};

const defineMockDimensions = (offsetWidth: number, scrollWidth: number) => {
  // Here we are redefining offsetWidth and scrollWidth on the HTMLElement prototype,
  // setting them to return specific values
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    configurable: true,
    get: () => offsetWidth,
  });
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
    configurable: true,
    get: () => scrollWidth,
  });
};

describe('<EllipsisTooltipText />', () => {
  it('renders the component successfully with correct text', () => {
    renderWithRouter(<EllipsisTooltipText {...mockProps} />);
    screen.getByText(/stranger.things@email.com/i);
  });
  it('shows tooltip on hover if email overflows', async () => {
    defineMockDimensions(50, 100);
    renderWithRouter(<EllipsisTooltipText {...mockProps} />);
    const textEl = screen.getByText(mockProps.children);
    await act(() => {
      // Trigger ResizeObserver callback by resizing
      // Simulate the callback
      const resizeObserverInstance = new ResizeObserver(entries => {
        // Each entry represents an observed element that includes a target
        entries[0].target.dispatchEvent(new Event('resize'));
      });
      resizeObserverInstance.observe(textEl);
    });
    fireEvent.mouseOver(textEl);
    const tooltipEl = await screen.findByRole('tooltip', {
      name: mockProps.children,
    });
    expect(tooltipEl).toBeInTheDocument();
  });
  it('does NOT show tooltip on hover if email does NOT overflow', async () => {
    defineMockDimensions(100, 50);
    renderWithRouter(<EllipsisTooltipText {...mockProps} />);
    const textEl = screen.getByText(mockProps.children);
    await act(() => {
      // Trigger ResizeObserver callback by resizing
      // Simulate the callback
      const resizeObserverInstance = new ResizeObserver(entries => {
        // Each entry represents an observed element that includes a target
        entries[0].target.dispatchEvent(new Event('resize'));
      });
      resizeObserverInstance.observe(textEl);
    });
    await fireEvent.mouseOver(textEl);
    const tooltipEl = await screen.queryByRole('tooltip', {
      name: mockProps.children,
    });
    expect(tooltipEl).not.toBeInTheDocument();
  });
});
