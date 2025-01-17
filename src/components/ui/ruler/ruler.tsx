import { cn } from '@/lib/utils/utils'

interface RulerProps {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    weight?: 'thin' | 'normal' | 'slightlyThick' | 'thick' | 'heavy';
    color?: 'default' | 'muted' | 'purple' | 'gray' | 'white' | 'colorless';
    marginTop?: 'none' | 'sm' | 'md' | 'lg';
    marginBottom?: 'none' | 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const weights = {
    thin: 'border-[0.5px]',
    normal: 'border-[1px]',
    slightlyThick: 'border-[1.5px]',
    thick: 'border-[2px]',
    heavy: 'border-[4px]'
}

const colors = {
    default: 'border-border',
    muted: 'border-muted',
    purple: 'border-purple-300',
    gray: 'border-gray-300',
    white: 'border-white',
    colorless: 'border-transparent'
}

const marginTop = {
    none: '!mt-0',
    sm: '!mt-2 sm:!mt-2',
    md: '!mt-4 sm:!mt-4',
    lg: '!mt-8 sm:!mt-8'
}

const marginBottom = {
    none: '!mb-0',
    sm: '!mb-2 sm:!mb-2',
    md: '!mb-4 sm:!mb-4',
    lg: '!mb-8 sm:!mb-8'
}

const verticalSpacings = {
    none: 'mx-0',
    sm: 'mx-2',
    md: 'mx-4',
    lg: 'mx-8'
}

export default function Ruler({ 
    className,
    orientation = 'horizontal',
    weight = 'normal',
    color = 'gray',
    marginTop: mt = 'md',
    marginBottom: mb = 'md',
    fullWidth = true
}: RulerProps) {
    const isHorizontal = orientation === 'horizontal'
    
    return (
        <div 
            className={cn(
                'border-0',
                isHorizontal ? 'w-full border-t' : 'h-full border-l',
                weights[weight],
                colors[color],
                isHorizontal ? [marginTop[mt], marginBottom[mb]] : verticalSpacings[mt],
                !fullWidth && 'w-1/2 mx-auto',
                'transition-colors duration-200',
                className
            )}
            role="separator"
            aria-orientation={orientation}
        />
    )
} 