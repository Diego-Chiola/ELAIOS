import { cn } from '../lib/utils';

export type PageProps = React.HTMLAttributes<HTMLDivElement>;

export default function Page({ className, children }: PageProps) {
  return (
    <div className={cn('md:mt-0 h-screen-real mt-header', className)}>
      {children}
    </div>
  );
}
