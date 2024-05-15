import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

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
      <body className={fontOpenSans.className}>{children}</body>
    </html>
  );
}
