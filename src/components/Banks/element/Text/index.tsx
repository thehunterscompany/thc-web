import React from "react";
import styles from "./styles.module.scss";

const Text = () => (
  <div className={`_text-space ${styles["_bancos"]}`}>
    <h1 className="_text-space-title">
      Los principales Bancos en un solo lugar
    </h1>
    <h2 className="_text-space-subtitle">
      Buscamos, comparamos y negociamos para conseguirte la mejor financiación.
    </h2>
  </div>
);

export default Text;
