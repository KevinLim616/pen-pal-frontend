/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#3b8aff',
				myBlack: '#222222',
				myGray: '#9f9f9f'
			}
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			handwrite: 'Comic Neue'
		}
	},
	plugins: [require('daisyui'), require('flowbite/plugin')],
	daisyui: {
		theme: false
	}
};
