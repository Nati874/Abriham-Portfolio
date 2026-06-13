import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, delay = 0 } = options as { threshold?: number; delay?: number };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  return ref;
}
