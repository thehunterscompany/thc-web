import React, { useState, useEffect } from "react";
import useWindowSize from "../../../../utils";
import styles from "./styles.module.scss";

const BackGround = () => {
  return (
    <div className={styles["_background-space"]}>
      <div className={styles["_background-img-wrapper"]}>
        <div className={styles["_background-img"]} />
      </div>
    </div>
  );
};

export default BackGround;
