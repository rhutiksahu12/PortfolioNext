import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rhutik Sahu",
  description: "Portfolio- Rhutik Sahu",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        "relative h-full font-sans antialiased",
        inter.className
      )}>
        <main className="relative flex flex-col min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 font-mono">
          <div className="">
            <NavBar />
          </div>
          <div className="flex-grow flex-1 h-full ">
            {children}
          </div>
          <div className="w-full  flex justify-center">
            {/* <Footer /> */}
          </div>
        </main>
      </body>
    </html>
  );
}
