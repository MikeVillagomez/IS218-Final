// pages/_app.js

import React, { useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import NavigationBar from '../components/NavigationBar';
import CookieConsent from 'react-cookie-consent';
import ReactGA from 'react-ga';
import { Link } from '@nextui-org/react'; // Import Link from @nextui-org/react

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-XDWMNHNFNE'); // Replace with your Google Analytics tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        <title>Blend-brew Tea</title>
        <meta name="description" content="Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors." />
        <meta name="keywords" content="tea, blendbrew tea, organic tea, herbal tea, green tea, black tea, loose leaf tea, tea blends, specialty tea, artisan tea" />
        <meta property="og:title" content="Blend-brew Tea" />
        <meta property="og:description" content="Explore our crafted blends for a symphony of flavors." />
        <meta property="og:image" content="/happy.jpg" /> {/* Replace with your image path */}
        <meta property="og:type" content="website" />
        <link rel="icon" href="/teas.webp" /> {/* Replace with your favicon path */}
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XDWMNHNFNE"
        strategy="afterInteractive"
        async
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XDWMNHNFNE');
        `}
      </Script>
      <NavigationBar />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="blendbrewTeaCookieConsent"
        style={{ background: "#2B373B", fontSize: "16px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "16px" }}
        expires={150}
      >
        This website uses cookies to improve your experience. By using our website, you agree to our 
        <Link href="/policy" style={{ color: "#F1D00A" }}>Privacy Policy</Link>. 
      </CookieConsent>
    </>
  );
}

export default MyApp;
 