import antfu from '@antfu/eslint-config'

export default antfu(
	{
		astro: true,
		typescript: true,
		formatters: true,
		stylistic: {
			indent: 'tab',
			semi: false,
			quotes: 'single',
		},
	},
	{
		rules: {
			'ts/no-redeclare': 'off',
			'ts/consistent-type-definitions': ['error', 'type'],
			'no-console': ['warn'],
			'antfu/no-top-level-await': ['off'],
			'node/prefer-global/process': ['off'],
			'node/no-process-env': ['error'],
			'perfectionist/sort-imports': ['error', { tsconfigRootDir: '.' }],
			'unicorn/filename-case': [
				'error',
				{ case: 'kebabCase', ignore: ['README.md'] },
			],
			'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
			'@typescript-eslint/no-useless-empty-export': 'error',
		},
	},
)
