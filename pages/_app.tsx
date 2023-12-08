import '../styles/globals.scss';
import '../styles/animate.scss';
import React from 'react';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

import Layout from '../components/Layout';
import ThemeProvider from '../providers/ThemeProvider';
import OrderProvider from '../providers/OrderProvider';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <OrderProvider>
      <Head>
        <link 
          rel="stylesheet" 
          href="/fonts/font-awesome/css/font-awesome.min.css" 
        />
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon.png"
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta 
          name="yandex-verification" 
          content="ce3c6df57778fa42" 
        />
        <meta
          name="description"
          content="Кафе бурят-монгольской кухни 'Кочевник'. 
          Режим работы 10:00 - 18:30." 
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </OrderProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
