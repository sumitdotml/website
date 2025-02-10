import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'

interface TextProps {
    children: React.ReactNode;
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    variant?: 'default' | 'purple' | 'blue' | 'green' | 'red' | 'orange' | 'muted' | 'caption';
    align?: 'left' | 'center' | 'right' | 'justify';
    transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    truncate?: boolean;
}

// Define types for the default styles
type TextSize = NonNullable<TextProps['size']>
type TextWeight = NonNullable<TextProps['weight']>
type TextVariant = NonNullable<TextProps['variant']>
type TextAlign = NonNullable<TextProps['align']>
type TextTransform = NonNullable<TextProps['transform']>

// Default styles that will be applied to every Text component
const defaultStyles = {
    size: 'sm' as TextSize,
    weight: 'normal' as TextWeight,
    variant: 'default' as TextVariant,
    align: 'left' as TextAlign,
    transform: 'none' as TextTransform,
    truncate: false
}

const textSizes = {
    xs: 'text-[10px] sm:text-xs md:text-xs',           // 10px -> 12px -> 12px
    sm: 'text-xs sm:text-sm md:text-sm',               // 12px -> 14px -> 14px
    md: 'text-[13px] sm:text-[15px] md:text-[15px]',   // 13px -> 15px -> 15px
    base: 'text-sm sm:text-base md:text-base',         // 14px -> 16px -> 16px
    lg: 'text-base sm:text-lg md:text-lg',             // 16px -> 18px -> 18px
    xl: 'text-lg sm:text-xl md:text-xl',               // 18px -> 20px -> 20px
    '2xl': 'text-xl sm:text-2xl md:text-2xl',          // 20px -> 24px -> 24px
}

const fontWeights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
}

const variants = {
    default: 'text-foreground dark:text-white',
    purple: 'text-purple-600 dark:text-purple-400',
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    red: 'text-red-600 dark:text-red-400',
    orange: 'text-orange-600 dark:text-orange-400',
    muted: 'text-muted-foreground dark:text-gray-400',
    caption: 'text-xs text-muted-foreground dark:text-gray-400'
}

const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
}

const transforms = {
    none: '',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize'
}

export default function Text({ 
    children, 
    className,
    size = defaultStyles.size,
    weight = defaultStyles.weight,
    variant = defaultStyles.variant,
    align = defaultStyles.align,
    transform = defaultStyles.transform,
    truncate = defaultStyles.truncate
}: TextProps) {
    // Use the provided value or fall back to default
    const finalSize = size || defaultStyles.size
    const finalWeight = weight || defaultStyles.weight
    const finalVariant = variant || defaultStyles.variant
    const finalAlign = align || defaultStyles.align
    const finalTransform = transform || defaultStyles.transform

    return (
        <p className={cn(
            monoFont.className,
            textSizes[finalSize],
            fontWeights[finalWeight],
            variants[finalVariant],
            alignments[finalAlign],
            transforms[finalTransform],
            truncate && 'truncate',
            className
        )}>
            {children}
        </p>
    );
} 