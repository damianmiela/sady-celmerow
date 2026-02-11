import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export default function Section({
  id,
  className,
  children,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={twMerge(
        clsx(
          'py-16 md:py-24',
          dark ? 'bg-primary-900 text-white' : 'bg-white text-muted-900',
          className,
        ),
      )}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
