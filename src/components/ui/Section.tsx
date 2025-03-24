
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const Section = ({ id, className, children, fullWidth = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 scroll-mt-20",
        className
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="section-container">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
