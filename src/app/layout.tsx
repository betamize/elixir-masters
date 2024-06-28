import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElixirMasters - India's No.1 Elixir Development Company",
  description:
    "ElixirMasters offers bespoke software development services using Elixir, Phoenix, LiveView, and Erlang. We provide tailored solutions, consulting, training, and developer hiring on an hourly or monthly basis. Based in India, we cater to clients globally.",
  keywords:
    "India's No.1 Elixir Development Company, Elixir Development, Phoenix Framework, LiveView Development, Erlang Integration, Software Consulting, Developer Training, Hire Elixir Developers, Software Maintenance, IT Support",
  authors: { name: "BetaMize", url: "https://betamize.com" },
  robots: "index, follow",
  alternates: { canonical: "https://elixirmasters.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <div>{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
