import { Inter } from "next/font/google";

// Шрифт підключається тут, щоб його бачили і сайт, і Storybook.
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
