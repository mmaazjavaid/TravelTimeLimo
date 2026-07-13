/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['var(--font-display)', 'Georgia', 'serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			colors: {
				ink: {
					DEFAULT: '#0b0d12',
					soft: '#14171f',
					muted: '#1c202b',
				},
				gold: {
					DEFAULT: '#a9814a',
					light: '#c9a06a',
					dark: '#5c4a2e',
				},
				graphite: {
					DEFAULT: '#4b4f58',
					light: '#71757d',
				},
				surface: {
					DEFAULT: '#f7f6f3',
					elevated: '#ffffff',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 8px)',
			},
			boxShadow: {
				soft: 'var(--shadow-soft)',
				lift: 'var(--shadow-lift)',
				gold: 'var(--shadow-gold)',
			},
			transitionTimingFunction: {
				'expo-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
			keyframes: {
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.96)' },
					to: { opacity: '1', transform: 'scale(1)' },
				},
			},
			animation: {
				'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
				'fade-in': 'fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
				'scale-in': 'scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
