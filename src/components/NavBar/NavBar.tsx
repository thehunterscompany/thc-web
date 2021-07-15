import React, { FC } from "react";
import { THC } from "../../../public/images/logos";
// import { THC } from "@images/logo";
import Link from "next/link";
import styles from "./NavBar.module.scss";

interface navbarProps {
  routing: boolean;
}

const NavBar = ({ routing }) => (
  <div className={styles._navbarSpace}>
    <div className={styles._navbar}>
      <div style={{ marginRight: "auto" }}>
        <THC className={styles["_thc-logo-navbar"]} routing={routing} />
      </div>
      <Link href="/coming-soon">
        <a className="_btn _btn-sm">Ingresa</a>
      </Link>
    </div>
  </div>
);

export default NavBar;
