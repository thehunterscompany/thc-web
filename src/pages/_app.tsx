import "@styles/globals.scss";
import "@styles/components.scss";
import "@styles/font-awesome.min.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="images/favicon/site.webmanifest" />
        <link
          rel="preload"
          href="fonts/HurmeGeometricSans1SemiBold.otf"
          as="font"
          type="font/otf"
        />
        <link
          rel="preload"
          href="fonts/HurmeGeometricSans1.otf"
          as="font"
          type="font/otf"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
