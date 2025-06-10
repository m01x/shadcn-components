import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster as SonnerToaster} from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable:"--font-sans",
})

export const metadata: Metadata = {
  title: "m01x-Shadcn Library",
  description: "Libreria comprensiva de shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        
        {children}
      
      <SonnerToaster richColors/></body>
    </html>
  );
}
