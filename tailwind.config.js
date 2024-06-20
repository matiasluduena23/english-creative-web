/** @type {import('tailwindcss').Config} */
export const darkMode = ['class'];
export const content = [
	'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
];
export const prefix = '';
export const theme = {
	container: {
		center: true,
		padding: '2rem',
		screens: {
			'2xl': '1400px',
		},
	},
	fontFamily: {
		Baloo: ['"Baloo Tammudu 2"', 'system-ui'],
		OpenSans: ['Open Sans'],
	},
	extend: {
		colors: {
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			darkBlue: 'hsl(var(--dark-blue))',
			softBlue: 'hsl(var(--soft-blue))',
			lightBlue: 'hsl(var(--light-blue))',
			darkRed: 'hsl(var(--dark-red))',
			softRed: 'hsl(var(--soft-red))',
			lightRed: 'hsl(var(--light-red))',
			darkOrange: 'hsl(var(--dark-orange))',
			softOrange: 'hsl(var(--soft-orange))',
			lightOrange: 'hsl(var(--light-orange))',
			darkGreen: 'hsl(var(--dark-green))',
			softGreen: 'hsl(var(--soft-green))',
			lightGreen: 'hsl(var(--light-green))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))',
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))',
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))',
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))',
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))',
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))',
			},
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))',
			},
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
		},

		keyframes: {
			navbar: {
				from: { top: '-100%' },
				to: { top: '0' },
			},
			videFadeIn: {
				from: { opacity: 0 },
				to: { opacity: 1 },
			},
		},
		animation: {
			navbar: 'navbar 0.2s ease-in',
			videFadeIn: 'videoFadeIn .5s ',
		},
	},
	plugins: [require('tailwindcss-animated')],
};
export const plugins = [require('tailwindcss-animate')];
