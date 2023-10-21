/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
    plugins: [require("daisyui")],
    darkTheme: "scaffoldEthDark",
    // DaisyUI theme colors
    daisyui: {
        themes: [
            {
                scaffoldEth: {
                    "primary": "#374151",
                    "secondary": "#0369a1",
                    "accent": "#f3f4f6",
                    "neutral": "#2a323c",
                    "base-100": "#d6d3d1",
                    "info": "#fb923c",
                    "success": "#16a34a",
                    "warning": "#fbbd23",
                    "error": "#991b1b",
                },
            },
            {
                oritheme: {
                    primary: "#93BBFB",
                    "primary-content": "#212638",
                    secondary: "#DAE8FF",
                    "secondary-content": "#212638",
                    accent: "#93BBFB",
                    "accent-content": "#212638",
                    neutral: "#212638",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#f4f8ff",
                    "base-300": "#DAE8FF",
                    "base-content": "#212638",
                    info: "#93BBFB",
                    success: "#34EEB6",
                    warning: "#FFCF72",
                    error: "#FF8863",

                    "--rounded-btn": "9999rem",

                    ".tooltip": {
                        "--tooltip-tail": "6px",
                    },
                },
            },
            {
                scaffoldEthDark: {
                    "primary": "#f3f4f6",
                    "secondary": "#7dd3fc",
                    "accent": "#d1d5db",
                    "neutral": "#2a323c",
                    "base-100": "#111827",
                    "info": "#fb923c",
                    "success": "#16a34a",
                    "warning": "#fbbd23",
                    "error": "#991b1b",
                },
            },
            {
                exampleUi: {
                    primary: "#000000",
                    "primary-content": "#ffffff",
                    secondary: "#FF6644",
                    "secondary-content": "#212638",
                    accent: "#93BBFB",
                    "accent-content": "#212638",
                    neutral: "#f3f3f3",
                    "neutral-content": "#212638",
                    "base-100": "#ffffff",
                    "base-200": "#f1f1f1",
                    "base-300": "#d0d0d0",
                    "base-content": "#212638",
                    info: "#93BBFB",
                    success: "#34EEB6",
                    warning: "#FFCF72",
                    error: "#FF8863",

                    "--rounded-btn": "9999rem",

                    ".tooltip": {
                        "--tooltip-tail": "6px",
                    },
                },
            },
        ],
    },
    theme: {
        // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
        extend: {
            fontFamily: {
                "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
            },
            boxShadow: {
                center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
            },
            keyframes: {
                grow: {
                    "0%": {
                        width: "0%",
                    },
                    "100%": {
                        width: "100%",
                    },
                },
                zoom: {
                    "0%, 100%": { transform: "scale(1, 1)" },
                    "50%": { transform: "scale(1.1, 1.1)" },
                },
            },
            animation: {
                grow: "grow 5s linear infinite",
                "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                zoom: "zoom 1s ease infinite",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
};
