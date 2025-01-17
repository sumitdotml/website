import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils/utils';

interface TableOfContentsProps {
  contentId: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ contentId }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const content = document.getElementById(contentId);
    if (!content) return;

    const elements = content.querySelectorAll('h1, h2, h3');
    const items: HeadingItem[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: parseInt(element.tagName[1]),
    }));

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [contentId]);

  return (
    <div className="fixed right-8 top-32 w-64 max-h-[calc(100vh-12rem)] overflow-y-auto hidden xl:block">
      <nav className="space-y-1 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 rounded-lg border">
        <p className="font-medium mb-4 text-sm">On this page</p>
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              'block text-sm py-1 transition-colors duration-200',
              heading.level === 1 && 'pl-0',
              heading.level === 2 && 'pl-4',
              heading.level === 3 && 'pl-8',
              activeId === heading.id
                ? 'text-purple-500'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
} 