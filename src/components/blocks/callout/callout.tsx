import { cn } from '@/lib/utils/utils'
import Text from '@/components/ui/text/text'
import { Info, AlertTriangle, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react'
import { monoFont } from '@/styles/fonts/fonts'

interface CalloutProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'purple' | 'orange' | 'green' | 'blue' | 'red';
    title?: string;
    marginTop?: 'none' | 'sm' | 'md' | 'lg';
    marginBottom?: 'none' | 'sm' | 'md' | 'lg';
}

const margins = {
    none: '!m-0',
    sm: '!my-2 sm:!my-2',
    md: '!my-4 sm:!my-4',
    lg: '!my-8 sm:!my-8'
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

const variants = {
    purple: {
        container: 'bg-purple-50 dark:bg-purple-950 text-purple-950 dark:text-purple-50',
        title: 'text-purple-800 dark:text-purple-200 font-bold',
        icon: 'text-purple-700 dark:text-purple-300',
        border: 'border-purple-200 dark:border-purple-800',
        Icon: Lightbulb
    },
    orange: {
        container: 'bg-orange-50 dark:bg-orange-950 text-orange-950 dark:text-orange-50',
        title: 'text-orange-800 dark:text-orange-200 font-bold',
        icon: 'text-orange-700 dark:text-orange-300',
        border: 'border-orange-200 dark:border-orange-800',
        Icon: AlertTriangle
    },
    red: {
        container: 'bg-red-50 dark:bg-red-950 text-red-950 dark:text-red-50',
        title: 'text-red-800 dark:text-red-200 font-bold',
        icon: 'text-red-700 dark:text-red-300',
        border: 'border-red-200 dark:border-red-800',
        Icon: AlertCircle
    },
    green: {
        container: 'bg-emerald-50/80 dark:bg-green-950 text-emerald-800 dark:text-green-50',
        title: 'text-emerald-700 dark:text-green-200 font-bold',
        icon: 'text-emerald-600 dark:text-green-300',
        border: 'border-emerald-200 dark:border-green-800',
        Icon: CheckCircle2
    },
    blue: {
        container: 'bg-blue-50 dark:bg-blue-950 text-blue-950 dark:text-blue-50',
        title: 'text-blue-800 dark:text-blue-200 font-bold',
        icon: 'text-blue-700 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-800',
        Icon: Info
    }
}

export default function Callout({ 
    children, 
    className,
    variant = 'purple',
    title,
    marginTop: mt,
    marginBottom: mb
}: CalloutProps) {
    const IconComponent = variants[variant].Icon
    const spacing = mt || mb ? null : 'md'
    
    return (
        <div className={cn(
            monoFont.className,
            'relative p-4 rounded-lg border',
            variants[variant].container,
            variants[variant].border,
            spacing && margins[spacing],
            mt && marginTop[mt],
            mb && marginBottom[mb],
            className
        )}>
            {title && (
                <div className="flex items-center gap-2.5 mb-2.5">
                    <IconComponent size={18} className={cn(variants[variant].icon)} strokeWidth={2.5} />
                    <Text weight="bold" size="sm" className={cn(variants[variant].title)}>{title}</Text>
                </div>
            )}
            <div className="ml-[26px]">
                <Text className={cn("leading-relaxed", variants[variant].container)}>{children}</Text>
            </div>
        </div>
    )
}