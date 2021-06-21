import React from "react";
import styles from "./styles.module.scss";
import {
  bancosLogos,
  bancosLogosAttr,
} from "../../../../../public/images/logos/bancos/bancosLogos";

const BancosGrid = () => (
  <div className={styles["_banks"]}>
    {bancosLogos.map(({ alt, href, img }: bancosLogosAttr, index: number) => {
      if (index === bancosLogos.length - 1) {
        return (
          <div
            key={alt}
            className={`${styles["_banks-item"]} ${styles["_last-item"]}`}
          >
            <a href={href} target="_blank" rel="noreferrer">
              <img alt={alt} src={img} />
            </a>
          </div>
        );
      } else {
        return (
          <div key={alt} className={styles["_banks-item"]}>
            <a href={href} target="_blank" rel="noreferrer">
              <img alt={alt} src={img} />
            </a>
          </div>
        );
      }
    })}
  </div>
);

export default BancosGrid;
