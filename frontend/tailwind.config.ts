const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: ["bg-purple-300", "bg-red-300", "bg-orange-300", "bg-yellow-300", "bg-green-300", "bg-blue-300"],
    theme: {
        extend: {
            height: {
                "644": "161rem",
            },
        },
        fontFamily: {
            inter: ["var(--font-inter)"],
            poppins: ["var(--font-poppins)"],
            scp: ["var(--font-scp)"],
        },
        screens: {
            "2xl-max": { max: "1535px" },
            "xl-max": { max: "1279px" },
            "lg-max": { max: "1023px" },
            "mid-max": { max: "900px" },
            "md-max": { max: "750px" },
            "sm-max": { max: "639px" },
            "xs-max": { max: "550px" },
            "xs1-max": { max: "464px" },
            "xs2-max": { max: "380px" },
            "xs3-max": { max: "320px" },

            //! un-used for now
            "ipad-1": { raw: "(min-height: 768px)" },
            "desktop-1": { raw: "(min-height: 900px)" },
            "ipad-2": { raw: "(min-height: 1024px)" },
            "ipad-3": { raw: "(min-height: 1194px)" },
            "ipad-4": { raw: "(min-height: 1366px)" },
        },
    },
    plugins: [],
};
export default config;
