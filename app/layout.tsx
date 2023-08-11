import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/Providers/modal-provider";
import { ToasterProvider } from "@/Providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        
        <body className={inter.className}>
          <ToasterProvider/>
          <ModalProvider/>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}