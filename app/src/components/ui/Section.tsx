import { forwardRef, type HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`w-full py-20 px-6 md:px-8 ${className}`}
        {...props}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
