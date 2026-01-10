/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                coffee: {
                    50: '#F6E5CD', // User Requested Light BG
                    100: '#FFF8E7', // Very Light Cream (Text on Dark)
                    200: '#EBD4B4',
                    300: '#D8BFA0',
                    400: '#C59F70',
                    500: '#B37A40', // Primary Bronze
                    600: '#8F5E30',
                    700: '#6B4423',
                    800: '#5d4136ff',
                    900: '#432f26ff',
                    950: '#47362E', // User Requested Dark BG
                    1000: '#5D463D',
                },
                primary: '#b37a40',
                dark: '#23180c',
            },
            fontFamily: {
                sans: ['Sora', 'sans-serif'],
                serif: ['Rosarivo', 'serif'],
            },
        },
    },
    plugins: [],
}
