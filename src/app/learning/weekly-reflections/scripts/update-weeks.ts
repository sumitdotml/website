/**
 * This script updates the weeks.ts file based on the content in the content folder
 * I can run it with: npx tsx src/app/learning/weekly-reflections/scripts/update-weeks.ts
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Week {
  title: string;
  href: string;
  date: Date;
}

const contentDir = path.join(process.cwd(), 'src/app/learning/weekly-reflections/content');
const weeksFilePath = path.join(process.cwd(), 'src/app/learning/weekly-reflections/_data/weeks.ts');

// Read all MDX files from the content directory
const contentFiles = fs.readdirSync(contentDir)
  .filter(file => file.endsWith('.mdx'))
  .sort((a, b) => {
    // Sort by week number in descending order
    const weekA = parseInt(a.replace('week-', '').replace('.mdx', ''));
    const weekB = parseInt(b.replace('week-', '').replace('.mdx', ''));
    return weekB - weekA;
  });

const weeks: Week[] = [];

// Process each file to extract title and date information
contentFiles.forEach(file => {
  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const weekNumber = file.replace('week-', '').replace('.mdx', '');
  
  // Extract the title and date range from the MDX frontmatter or content
  const { content: mdxContent } = matter(content);
  const titleMatch = mdxContent.match(/# Week \d+, \d{4} \((.*?)\)/);
  
  if (titleMatch) {
    const dateRange = titleMatch[1];
    const title = `Week ${weekNumber}, 2025 (${dateRange})`;
    const weekPath = `/learning/weekly-reflections/week-${weekNumber}`;
    
    // Try to extract end date from the date range
    const dateMatch = dateRange.match(/(\w+) (\d+)/g);
    let endDate = new Date();
    
    if (dateMatch && dateMatch.length > 1) {
      const lastDate = dateMatch[dateMatch.length - 1]; // Get the last date in the range
      const [month, day] = lastDate.split(' ');
      
      // Convert month to number
      const monthMap: {[key: string]: number} = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      
      if (monthMap[month] !== undefined) {
        // Set the time to noon to avoid timezone issues
        endDate = new Date(2025, monthMap[month], parseInt(day), 12, 0, 0);
      }
    }
    
    weeks.push({
      title,
      href: weekPath,
      date: endDate
    });
  }
});

// Generate the updated weeks.ts file content
const fileContent = `interface Week {
	title: string;
	href: string;
	date: Date;
}

interface MonthGroup {
	month: string;
	weeks: Week[];
}

const weeks: Week[] = [
${weeks.map(week => `	{
		title: '${week.title}',
		href: '${week.href}',
		date: new Date('${week.date.getFullYear()}-${String(week.date.getMonth() + 1).padStart(2, '0')}-${String(week.date.getDate()).padStart(2, '0')}T12:00:00.000Z')
	}`).join(',\n')}
]

export function getWeeksByMonth(): MonthGroup[] {
	const groupedWeeks = weeks.reduce((acc: { [key: string]: Week[] }, week) => {
		const monthYear = week.date.toLocaleString('ja-JP', { month: 'long', year: 'numeric' });
		if (!acc[monthYear]) {
			acc[monthYear] = [];
		}
		acc[monthYear].push(week);
		return acc;
	}, {});

	return Object.entries(groupedWeeks).map(([month, weeks]) => ({
		month,
		weeks
	})).sort((a, b) => {
		const [aMonth, aYear] = a.month.split(' ');
		const [bMonth, bYear] = b.month.split(' ');
		if (aYear !== bYear) return parseInt(bYear) - parseInt(aYear);
		return new Date(Date.parse(\`\${bMonth} 1, 2000\`)).getMonth() - 
			   new Date(Date.parse(\`\${aMonth} 1, 2000\`)).getMonth();
	});
}

export { weeks };
`;

// Write the updated content to weeks.ts
fs.writeFileSync(weeksFilePath, fileContent, 'utf8');

console.log('Updated weeks.ts file successfully!');