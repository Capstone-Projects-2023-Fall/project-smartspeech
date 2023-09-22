import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter, Poppins } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["500", "600", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${inter.variable} ${poppins.variable} bg-dark-bg`}>
            <Component {...pageProps} />
        </main>
    );
}
