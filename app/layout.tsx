import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Nav from "@/components/Nav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Andreas Keazer Canlas | Full-Stack Developer & AI/ML Engineer",
  description:
    "Portfolio of Andreas Keazer Canlas, a full-stack developer and AI/ML engineer building clinical software and applied machine learning systems, including MELAScan, an AI-assisted melanoma detection platform.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Andreas Keazer Canlas | Full-Stack Developer & AI/ML Engineer",
    description:
      "Full-stack developer and AI/ML engineer based in Tarlac, Philippines. Builder of MELAScan, an AI-assisted melanoma and skin lesion detection system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col bg-ink text-paper`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col md:px-6 lg:px-8">
            <Nav />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
