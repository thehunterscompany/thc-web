import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Te conseguimos la mejor financiación para tu vivienda </title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="Landing Page para la compañia The Hunters company. Es una empresa broker de servicios de financiación
          de vivienda e inmuebles comercial para personas naturales."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta property="og:title" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:description" content="" />
          <link
            rel="preload"
            href="fonts/AbadiMTStd.otf"
            as="font"
            type="font/otf"
          />
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
