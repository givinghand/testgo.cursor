/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				gradient: {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(var(--primary), 0.7)'
					},
					'50%': { 
						opacity: '0.9',
						transform: 'scale(1.03)',
						boxShadow: '0 0 25px 12px rgba(var(--primary), 0.4)'
					}
				},
				'pulse-glow-hover': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1.05)',
						boxShadow: '0 0 15px 8px rgba(var(--primary), 0.5)'
					},
					'50%': { 
						opacity: '0.95',
						transform: 'scale(1.08)',
						boxShadow: '0 0 30px 15px rgba(var(--primary), 0.6)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 3s ease-out',
				'accordion-up': 'accordion-up 3s ease-out',
				'gradient': 'gradient 3s infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'pulse-glow-hover': 'pulse-glow-hover 3s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};