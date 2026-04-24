import { useEffect, useRef } from 'react';

/**
 * Single element fade-in reveal on scroll.
 * Add className="reveal" to the element.
 */
export function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/**
 * Staggered reveal for a grid container.
 * Add className="reveal-item" to each child card.
 * The children will animate in with 80ms between each.
 */
export function useStaggerReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll('.reveal-item');
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 90);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
