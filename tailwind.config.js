const animate = require('tailwindcss-animate')
const daisyui = require('daisyui')

module.exports = {
	darkMode: ['class'],
	safelist: ['dark'],
	prefix: '',
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#a991f7',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff',
					'--rounded-box': '1rem',
					'--rounded-btn': '0.5rem',
					'--rounded-badge': '1.9rem',
					'--animation-btn': '0.25s',
					'--animation-input': '0.2s',
					'--btn-focus-scale': '0.95',
					'--border-btn': '1px',
					'--tab-border': '1px',
					'--tab-radius': '0.5rem'
				}
			},
			...(process.env.AVAILABLE_THEMES || 'light,dark').split(',').map((theme) => theme.trim())
		]
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', 'sans-serif']
			}
		}
	},
	plugins: [animate, daisyui]
}
