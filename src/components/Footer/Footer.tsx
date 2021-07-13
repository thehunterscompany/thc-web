import React from "react";
import Block1 from "./element/Block1";
import Block2 from "./element/Block2";
import Block3 from "./element/Block3";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer style={{ backgroundColor: "rgb(255,255,255)" }}>
    <div className={`${styles["_footer-space"]}`}>
      <Block1 />
      <Block2 />
      <Block3 />
    </div>
  </footer>
);

export default Footer;
