import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Legal from "../components/Legal/Legal";
import { terminosText } from "../data/Legal/terminos";

const TerminosCondicionesPage = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <NavBar routing={true} />
      <Legal bodyArray={terminosText} bodyTitle={"Terminos y Condiciones"} />
      <Footer />
    </div>
  );
};

export default TerminosCondicionesPage;
