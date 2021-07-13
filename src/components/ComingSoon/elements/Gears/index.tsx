import React from "react";
import styles from "./styles.module.scss";

const Gears = () => {
  const gearArray: Array<string> = ["one", "two", "three"];

  return (
    <div style={{ margin: "auto" }}>
      <div className={styles["gears"]}>
        {gearArray.map((value: string, index: number) => (
          <div key={index} className={`${styles.gear} ${styles[value]}`}>
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gears;
