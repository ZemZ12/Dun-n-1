import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily : {
        custom : ['MyCustomFont', 'sans-serif'],
    },
    fontFace: {
      'MyCustomFont' : {
        'fontFamily': 'MyCustomFont',
        'fontStyle': 'normal',
        'fontWeight': 'normal',
        'src': 'url(/fonts/Anton-Regular.ttf) format("truetype")',
      },
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
