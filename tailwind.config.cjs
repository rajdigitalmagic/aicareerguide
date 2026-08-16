// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: 'var(--color-bg)', secondary: 'var(--color-bg-secondary)' },
        text: { primary: 'var(--color-text-primary)', secondary: 'var(--color-text-secondary)', muted: 'var(--color-text-muted)' },
        border: { DEFAULT: 'var(--color-border)' },
        accent: { DEFAULT: 'var(--color-accent)', hover: 'var(--color-accent-hover)' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: { 'article': '780px' },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.secondary'),
            a: {
              color: theme('colors.accent.DEFAULT'),
              textDecoration: 'none',
              '&:hover': { color: theme('colors.accent.hover'), textDecoration: 'underline' },
            },
            strong: { color: theme('colors.text.primary') },
            h1: { color: theme('colors.text.primary') },
            h2: { color: theme('colors.text.primary') },
            h3: { color: theme('colors.text.primary') },
            h4: { color: theme('colors.text.primary') },
            
            /* FIX: Target ONLY inline code so Shiki syntax highlighting isn't destroyed */
            ':not(pre) > code': {
               color: theme('colors.accent.DEFAULT'),
               backgroundColor: theme('colors.bg.secondary'),
               padding: '0.2rem 0.4rem',
               borderRadius: '0.25rem',
               fontWeight: '600',
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
}
