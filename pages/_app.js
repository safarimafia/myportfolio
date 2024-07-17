import Head from 'next/head';
import Header from '../components/Header';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D7T3C6BFHX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D7T3C6BFHX');
            `,
          }}
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
