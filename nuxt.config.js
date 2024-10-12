// eslint-disable-next-line no-undef
export default defineNuxtConfig({
	compatibilityDate: '2024-10-12',
	devtools: { enabled: true },
	modules: [
		'@nuxt/eslint',
		'@nuxtjs/tailwindcss',
		'@vueuse/nuxt',
		'@nuxt/fonts',
		'@nuxtjs/seo',
		'@nuxt/scripts',
		'@nuxt/icon',
		'@formkit/auto-animate/nuxt',
		'@nuxtjs/color-mode',
		'@nuxt/content'
	],
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-GB'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
				{ name: 'theme-color', content: '#F4F4F5' },
				{ name: 'msapplication-TileColor', content: '#F4F4F5' },
				{ name: 'mobile-web-app-capable', content: 'yes' },
				{
					hid: 'keywords',
					name: 'keywords',
					content: process.env.WEBSITE_TAGS || 'website, hybes, nuxt, nuxtjs, starter'
				},
				{
					hid: 'description',
					name: 'description',
					content: process.env.WEBSITE_DESCRIPTION || "Welcome to Hybes's Nuxt Starter"
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: process.env.WEBSITE_NAME || "Hybes's Nuxt Starter"
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: process.env.WEBSITE_DESCRIPTION || "Welcome to Hybes's Nuxt Starter"
				},
				{ hid: 'og:url', name: 'og:url', content: `https://${process.env.WEBSITE_URL || 'localhost:3000'}` },
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: process.env.WEBSITE_NAME || "Hybes's Nuxt Starter"
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: process.env.WEBSITE_DESCRIPTION || "Welcome to Hybes's Nuxt Starter"
				}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
			script: [
				{
					hid: 'umami-script',
					src: 'https://view.cnnct.uk/script.js',
					async: true,
					'data-website-id': process.env.UMAMI_WEBSITE_ID
				}
			]
		},
		pageTransition: { name: 'fade', mode: 'out-in' }
	},
	site: {
		url: `https://${process.env.WEBSITE_URL || 'localhost:3000'}`,
		name: process.env.WEBSITE_NAME || "Hybes's Nuxt Starter",
		description: process.env.WEBSITE_DESCRIPTION || "Welcome to Hybes's Nuxt Starter",
		defaultLocale: 'en'
	},
	seo: {
		redirectToCanonicalSiteUrl: true
	},
	colorMode: {
		preference: process.env.THEME || 'light',
		fallback: process.env.THEME || 'light',
		classSuffix: '-mode',
		dataValue: 'theme',
		storage: 'localStorage',
		storageKey: (process.env.WEBSITE_NICKNAME || 'hybes') + '-theme'
	},
	eslint: {
		config: {
			stylistic: false
		}
	},
	runtimeConfig: {
		public: {
			motion: {
				directives: {
					slide: {
						initial: {
							opacity: 0,
							y: 40
						},
						visibleOnce: {
							opacity: 1,
							y: 0
						}
					}
				}
			}
		}
	}
})
