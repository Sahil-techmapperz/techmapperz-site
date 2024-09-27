// app/layout.js
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from './_Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './_Components/Footer';
import Head from 'next/head';
import SocialMediaIcons from './_Components/SocialMediaIcons';

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
      <Head>
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '792115005500081'); fbq('track', 'PageView');`
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=792115005500081&ev=PageView&noscript=1" />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SWB2CH4ZWC"
        ></script>

        {/* <!-- Google tag (gtag.js) --> */}

      </Head>
      <body className={poppins.className}>
        <Navbar />
        <ChakraProvider>
          <SocialMediaIcons />
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
