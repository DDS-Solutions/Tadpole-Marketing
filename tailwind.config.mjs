/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                zinc: {
                    950: '#09090b',
                    900: '#18181b',
                    800: '#27272a',
                    700: '#3f3f46',
                },
                background: '#09090b',
                surface: '#18181b',
                border: '#27272a',
            },
            animation: {
                'neural-pulse': 'neural-pulse 2s infinite ease-in-out',
            },
            keyframes: {
                'neural-pulse': {
                    '0%': { opacity: '0.3', filter: 'drop-shadow(0 0 0px #fff)' },
                    '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 4px #fff)' },
                    '100%': { opacity: '0.3', filter: 'drop-shadow(0 0 0px #fff)' },
                },
            },
        },
    },
    plugins: [],
}
