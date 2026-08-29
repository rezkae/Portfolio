import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Nav from "@/components/Nav";
import CursorOrb from "@/components/CursorOrb";

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
          {/* Soft gradient blobs behind the content so glass panels have
              something to blur. Fixed background decoration only. */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-violet/20 blur-[120px]" />
            <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-scan/15 blur-[120px]" />
            <div className="absolute -bottom-32 left-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-glow/15 blur-[120px]" />
            <CursorOrb />
          </div>
          <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col">
            <Nav />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
