import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fontOpenSans = Open_Sans({ weight: ["400", "300"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patinhas Que Brilham",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fontOpenSans.className}>
        <Navbar />
        <main className="flex flex-col items-center gap-6 py-32 px-8 max-sm:overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
