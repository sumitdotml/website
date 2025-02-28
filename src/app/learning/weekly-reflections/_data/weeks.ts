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
		title: 'Week 8, 2025 (Feb 17 - Feb 23)',
		href: '/learning/weekly-reflections/week-8',
		date: new Date('2025-02-23T12:00:00.000Z')
	},
	{
		title: 'Week 7, 2025 (Feb 10 - Feb 16)',
		href: '/learning/weekly-reflections/week-7',
		date: new Date('2025-02-16T12:00:00.000Z')
	},
	{
		title: 'Week 6, 2025 (Feb 3 - Feb 9)',
		href: '/learning/weekly-reflections/week-6',
		date: new Date('2025-02-09T12:00:00.000Z')
	},
	{
		title: 'Week 5, 2025 (Jan 27 - Feb 2)',
		href: '/learning/weekly-reflections/week-5',
		date: new Date('2025-02-02T12:00:00.000Z')
	},
	{
		title: 'Week 4, 2025 (Jan 20 - Jan 26)',
		href: '/learning/weekly-reflections/week-4',
		date: new Date('2025-01-26T12:00:00.000Z')
	},
	{
		title: 'Week 3, 2025 (Jan 14 - Jan 19)',
		href: '/learning/weekly-reflections/week-3',
		date: new Date('2025-01-19T12:00:00.000Z')
	},
	{
		title: 'Week 2, 2025 (Jan 6 - Jan 12)',
		href: '/learning/weekly-reflections/week-2',
		date: new Date('2025-01-12T12:00:00.000Z')
	},
	{
		title: 'Week 1, 2025 (Jan 1 - Jan 5)',
		href: '/learning/weekly-reflections/week-1',
		date: new Date('2025-01-05T12:00:00.000Z')
	}
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
		return new Date(Date.parse(`${bMonth} 1, 2000`)).getMonth() - 
			   new Date(Date.parse(`${aMonth} 1, 2000`)).getMonth();
	});
}

export { weeks };
