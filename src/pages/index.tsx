import React, { Fragment } from "react";
import Head from "next/head";
import Sections from "../components/Sections/Sections";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Landing Page para la compañia The Hunters company. Es una empresa broker de servicios de financiación
                  de vivienda e inmuebles comercial para personas naturales."
          lang="es-CO"
        />
        <meta
          content="financiación, acompañamiento expert, solicitud online, evauluación, aprobación, desembolso,
           simple, rápido, sin costo, colombia, creditos, hipotecas"
          name="keywords"
          lang="es-CO"
        />
      </Head>
      <Sections />
    </Fragment>
  );
}
