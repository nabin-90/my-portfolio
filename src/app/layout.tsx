import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahmudun Nabin | Web Developer Portfolio",
  description:
    "Personal portfolio of Mahmudun Nabin, showcasing modern responsive web applications, projects, skills, and background.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
