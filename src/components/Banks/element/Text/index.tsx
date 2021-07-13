import React from "react";
import styles from "./styles.module.scss";

const Text = () => (
  <div className={`_text-space ${styles["_bancos"]}`}>
    <h1 className="_text-space-title">
      Ya no tendrás que ir de banco en banco
    </h1>
    <h2 className="_text-space-subtitle">
      Te acompañamos en todo el proceso para conseguirte la mejor financiación.
    </h2>
  </div>
);

export default Text;
