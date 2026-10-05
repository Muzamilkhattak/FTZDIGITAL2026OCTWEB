// Global type definitions for performance optimizations

interface Window {
  requestIdleCallback?: (
    callback: (deadline: IdleDeadline) => void,
    options?: { timeout?: number }
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
}

interface IdleDeadline {
  readonly didTimeout: boolean;
  timeRemaining(): number;
}
