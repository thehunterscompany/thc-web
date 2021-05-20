import React from "react";
import styles from "./styles.module.scss";

const BackGround = () => (
  <div className="_background-space">
    <div className="_background-img-wrapper" style={{ height: "750px" }}>
      <img
        className="_background-img"
        src="/images/background/fondo-small.jpg"
        srcSet="/images/background/fondo-full-size.jpg 1800w"
      />
    </div>
  </div>
);

export default BackGround;
