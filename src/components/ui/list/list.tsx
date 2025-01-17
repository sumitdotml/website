import { cn } from '@/lib/utils/utils'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import { monoFont } from '@/styles/fonts/fonts'
interface ListProps {
    children: React.ReactNode;
    className?: string;
    type?: 'unordered' | 'ordered';
    variant?: 'default' | 'compact';
    marker?: 'disc' | 'circle' | 'square' | 'decimal' | 'none';
    spacing?: 'tight' | 'normal' | 'relaxed';
    fontSize?: 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl';
    paddingLeft?: 'sm' | 'md' | 'lg' | 'xs' | 'none';
}

interface ListItemProps {
    children: React.ReactNode;
    className?: string;
}

const listFontClass = monoFont.className

const listFontSize = {
    xs: 'text-[10px] sm:text-xs md:text-xs',           // 10px -> 12px -> 12px
    sm: 'text-xs sm:text-sm md:text-sm',               // 12px -> 14px -> 14px
    md: 'text-sm sm:text-base md:text-base',           // 14px -> 16px -> 16px
    base: 'text-sm sm:text-base md:text-base',         // 14px -> 16px -> 16px
    lg: 'text-base sm:text-lg md:text-lg',             // 16px -> 18px -> 18px
    xl: 'text-lg sm:text-xl md:text-xl',               // 18px -> 20px -> 20px
    '2xl': 'text-xl sm:text-2xl md:text-2xl'           // 20px -> 24px -> 24px
}

const spacingStyles = {
    tight: 'space-y-0.5 sm:space-y-1',
    normal: 'space-y-1 sm:space-y-2',
    relaxed: 'space-y-2 sm:space-y-3'
}

const markerStyles = {
    disc: 'list-disc',
    circle: 'list-circle',
    square: 'list-square',
    decimal: 'list-decimal',
    none: 'list-none'
}

const paddingLeftStyles = {
    sm: 'pl-1 sm:pl-2',
    md: 'pl-2 sm:pl-4',
    lg: 'pl-4 sm:pl-6',
    xs: 'pl-0.5 sm:pl-1',
    none: 'pl-0'
}

export function List({ 
    children, 
    className,
    type = 'unordered',
    variant = 'default',
    marker = 'disc',
    spacing = 'normal',
    fontSize = 'sm',
    paddingLeft = 'md'
}: ListProps) {
    const Component = type === 'ordered' ? 'ol' : 'ul'
    
    return (
        <Component
            className={cn(
                'ml-4 sm:ml-6',
                markerStyles[marker],
                spacingStyles[spacing],
                variant === 'compact' && 'text-sm',
                listFontClass,
                listFontSize[fontSize],
                paddingLeftStyles[paddingLeft],
                className
            )}
        >
            {children}
        </Component>
    )
}

export function ListItem({ children, className }: ListItemProps) {
    return (
        <li className={cn(
            'pl-1 sm:pl-2', // Reduced padding on mobile
            'marker:text-muted-foreground dark:marker:text-gray-400',
            listFontClass,
            className
        )}>
            {children}
        </li>
    )
}

// Example of a nested list component for better organization
export function NestedList({ 
    items 
}: { 
    items: {
        content: React.ReactNode;
        subitems?: React.ReactNode[];
    }[] 
}) {
    return (
        <List>
            {items.map((item, index) => (
                <StackVertical key={index} gap="sm">
                    <ListItem>{item.content}</ListItem>
                    {item.subitems && (
                        <List marker="circle" spacing="tight" className="ml-4">
                            {item.subitems.map((subitem, subIndex) => (
                                <ListItem key={subIndex}>{subitem}</ListItem>
                            ))}
                        </List>
                    )}
                </StackVertical>
            ))}
        </List>
    )
} 