/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				farahgreen: {
					'50': '#f7f8f8',
					'100': '#eef0f0',
					'200': '#d9dede',
					'300': '#b0bcbc',
					'400': '#90a0a0',
					'500': '#728585',
					'600': '#5c6c6d',
					'700': '#4b5959',
					'800': '#414b4b',
					'900': '#394141',
					'950': '#262b2b',
				},
				farahgray: {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#707070',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#262626',
				}
			},
			fontFamily: {
				'karla': ['Karla', 'sans-serif'],
			},
		},
	},
	plugins: [],
};