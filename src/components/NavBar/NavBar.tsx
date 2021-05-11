import React from "react";
import { THC } from "../../../public/images/logos";
import styles from "./NavBar.module.scss";

const NavBar = () => (
  <div className={styles["our-story-header-wrapper"]}>
    <div className={styles["our-story-header"]}>
      <span className={`${styles["our-story-logo"]} ${styles["nfLogo"]}`}>
        <div className={`${styles["svg-icon-netflix-logo"]}`}>
          <THC />
        </div>
      </span>
      <a href="" className={`${styles["authLinks"]} ${styles["redButton"]}`}>
        Ingresa
      </a>
    </div>
  </div>
);

export default NavBar;
