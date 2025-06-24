import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster as SonnerToaster} from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable:"--font-sans",
})

export const metadata: Metadata = {
  title: "m01x-Shadcn/Radix Library",
  description: "Libreria comprensiva de shadcn/Radix Ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        {children}

        </ThemeProvider>
      
      <SonnerToaster richColors/></body>
    </html>
  );
}
