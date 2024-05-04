/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				farahgreen: {
					200: "#B0BCBC",
					250: "#A2ADAD",
					300: "#3B4747",
				},
				farahgray: "#707070",
				farahblack: "#333333"
			},
			fontFamily: {
				'karla': ['Karla', 'sans-serif'],
			},
		},
	},
	plugins: [],
};