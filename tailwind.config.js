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
					primary: '#a991f7',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ea9900',
					'--rounded-box': '99rem',
					'--rounded-btn': '99rem',
					'--rounded-badge': '99rem',
					'--animation-btn': '0.25s',
					'--animation-input': '0.2s',
					'--btn-focus-scale': '0.95',
					'--border-btn': '1px',
					'--tab-border': '9px',
					'--tab-radius': '99rem'
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
				sans: ['Raleway', 'sans-serif']
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
