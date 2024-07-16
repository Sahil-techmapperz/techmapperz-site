import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/Navbar";
import { ChakraProvider } from '@chakra-ui/react';
import Footer from "./_Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techmapperz LLP",
  description: "Techmapperz map your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <ChakraProvider>
        {children}
       </ChakraProvider>
       <Footer/>
        </body>
    </html>
  );
}
