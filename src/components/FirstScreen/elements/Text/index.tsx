import React from "react";
import styles from "./styles.module.scss";

const Text = () => (
  <div className={`_text-space ${styles["_first-screen-text"]}`}>
    <h1 className="_text-space-title">
      Encuentra la mejor financiación para tu vivienda
    </h1>
    <h2 className="_text-space-subtitle">Sencillo, rápido y sin costo</h2>
    <div style={{ marginTop: "47px" }}>
      <a className="_btn _btn-secondary _btn-lg">Calcula tu Cuota</a>
    </div>
  </div>
);

export default Text;
