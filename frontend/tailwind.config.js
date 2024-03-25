/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    // themes: ['light', 'dark', 'cyberpunk', 'forest', 'aqua'],
    themes: [
      {
        light: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
          ...require('daisyui/src/theming/themes')['light'],
          body: {
            background: 'url(./assets/light-bg.svg)',
            'background-color': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center',
          },
        },
        dark: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
          ...require('daisyui/src/theming/themes')['dark'],
          body: {
            background: 'url(./assets/dark-bg.svg)',
            'background-color': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center',
          },
        },
        cyberpunk: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
          ...require('daisyui/src/theming/themes')['cyberpunk'],
          body: {
            background: 'url(./assets/cyberpunk-bg.svg)',
            'background-color': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center',
          },
        },
        forest: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
          ...require('daisyui/src/theming/themes')['forest'],
          body: {
            background: 'url(./assets/forest-bg.svg)',
            'background-color': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center',
          },
        },
        aqua: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
          ...require('daisyui/src/theming/themes')['aqua'],
          body: {
            background: 'url(./assets/aqua-bg.svg)',
            'background-color': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center',
          },
        },
      },
    ],
  },
};
