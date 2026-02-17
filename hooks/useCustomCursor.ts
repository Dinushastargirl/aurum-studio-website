
import { useState, useEffect, useCallback } from 'react';

export const useCustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    const target = e.target as HTMLElement;
    const clickable = target.closest('a, button, [role="button"], input, textarea, select');
    setIsHovering(!!clickable);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const splash = document.createElement('div');
    splash.className = 'paint-splash';
    splash.style.left = `${e.clientX}px`;
    splash.style.top = `${e.clientY}px`;
    document.body.appendChild(splash);
    setTimeout(() => splash.remove(), 600);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleClick);
    };
  }, [handleMouseMove, handleClick]);

  return { mousePosition, isHovering };
};
