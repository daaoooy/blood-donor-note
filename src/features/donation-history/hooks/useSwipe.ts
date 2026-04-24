import { useRef } from 'react';

interface UseSwipeProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
}

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 40,
}: UseSwipeProps) => {
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleStart = (clientX: number) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = startX.current - clientX;

    if (diff > threshold) onSwipeLeft();
    else if (diff < -threshold) onSwipeRight();
  };

  return {
    onTouchStart: (e: React.TouchEvent) => handleStart(e.touches[0].clientX),
    onTouchEnd: (e: React.TouchEvent) => handleEnd(e.changedTouches[0].clientX),

    onMouseDown: (e: React.MouseEvent) => handleStart(e.clientX),
    onMouseUp: (e: React.MouseEvent) => handleEnd(e.clientX),
    onMouseLeave: () => {
      isDragging.current = false;
    },
  };
};
