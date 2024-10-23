import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from './_Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './_Components/Footer';
import Script from 'next/script';
import SocialMediaIcons from './_Components/SocialMediaIcons';
import ZohoChat from './_Components/ZohoChat';

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
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={poppins.className}>
        <Navbar />
        <ChakraProvider>
          <SocialMediaIcons />
          {children}
          <ZohoChat/>
        </ChakraProvider>
        <Footer />

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '792115005500081'); fbq('track', 'PageView');`
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=792115005500081&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Google Ads Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-10860570322`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10860570322');
          `}
        </Script>
        {/* End Google Ads Script */}

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWB2CH4ZWC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SWB2CH4ZWC');
          `}
        </Script>
        {/* End Google Analytics Script */}       
      </body>
    </html>
  );
}

