interface FooterSectionProps {
    children: React.ReactNode;
}

export function FooterSection({ children }: FooterSectionProps) {
    return (
        <div className="flex items-center gap-1 sm:gap-2">
            {children}
        </div>
    )
} 