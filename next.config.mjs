import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/learning/weekly-reflections/week-:num',
        destination: '/learning/weekly-reflections/[week]?week=week-:num',
      },
    ]
  },
}
 
const withMDX = createMDX({
})
 
export default withMDX(nextConfig)
