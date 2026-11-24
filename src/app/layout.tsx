import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Yaroslava Rozhkova — UX/UI Designer",
  description:
    "UX/UI designer for mobile apps and web platforms, focused on trackers, recommendations and everyday flows for nutrition, emotional wellbeing and relationships.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
