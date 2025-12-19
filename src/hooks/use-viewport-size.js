import { useState, useCallback } from 'react';
import { useWindowEvent } from './use-window-event';

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }));

  const handleResize = useCallback(() => {
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useWindowEvent('resize', handleResize);

  return viewportSize;
};
