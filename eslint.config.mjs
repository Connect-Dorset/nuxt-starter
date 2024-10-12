// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	files: ['**/*.js', '**/*.vue'],
	ignores: ['lib/**/*', 'components/ui/**/*', '.nuxt/**/*'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'none',
				bracketSpacing: true,
				printWidth: 120,
				endOfLine: 'auto'
			}
		],
		'css/unknown-at-rules': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'vue/no-use-v-if-with-v-for': 'off',
		'vue/no-v-html': 'off'
	}
})
