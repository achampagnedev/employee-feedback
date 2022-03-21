module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#0081FF',
                'primary-light': '#4DA6FF',
                secondary: '#e7cd4c',
                'off-white': '#f1f1f1',
                'grey-light': '#d9d9d9',
                'grey-medium': '#a6a6a6',
                'grey-dark': '#262626',
                'grey-night': '#1A1A1A',
                success: '#10b455',
                error: '#e75e4c',
            },
            fill: ['hover', 'focus'],
            transitionProperty: {
                height: 'height',
            },
        },
    },
    variants: {
        extend: { fill: ['hover'] },
    },
    plugins: [],
};
