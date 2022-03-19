import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const Text = () => (
  <div className={`_text-space ${styles["_first-screen-text"]}`}>
    <h1 className="_text-space-title">
      Te acompañamos para conseguirte la mejor financiación
    </h1>
    <h2 className="_text-space-subtitle">Sencillo, rápido y sin costo</h2>
    <div style={{ marginTop: "47px" }}>
      <Link href="simulador.thcsas.com.co">
        <a className="_btn _btn-secondary _btn-lg">Calcula tu Cuota</a>
      </Link>
    </div>
  </div>
);

export default Text;
