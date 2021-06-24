import React from "react";
import styles from "./styles.module.scss";
import {
  bancosLogos,
  bancosLogosAttr,
} from "../../../../../public/images/logos/bancos/bancosLogos";

const GridSinFotos = () => (
  <div className={` _text-space ${styles._jumbotron}`}>
    <ul className={styles._bancos}>
      {bancosLogos.map(({ alt, href }: bancosLogosAttr, index) => (
        <li className={`${styles._banco} _text-space-subtitle `} key={index}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {alt}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default GridSinFotos;
