const config = {
	content: ["./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
			},
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
				platypi: ["Platypi", "sans-serif"],
			},
		},
	},
}

export default config
