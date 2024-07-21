import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Translate.ai",
  description: "Tranlate to your preferred language in just 1 click",
  keywords: [
    "Translate",
    "Translator",
    "Translate english to hindi",
    "Translate hindi to english",
    "Translate AI",
    "AI Translator",
    "Translate to any language",
    "ChatGPT",
    "Claude",
    "Chatbot",
    "AI",
    "GPT",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} main-bg text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
