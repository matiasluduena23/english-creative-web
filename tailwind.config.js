/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix: '',
	theme: {
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
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				words: {
					'10%': { transform: 'translateY(-112%)' },
					'25%': { transform: 'translateY(-100%)' },
					'35%': { transform: 'translateY(-212%)' },
					'50%': { transform: 'translateY(-200%)' },
					'60%': { transform: 'translateY(-312%)' },
					'75%': { transform: 'translateY(-300%)' },
					'85%': { transform: 'translateY(-412%)' },
					'100%': { transform: 'translateY(-400%)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				words: 'words 6s infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
