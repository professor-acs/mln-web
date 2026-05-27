import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a1a',
          800: '#0f0f2a',
          700: '#14143a',
          600: '#1a1a4a',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c96d',
          dark: '#a07a30',
          muted: 'rgba(201,168,76,0.3)',
        },
        crimson: {
          DEFAULT: '#c0392b',
          light: '#e74c3c',
          dark: '#8B0000',
        },
        cream: '#f0ece4',
        neon: {
          blue: '#00d4ff',
          purple: '#7c3aed',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
        'draw-line': 'drawLine 2s ease forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(201,168,76,0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
