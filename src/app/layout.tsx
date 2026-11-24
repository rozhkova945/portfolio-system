import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaroslava Rozhkova — UX/UI Designer",
  description:
    "UX/UI designer for mobile apps and web platforms, focused on trackers, recommendations and everyday flows for nutrition, emotional wellbeing and relationships.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
