import { RefObject, useEffect, useRef, useState } from "react";

export const useRelativeMousePosition = (ref: RefObject<HTMLElement>): [number, number] => {
    const [position, setPosition] = useState<[number, number]>([0, 0]);
  
    useEffect(() => {
      if (!ref.current) return;
  
      const handleMouseMove = (event: MouseEvent) => {
        const element = ref.current;
        if (!element) return;
  
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        
        setPosition([x, y]);
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [ref]);
  
    return position;
  };