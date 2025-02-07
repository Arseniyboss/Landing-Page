import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--dark)',
        blue: 'var(--blue)',
        darkblue: 'var(--darkblue)',
      },
      boxShadow: {
        'custom-shadow': 'var(--box-shadow)',
      },
      height: {
        header: 'var(--header-height)',
        section: 'var(--section-height)',
      },
      spacing: {
        'header-height': 'var(--header-height)',
      },
      gridTemplateColumns: {
        '2': 'repeat(2, auto)',
      },
    },
  },
  plugins: [],
} satisfies Config
