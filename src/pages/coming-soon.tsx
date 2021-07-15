import Head from "next/head";
import React from "react";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const ComingSoonPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Contenido en desarrollo para el portal de The Hunters Company (THC)."
      />
    </Head>
    <NavBar routing={true} />
    <div style={{ margin: "0 auto" }}>
      <ComingSoon />
      <Footer />
    </div>
  </>
);

export default ComingSoonPage;
