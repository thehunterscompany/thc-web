import React, { FC, useState, useEffect } from "react";
import styles from "./Background.module.scss";

interface backgroundProps {
  classNamePath: string;
}

const BackGround: FC<backgroundProps> = ({ classNamePath }) => {
  return (
    <div className={styles["_background-space"]}>
      <div className={classNamePath}>
        <div className={styles["_background-img"]} />
      </div>
    </div>
  );
};

export default BackGround;
