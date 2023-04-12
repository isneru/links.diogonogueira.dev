/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				dark: "#18181b",
				light: "#ffffff",
				primary: {
					50: "#f7f6f9",
					100: "#edecf2",
					200: "#d7d4e3",
					300: "#b4afca",
					400: "#8a84ac",
					500: "#6c6592",
					600: "#585079",
					700: "#4c4568",
					800: "#3e3953",
					900: "#373347",
					950: "#25222f"
				}
			}
		}
	},
	plugins: []
}
