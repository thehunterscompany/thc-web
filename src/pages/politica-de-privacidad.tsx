import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Legal from "../components/Legal/Legal";
import { privacidadText } from "../data/Legal/privacidad";
import Head from "next/head";

const PoliticaPrivacidadPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pagina donde se explica las politicas de privacidad que tienen los usuarios al usar los servicios del portal de Internet www.thcsas.com.co"
        />
      </Head>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <NavBar routing={true} />
        <Legal
          bodyArray={privacidadText}
          bodyTitle={"Política de Privacidad"}
        />
        <Footer />
      </div>
    </>
  );
};

export default PoliticaPrivacidadPage;
