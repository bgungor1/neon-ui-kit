/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    blue: "#00f3ff",
                    pink: "#bc13fe",
                    green: "#0aff00",
                    yellow: "#fcee0a",
                },
                dark: {
                    900: "#050505",
                    800: "#0a0a0a",
                    700: "#121212",
                }
            },
            boxShadow: {
                'neon-blue': '0 0 5px #00f3ff, 0 0 20px #00f3ff',
                'neon-pink': '0 0 5px #bc13fe, 0 0 20px #bc13fe',
                'neon-green': '0 0 5px #0aff00, 0 0 20px #0aff00',
                'neon-yellow': '0 0 5px #fcee0a, 0 0 20px #fcee0a',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}