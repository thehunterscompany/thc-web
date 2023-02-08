import React from "react";
import styles from "../style.module.scss";

const Block3 = () => (
  <div className={`${styles["_footer-item"]} ${styles["_footer-flex"]}`}>
    <span className={`${styles["_footer-block-title"]}`}>Sobre Nosotros</span>
    <ul className={`${styles["_footer-block-list"]}`}>
      <li className={`${styles["_footer-block-item"]}`}>
        <div className={`${styles["_footer-item-location"]}`}>
          <p>
            THC es una empresa broker de servicios de financiación de vivienda e
            inmuebles comerciales para personas naturales. Brindamos una
            asesoría completa a nuestros clientes desde la solicitud de la 
            financiación hasta el desembolso, buscando agilidad y las
            mejores condiciones.
          </p>
        </div>
      </li>
    </ul>
  </div>
);

export default Block3;
