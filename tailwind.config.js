/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  'masthead-start': '#1a3673',
		  'masthead-end': '#2b1c49',
		  'masthead-highlight': '#794cfe',
		  'primary': '#1255eb',
		  'card': {
			'blue': '#1A3673',
			'green': '#00853C',
			'purple': '#5E35B1',
			'lightblue': '#1255E8'
		  },
		  'white': '#FFFFFF',
		  'black': '#000000',
		},
		borderRadius: {
		  'full': '100px',
		},
		borderWidth: {
		  '1': '1px',
		},
		spacing: {
		  '44': '2.75rem', // This is the exact value for the button height
		  '174': '10.875rem', // Custom width for WhiteFilledButton and GhostedButton
		  '114': '7.125rem', // Custom width for PrimaryButtonSmall
		},
		opacity: {
		  '75': '0.75',
		},
		fontSize: {
		  // Add custom font sizes if needed
		},
		// Add any other theme extend values as required
	  },
	},
	plugins: [],
  }
  