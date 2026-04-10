import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skillucent — Master AI & Digital Skills",
  description:
    "Skillucent helps people and businesses master AI and digital skills — from students and employees to agencies and entrepreneurs.",
  keywords: "AI training, digital skills, online courses, corporate workshops, UGC, campaign management",
  openGraph: {
    title: "Skillucent — Master AI & Digital Skills",
    description:
      "Practical AI and digital skills training for students, professionals, and businesses.",
    url: "https://skillucent.com",
    siteName: "Skillucent",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
