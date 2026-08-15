/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // we'll manage theme via class on html
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#818CF8',
          'light-hover': '#A5B4FC',
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8FAFC',
        },
        text: {
          DEFAULT: '#0F172A',
          secondary: '#475569',
          muted: '#64748B',
        },
        border: {
          DEFAULT: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'article': '780px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.DEFAULT'),
            a: { color: theme('colors.accent.DEFAULT') },
            'a:hover': { color: theme('colors.accent.hover') },
            strong: { color: theme('colors.text.DEFAULT') },
            h1: { color: theme('colors.text.DEFAULT') },
            h2: { color: theme('colors.text.DEFAULT') },
            h3: { color: theme('colors.text.DEFAULT') },
            h4: { color: theme('colors.text.DEFAULT') },
            code: { color: theme('colors.text.DEFAULT') },
            blockquote: { borderLeftColor: theme('colors.accent.DEFAULT') },
          },
        },
        dark: {
          css: {
            color: theme('colors.text.primary'),
            a: { color: theme('colors.accent.light') },
            'a:hover': { color: theme('colors.accent.light-hover') },
            strong: { color: theme('colors.text.primary') },
            h1: { color: theme('colors.text.primary') },
            h2: { color: theme('colors.text.primary') },
            h3: { color: theme('colors.text.primary') },
            h4: { color: theme('colors.text.primary') },
            code: { color: theme('colors.text.primary') },
            blockquote: { borderLeftColor: theme('colors.accent.light') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
