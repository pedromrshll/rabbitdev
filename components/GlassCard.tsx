import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  noPadding?: boolean;
}

// Renamed internally to MinimalCard but kept export name to avoid breaking imports
export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false, noPadding = false }) => {
  return (
    <div
      className={`
        relative
        ${noPadding ? '' : 'p-0'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};