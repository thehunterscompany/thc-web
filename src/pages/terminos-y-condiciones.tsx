import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Legal from "../components/Legal/Legal";
import { terminosText } from "../data/Legal/terminos";
import Head from "next/head";

const TerminosCondicionesPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Terminos y Condiciones que incluye, condiciones de uso y propiedad del contenido del portal, de los servicios del portal de Internet www.thcsas.com.co"
        />
      </Head>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <NavBar routing={true} />
        <Legal bodyArray={terminosText} bodyTitle={"Terminos y Condiciones"} />
        <Footer />
      </div>
    </>
  );
};

export default TerminosCondicionesPage;
