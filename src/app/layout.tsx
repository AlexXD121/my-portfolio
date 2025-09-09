import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "DMR.dev",
  description: "Tech Student & Aspiring Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AnimatedBackground />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
