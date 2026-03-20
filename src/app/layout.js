import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sudhaman – Product Owner | AI & SaaS Builder",
  description: "Portfolio of Sudhaman, Product Owner specialising in AI, SaaS, and data-driven product strategy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
