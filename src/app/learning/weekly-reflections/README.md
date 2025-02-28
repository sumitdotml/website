# Weekly Reflections - Dynamic System

This directory contains a dynamic system for weekly reflections. This approach allows me to easily add new weekly reflections without having to create and copy multiple files each time.

## Adding a New Weekly Reflection

### 1. Create an MDX file

Create a new MDX file in the `content` directory with the name format `week-X.mdx`:

```bash
touch src/app/learning/weekly-reflections/content/week-X.mdx
```

Where `X` is the week number (e.g., `week-9.mdx`).

### 2. Add Content to the MDX File

Then I can add content to the MDX file. I can use the following template:

```md
# Week X, 2025 (Month Day - Month Day)

My content goes here.
```

### 3. Update the `weeks.ts` File

I can update the `weeks.ts` file with either:

#### Option A: Manually update weeks.ts

This adds a new entry at the top of the `weeks` array:

```typescript
{
  title: 'Week X, 2025 (Month Day - Month Day)',
  href: '/learning/weekly-reflections/week-X',
  date: new Date('YYYY-MM-DD') // End date of the week
},
```

#### Option B: Automatically update weeks.ts (Recommended)

I can run the update script with one of these commands:

```bash
# JavaScript version (easier)
node src/app/learning/weekly-reflections/scripts/update-weeks.js

# TypeScript version (alternative)
npx tsx src/app/learning/weekly-reflections/scripts/update-weeks.ts
```

This script will:
1. Scan the `content` directory for all MDX files
2. Extract titles and date information from each file
3. Automatically update the `weeks.ts` file

## How It Works

The system uses Next.js dynamic routes to generate pages for each week. The `[week]` directory contains the dynamic route handler that:

1. Loads the appropriate MDX content
2. Generates metadata
3. Renders the content directly with my site's MDX components

This approach maintains my existing site structure and appearance while reducing repetitive work.

## Content Organization

All my weekly reflection content is stored in individual MDX files in the `content` directory:

- `content/week-1.mdx`
- `content/week-2.mdx`
- `content/week-3.mdx`
- and so on...

The URLs for the weekly reflections remain the same (e.g., `/learning/weekly-reflections/week-1`), but they now point to the new dynamic system.