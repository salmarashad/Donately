/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				farahgreen: {
					200: "#B0BCBC",
					300: "#3B4747",
				},
				farahgray: {
					200: "#E5E6E1"
				}
			},
		},
	},
	plugins: [],
};