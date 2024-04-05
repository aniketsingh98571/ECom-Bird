import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'
import TanstackProvider from "@/app/components/TanstackProvider/TanstackProvider"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Com BirdVision",
  description: "E-Com BirdVision",
};

export default function RootLayout({ children }) {
  return (
    <TanstackProvider>
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
    </TanstackProvider>
  );
}
