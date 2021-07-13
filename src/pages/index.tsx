import React, { Fragment } from "react";
import Head from "next/head";
import Sections from "../components/Sections/Sections";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Te conseguimos la mejor financiación para tu vivienda</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Landing Page para la compañia The Hunters company. Es una empresa broker de servicios de financiación
                  de vivienda e inmuebles comercial para personas naturales."
        />
      </Head>
      <Sections />
    </Fragment>
  );
}
