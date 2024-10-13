// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default withNuxt([
	{
		ignores: ['lib/**/*', 'components/ui/**/*', '.nuxt/**/*']
	},
	...compat.extends('eslint:recommended', 'plugin:prettier/recommended'),
	{
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

			'no-undef': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'vue/no-use-v-if-with-v-for': 'off',
			'vue/no-v-html': 'off'
		}
	}
])
