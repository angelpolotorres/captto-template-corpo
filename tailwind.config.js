/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        container: {
            center: true,
            padding: '1.25rem'
        },
        extend: {
            screens: {
                xl: '1140px'
            }
        }
    },
    plugins: []
};
