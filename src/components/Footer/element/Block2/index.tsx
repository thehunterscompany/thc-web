import React from "react";
import styles from "../style.module.scss";

const Block2 = () => (
  <div className={`${styles["_footer-item"]} ${styles["_footer-flex"]}`}>
    <span className={`${styles["_footer-block-title"]}`}>Legal</span>
    <ul className={`${styles["_footer-block-list"]}`}>
      <li className={`${styles["_footer-block-item"]}`}>
        <a href="">Términos y Condiciones</a>
      </li>
      <li className={`${styles["_footer-block-item"]}`}>
        <a href="">Política de Privacidad</a>
      </li>
    </ul>
  </div>
);

export default Block2;
