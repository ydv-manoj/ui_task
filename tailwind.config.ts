// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        background: '#fafafa',
        border: '#ebebeb',
        primary: {
          DEFAULT: '#027056',
          dark: '#031b15',
          light: '#dfeae8',
        },
        gray: {
          100: '#f7f7f7',
          200: '#f1f1f1',
          300: '#ededed',
          400: '#d9d9d9',
          500: '#8c9198',
          600: '#6b7583',
          700: '#7d7d7e',
          800: '#515153',
          900: '#4f4d55',
        },
        yellow: {
          DEFAULT: '#f8cb46',
          dark: '#f7c245',
        },
        red: {
          DEFAULT: '#ea6153',
          dark: '#e25d33',
          error: '#f31d1d',
          light: '#db3500',
        },
        green: {
          DEFAULT: '#1d874f',
          dark: '#013025',
          light: '#2eb76f',
          success: '#139c53',
        },
        purple: {
          DEFAULT: '#6c4fed',
          dark: '#9106ff',
        },
        blue: {
          DEFAULT: '#0f5aff',
          light: '#3e7afd',
        },
        teal: {
          DEFAULT: '#309e96',
          dark: '#01ab82',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
      },
    },
  },
  plugins: [],
};

export default config;