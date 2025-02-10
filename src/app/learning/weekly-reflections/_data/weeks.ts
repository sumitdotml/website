interface Week {
	title: string;
	href: string;
	date: Date;
}

interface MonthGroup {
	month: string;
	weeks: Week[];
}

const weeks: Week[] = [
	{
		title: 'Week 6, 2025 (Feb 3 - Feb 9)',
		href: '/learning/weekly-reflections/week-6',
		date: new Date('2025-02-09')
	},
	{
		title: 'Week 5, 2025 (Jan 27 - Feb 2)',
		href: '/learning/weekly-reflections/week-5',
		date: new Date('2025-02-02')
	},
	{
		title: 'Week 4, 2025 (Jan 20 - Jan 26)',
		href: '/learning/weekly-reflections/week-4',
		date: new Date('2025-01-26')
	},
	{
		title: 'Week 3, 2025 (Jan 14 - Jan 19)',
		href: '/learning/weekly-reflections/week-3',
		date: new Date('2025-01-19')
	},
	{ 
		title: 'Week 2, 2025 (Jan 6 - Jan 12)',
		href: '/learning/weekly-reflections/week-2',
		date: new Date('2025-01-12')
	},
	{ 
		title: 'Week 1, 2025 (Jan 1 - Jan 5)',
		href: '/learning/weekly-reflections/week-1',
		date: new Date('2025-01-05')
	}
]

// Group weeks by month
export function getWeeksByMonth(): MonthGroup[] {
	const groupedWeeks = weeks.reduce((acc: { [key: string]: Week[] }, week) => {
		const monthYear = week.date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
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
		// Sort months in reverse chronological order
		const [aMonth, aYear] = a.month.split(' ');
		const [bMonth, bYear] = b.month.split(' ');
		if (aYear !== bYear) return parseInt(bYear) - parseInt(aYear);
		return new Date(Date.parse(`${bMonth} 1, 2000`)).getMonth() - 
			   new Date(Date.parse(`${aMonth} 1, 2000`)).getMonth();
	});
}

export { weeks };
