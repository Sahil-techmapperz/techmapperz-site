// app/layout.js
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from './_Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './_Components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'] // Specify the desired weights here
});

export const metadata = {
  title: 'Techmapperz LLP',
  description: 'Techmapperz map your business',
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <ChakraProvider>
          {children}
        </ChakraProvider>
        <Footer />
        {/* For chatbot  */}
        {/* <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/c47a5b69-3e47-4be5-ab4b-d19e4eacd90a/webchat/v2.1/config.js"></script> */}
         {/* For chatbot  */}
      </body>
    </html>
  );
}
