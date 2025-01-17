import { cn } from '@/lib/utils/utils'

interface BaseContainerProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    paddingX?: 'none' | 'sm' | 'md' | 'lg';
    paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    center?: boolean;
    className?: string;
}

const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
    full: 'max-w-full'
}

const paddingX = {
    none: 'px-0',
    sm: 'px-2 sm:px-3 md:px-4',
    md: 'px-3 sm:px-4 md:px-6',
    lg: 'px-4 sm:px-6 md:px-8'
}

const paddingY = {
    none: 'py-0',
    sm: 'py-2 sm:py-3 md:py-4',
    md: 'py-3 sm:py-4 md:py-6',
    lg: 'py-4 sm:py-6 md:py-8',
    xl: 'py-6 sm:py-8 md:py-12'
}

export default function BaseContainer({ 
    children, 
    size = 'md',
    paddingX: px = 'md',
    paddingY: py = 'md',
    center = false,
    className 
}: BaseContainerProps) {
    return (
        <div className={cn(
            'mx-auto w-full',
            sizes[size],
            paddingX[px],
            paddingY[py],
            center && 'text-center',
            className
        )}>
            {children}
        </div>
    )
} 