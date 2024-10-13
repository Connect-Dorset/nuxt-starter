const animate = require('tailwindcss-animate')
const daisyui = require('daisyui')

module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx,vue}',
		'./components/**/*.{ts,tsx,vue}',
		'./app/**/*.{ts,tsx,vue}',
		'./src/**/*.{ts,tsx,vue}'
	],
	prefix: '',
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#ea9900',
					secondary: '#e9e9e9',
					accent: '#b5b5b5',
					neutral: '#a0a0a0',
					'base-100': '#111',
					'--rounded-box': '0.7rem',
					'--rounded-btn': '0.7rem',
					'--rounded-badge': '0.7rem',
					'--animation-btn': '0.25s',
					'--animation-input': '0.2s',
					'--btn-focus-scale': '0.99',
					'--border-btn': '1px',
					'--tab-border': '1px',
					'--tab-radius': '0.5rem'
				}
			},
			...(process.env.AVAILABLE_THEMES || 'light,dark').split(',').map((theme) => theme.trim())
		]
	},
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				heading: ['Raleway', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [animate, daisyui]
}
