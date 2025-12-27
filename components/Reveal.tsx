import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = '100%', delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small timeout to ensure the component is rendered before starting intersection observer logic
    const timer = setTimeout(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          },
          {
            threshold: 0.01, // Trigger as soon as a tiny part is visible
            rootMargin: '0px'
          }
        );

        if (ref.current) {
          observer.observe(ref.current);
        }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      style={{ width, transitionDelay: `${delay}ms` }}
      className={`
        transform transition-all duration-150 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};