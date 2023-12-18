/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        p_red: '#EB2B4B',
        p_pink: '#EB2BEB',
        p_blue: '#4444EE',
        p_cyan: '#2BABEB',
        p_green: '#6BEB2B',
        m_red: '#FB5757',
        m_yellow: '#FFBF0C',
        m_green: '#0BD533'
      },
      borderRadius: {
        '2xl': '2em',
        '3xl': '3em',
        '4xl': '4em',
      },
      width: {
        '130': '528px',
      },
      maxWidth: {
        '56': '224px',
        '64': '256px',
        '128': '512px',
        '130': '528px',
      },
      fontSize: {
        '7-5xl': '80px'
      },
      screens: {
        'sm': '580px'
      }
    },


  },
  plugins: [],
}
