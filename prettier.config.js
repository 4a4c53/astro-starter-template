/** @type {import("prettier").Config} */
export default {
	semi: false,
	useTabs: true,
	singleQuote: true,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-astro-organize-imports',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
