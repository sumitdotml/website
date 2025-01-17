import { cn } from '@/lib/utils/utils'

interface FlexStackProps {
    children: React.ReactNode;
    className?: string;
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const gaps = {
    none: '',
    xs: 'space-y-0.5 sm:space-y-1',
    sm: 'space-y-1 sm:space-y-2',
    md: 'space-y-2 sm:space-y-4',
    lg: 'space-y-4 sm:space-y-8',
    xl: 'space-y-6 sm:space-y-12'
}

export function StackVertical({ children, className, gap = 'md' }: FlexStackProps) {
    return (
        <div className={cn('flex flex-col', gaps[gap], className)}>
            {children}
        </div>
    );
}

export function StackHorizontal({ children, className, gap = 'md' }: FlexStackProps) {
    return (
        <div className={cn('flex flex-row items-center', 
            gap === 'none' ? '' : 
            gap === 'xs' ? 'gap-0.5 sm:gap-1' : 
            gap === 'sm' ? 'gap-1 sm:gap-2' : 
            gap === 'md' ? 'gap-2 sm:gap-4' : 
            gap === 'lg' ? 'gap-4 sm:gap-8' : 
            'gap-6 sm:gap-12',
            className
        )}>
            {children}
        </div>
    );
}

interface GridLayoutProps extends FlexStackProps {
    cols?: 1 | 2 | 3 | 4;
}

export function GridLayout({ children, className, gap = 'md', cols = 3 }: GridLayoutProps) {
    return (
        <div className={cn(
            'grid',
            `grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols}`,
            gap === 'none' ? '' : gap === 'xs' ? 'gap-1' : gap === 'sm' ? 'gap-2' : gap === 'md' ? 'gap-4' : gap === 'lg' ? 'gap-8' : 'gap-12',
            className
        )}>
            {children}
        </div>
    );
} 