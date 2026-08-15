/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enables toggle via the <html class="dark"> script in BaseLayout
  theme: {
    extend: {
      // Map Tailwind's color palette directly to your global.css variables
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          secondary: 'var(--color-bg-secondary)',
        },
        text: {
          primary: 'var(--color-text-primary)', // This fixes the missing reference error
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'article': '780px',
      },
      // Streamlined Typography plugin: It now uses the CSS variables, 
      // so it automatically adapts to Dark Mode without extra config.
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.secondary'),
            a: {
              color: theme('colors.accent.DEFAULT'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.accent.hover'),
                textDecoration: 'underline',
              },
            },
            strong: { color: theme('colors.text.primary') },
            h1: { color: theme('colors.text.primary') },
            h2: { color: theme('colors.text.primary') },
            h3: { color: theme('colors.text.primary') },
            h4: { color: theme('colors.text.primary') },
            code: { 
              color: theme('colors.text.primary'),
              backgroundColor: theme('colors.bg.secondary'),
            },
            blockquote: { 
              borderLeftColor: theme('colors.accent.DEFAULT'),
              color: theme('colors.text.muted'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
