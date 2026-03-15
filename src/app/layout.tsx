import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay Memane - Senior Backend Engineer",
  description: "Senior Backend Engineer with 9+ years of experience in distributed systems, microservices, and technical leadership. Specialized in event-driven architecture and platform engineering.",
  keywords: ["Akshay Memane", "Backend Engineer", "Java Developer", "Microservices", "Distributed Systems", "Staff Engineer", "FAANG", "System Design"],
  authors: [{ name: "Akshay Memane" }],
  openGraph: {
    title: "Akshay Memane - Senior Backend Engineer",
    description: "Senior Backend Engineer specializing in distributed systems and technical leadership",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Memane - Senior Backend Engineer",
    description: "Senior Backend Engineer specializing in distributed systems and technical leadership",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}