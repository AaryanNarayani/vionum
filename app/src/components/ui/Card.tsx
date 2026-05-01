import { forwardRef, type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, glow = false, className = '', children, ...props }, ref) => {
    const baseStyles = 'bg-surface border border-border rounded-2xl p-6 transition-smooth';
    const hoverStyles = hover ? 'hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg' : '';
    const glowStyles = glow ? 'hover:glow-primary-sm' : '';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
