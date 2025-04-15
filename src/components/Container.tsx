import { cn } from '../lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-container mx-auto w-full', className)}>
      {children}
    </div>
  );
}
