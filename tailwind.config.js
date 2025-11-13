// tailwind.config.js
export default {
    theme: {
        extend: {
            backgroundSize: {
                '200': '200% 200%', // makes gradient moveable
            },
            keyframes: {
                gradient: {
                    '0%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                    '100%': { 'background-position': '0% 50%' },
                },
            },
            animation: {
                'gradient-x': 'gradient 6s ease infinite',
            },
        },
    },
    plugins: [],
};
