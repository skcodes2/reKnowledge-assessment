
module.exports = {
  content: [

    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    ],  
    theme: {
        extend: {
            colors: {
            gold: '#FFD700',
            },
            fontFamily: {
            header: ['Oswald', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
            },
        },
        },  
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar-hide')({ nocompatible: true }),
    ],
    darkMode: 'class', // Enable dark mode support
    variants: {
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
            borderColor: ['dark'],
        },
    },
}