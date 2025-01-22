import '@testing-library/jest-dom';

/* https://github.com/felippenardi/lottie-react-web/issues/21 */
/* @ts-ignore */
HTMLCanvasElement.prototype.getContext = () => {
  return {
    fillRect: vi.fn(),
    fillStyle: '',
  };
};

class ResizeObserverMock {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
}

global.ResizeObserver = global.ResizeObserver || ResizeObserverMock;
