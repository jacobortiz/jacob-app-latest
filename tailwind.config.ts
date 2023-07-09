import { Config } from "tailwindcss";

import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-graphik)'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;



// import type { Config } from 'tailwindcss';
// import typography from '@tailwindcss/typography';

// export default {
//   content: [
//     './app/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './content/**/*.mdx',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-graphik)'],
//       },
//       typography: {
//         quoteless: {
//           css: {
//             'blockquote p:first-of-type::before': { content: 'none' },
//             'blockquote p:first-of-type::after': { content: 'none' },
//           },
//         },
//       },
//     },
//   },
//   future: {
//     hoverOnlyWhenSupported: true,
//   },
//   plugins: [typography],
// } satisfies Config;
