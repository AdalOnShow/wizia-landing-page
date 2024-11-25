/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                workSans: ["Work Sans", "sans-serif"]
            },
            colors: {
                'teal': {
                    50: "#0FF1F6",
                    100: "#14BCB2",
                    200: "#07292F",
                    300: "#002228",
                }
            }
        },
    },
    plugins: [],
}