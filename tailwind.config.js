const animate = require('tailwindcss-animate')
const daisyui = require('daisyui')

module.exports = {
	darkMode: ['class'],
	safelist: ['dark'],
	prefix: '',
	daisyui: {
		themes: (process.env.AVAILABLE_THEMES || 'light').split(',').map((theme) => theme.trim())
	},
	theme: {},
	plugins: [animate, daisyui]
}
