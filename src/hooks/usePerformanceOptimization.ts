import { useEffect, useCallback, useRef } from 'react';
import { debounce, throttle, deferWork, yieldToMain } from '@/utils/performanceOptimizations';

/**
 * Hook to optimize component performance and reduce INP
 */
export function usePerformanceOptimization() {
  const mounted = useRef(true);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  // Create optimized debounced callback
  const useOptimizedDebounce = useCallback(<T extends (...args: any[]) => any>(
    callback: T,
    delay: number = 300
  ) => {
    const debouncedFn = useRef(debounce(callback, delay));
    
    useEffect(() => {
      debouncedFn.current = debounce(callback, delay);
    }, [callback, delay]);
    
    return debouncedFn.current;
  }, []);

  // Create optimized throttled callback
  const useOptimizedThrottle = useCallback(<T extends (...args: any[]) => any>(
    callback: T,
    limit: number = 100
  ) => {
    const throttledFn = useRef(throttle(callback, limit));
    
    useEffect(() => {
      throttledFn.current = throttle(callback, limit);
    }, [callback, limit]);
    
    return throttledFn.current;
  }, []);

  // Defer heavy computation
  const useDeferredComputation = useCallback(<T,>(
    computation: () => T,
    deps: React.DependencyList = []
  ) => {
    const result = useRef<T>();
    
    useEffect(() => {
      deferWork(() => {
        if (mounted.current) {
          result.current = computation();
        }
      }, 'idle');
    }, deps);
    
    return result;
  }, []);

  return {
    useOptimizedDebounce,
    useOptimizedThrottle,
    useDeferredComputation,
    deferWork,
    yieldToMain,
  };
}

/**
 * Hook to optimize click handlers
 */
export function useOptimizedClick<T extends HTMLElement = HTMLElement>(
  onClick: (event: React.MouseEvent<T>) => void,
  options?: {
    defer?: boolean;
    debounce?: number;
  }
) {
  const { defer = true, debounce: debounceMs = 0 } = options || {};

  return useCallback((event: React.MouseEvent<T>) => {
    // Prevent default if needed
    const criticalWork = () => {
      // Execute critical synchronous work here
    };

    criticalWork();

    // Defer the actual click handler
    if (defer) {
      deferWork(() => onClick(event), 'next-frame');
    } else if (debounceMs > 0) {
      debounce(() => onClick(event), debounceMs)();
    } else {
      onClick(event);
    }
  }, [onClick, defer, debounceMs]);
}

/**
 * Hook to optimize form submissions
 */
export function useOptimizedSubmit(
  onSubmit: (data: any) => void | Promise<void>
) {
  return useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Extract form data synchronously
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Defer the actual submission logic
    deferWork(async () => {
      await onSubmit(data);
    }, 'next-frame');
  }, [onSubmit]);
}

/**
 * Hook to optimize scroll handlers
 */
export function useOptimizedScroll(
  onScroll: () => void,
  options?: {
    throttle?: number;
    passive?: boolean;
  }
) {
  const { throttle: throttleMs = 100, passive = true } = options || {};
  
  const optimizedHandler = useCallback(() => {
    let ticking = false;
    
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
  }, [onScroll]);

  const throttledHandler = useCallback(
    throttle(optimizedHandler(), throttleMs),
    [optimizedHandler, throttleMs]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledHandler, { passive });
    
    return () => {
      window.removeEventListener('scroll', throttledHandler);
    };
  }, [throttledHandler, passive]);
}

/**
 * Hook to batch state updates and reduce re-renders
 */
export function useBatchedUpdates() {
  const updates = useRef<Array<() => void>>([]);
  const scheduled = useRef(false);

  const scheduleUpdate = useCallback((update: () => void) => {
    updates.current.push(update);
    
    if (!scheduled.current) {
      scheduled.current = true;
      
      requestAnimationFrame(async () => {
        // Process updates in chunks
        const batch = [...updates.current];
        updates.current = [];
        
        for (let i = 0; i < batch.length; i++) {
          batch[i]();
          
          // Yield every 5 updates
          if (i % 5 === 4 && i < batch.length - 1) {
            await yieldToMain();
          }
        }
        
        scheduled.current = false;
      });
    }
  }, []);

  return scheduleUpdate;
}
