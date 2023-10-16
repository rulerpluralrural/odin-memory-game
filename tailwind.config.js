/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			"press-start": ['"Press Start 2P"', "system-ui"],
		},
		extend: {
			keyframes: {
				slideLeft: {
					"50%": { transform: "translateX(-5px)" },
					"100%": { transform: "translateX(0)" },
				},
				slideRight: {
					"50%": { transform: "translateX(5px)" },
					"100%": { transform: "translateX(0)" },
				},
				flip: {
					"50%": { transform: "rotateY(180deg)" },
					"100%": { transform: "rotateY(0)" },
				},
				scale: {
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
				fadeIn: {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1", 
					},
				},
			},
			animation: {
				slideLeft: "slideLeft 1s ease-in-out infinite",
				slideRight: "slideRight 1s ease-in-out infinite",
				flip: "flip 1s ease-in-out",
				scale: "scale .8s ease-in",
        fadeIn: "fadeIn .8s ease-in"
			},
		},
	},
	plugins: [],
};
