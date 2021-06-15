import React from "react";
import { THC } from "../../../public/images/logos";
// import { THC } from "@images/logo";
import styles from "./NavBar.module.scss";

const NavBar = () => (
  <div className={styles._navbarSpace}>
    <div className={styles._navbar}>
      <div style={{ marginRight: "auto" }}>
        <THC className={styles["_thc-logo-navbar"]} />
      </div>
      <a className="_btn _btn-sm">Ingresa</a>
    </div>
  </div>
);

export default NavBar;
