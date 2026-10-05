/**
 * Performance Optimization Utilities
 * Reduces INP (Interaction to Next Paint) by breaking up long tasks
 * and deferring non-critical work
 */

// Scheduler for yielding to main thread
export function yieldToMain() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

// Break up heavy computations into chunks
export async function processInChunks<T>(
  items: T[],
  callback: (item: T, index: number) => void,
  chunkSize: number = 10
) {
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    chunk.forEach((item, idx) => callback(item, i + idx));
    
    // Yield to main thread after each chunk
    if (i + chunkSize < items.length) {
      await yieldToMain();
    }
  }
}

// Debounce for event handlers
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle for scroll/resize handlers
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Request Idle Callback wrapper with fallback
export function requestIdleCallback(callback: () => void, options?: { timeout?: number }) {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback, options);
  }
  
  // Fallback for browsers without requestIdleCallback (Safari < 14, iOS Safari)
  return setTimeout(() => {
    callback();
  }, 1);
}

// Defer non-critical work
export function deferWork(callback: () => void, priority: 'idle' | 'next-frame' = 'idle') {
  if (priority === 'idle') {
    requestIdleCallback(callback, { timeout: 2000 });
  } else {
    requestAnimationFrame(() => {
      setTimeout(callback, 0);
    });
  }
}

// Optimize event listener with deferred logic
export function createOptimizedListener<T extends Event>(
  criticalWork: (event: T) => void,
  deferredWork?: (event: T) => void,
  debounceMs: number = 0
) {
  let deferredCallback = deferredWork;
  
  const handler = (event: T) => {
    // Execute critical work immediately
    criticalWork(event);
    
    // Defer non-critical work
    if (deferredCallback) {
      deferWork(() => deferredCallback!(event), 'next-frame');
    }
  };
  
  return debounceMs > 0 ? debounce(handler, debounceMs) : handler;
}

// Lazy load images with Intersection Observer
export function setupLazyImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    // Defer observation setup
    deferWork(() => {
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    });
  }
}

// Optimize scroll handlers
export function optimizeScrollHandler(callback: () => void) {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
}

// Split render tasks
export async function splitRenderTask(tasks: Array<() => void>) {
  for (const task of tasks) {
    task();
    await yieldToMain();
  }
}

// Cache computed values
export class ComputationCache<T> {
  private cache = new Map<string, { value: T; timestamp: number }>();
  private ttl: number;

  constructor(ttlMs: number = 5000) {
    this.ttl = ttlMs;
  }

  get(key: string, computeFn: () => T): T {
    const cached = this.cache.get(key);
    const now = Date.now();

    if (cached && now - cached.timestamp < this.ttl) {
      return cached.value;
    }

    const value = computeFn();
    this.cache.set(key, { value, timestamp: now });
    return value;
  }

  clear() {
    this.cache.clear();
  }
}

// Preconnect to important origins
export function preconnectToOrigins(origins: string[]) {
  deferWork(() => {
    origins.forEach((origin) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      document.head.appendChild(link);
    });
  });
}

// Optimize form submissions
export function optimizeFormSubmit(
  form: HTMLFormElement,
  onSubmit: (data: FormData) => void | Promise<void>
) {
  form.addEventListener('submit', createOptimizedListener<SubmitEvent>(
    (e) => {
      e.preventDefault();
    },
    async (e) => {
      const formData = new FormData(form);
      await onSubmit(formData);
    }
  ));
}

// Batch DOM reads and writes
export class DOMBatcher {
  private readQueue: Array<() => void> = [];
  private writeQueue: Array<() => void> = [];
  private scheduled = false;

  scheduleRead(callback: () => void) {
    this.readQueue.push(callback);
    this.scheduleFlush();
  }

  scheduleWrite(callback: () => void) {
    this.writeQueue.push(callback);
    this.scheduleFlush();
  }

  private scheduleFlush() {
    if (this.scheduled) return;
    
    this.scheduled = true;
    requestAnimationFrame(() => {
      // Execute all reads first
      while (this.readQueue.length) {
        const read = this.readQueue.shift();
        read?.();
      }
      
      // Then execute all writes
      while (this.writeQueue.length) {
        const write = this.writeQueue.shift();
        write?.();
      }
      
      this.scheduled = false;
    });
  }
}

// Initialize performance optimizations
export function initPerformanceOptimizations() {
  // Setup lazy loading
  setupLazyImages();
  
  // Preconnect to common CDNs
  preconnectToOrigins([
    'https://images.unsplash.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ]);
  
  // Add passive event listeners for scroll and touch
  const addPassiveListener = (element: Element, event: string, handler: EventListener) => {
    element.addEventListener(event, handler, { passive: true });
  };
  
  // Optimize scroll events globally
  deferWork(() => {
    const scrollElements = document.querySelectorAll('[data-scroll-optimized]');
    scrollElements.forEach((el) => {
      const handler = optimizeScrollHandler(() => {
        // Scroll handling logic
      });
      addPassiveListener(el, 'scroll', handler);
    });
  });
}
