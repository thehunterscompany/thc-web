import React from "react";
import Link from "next/link";
import styles from "../style.module.scss";

const Block2 = () => (
  <div className={`${styles["_footer-item"]} ${styles["_footer-flex"]}`}>
    <span className={`${styles["_footer-block-title"]}`}>Legal</span>
    <ul className={`${styles["_footer-block-list"]}`}>
      <li className={`${styles["_footer-block-item"]}`}>
        <Link href="/terminos-y-condiciones">
          <a>Términos y Condiciones</a>
        </Link>
      </li>
      <li className={`${styles["_footer-block-item"]}`}>
        <Link href="/politica-de-privacidad">
          <a>Política de Privacidad</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Block2;
