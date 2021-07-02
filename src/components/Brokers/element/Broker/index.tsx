import React, { FC } from "react";
import styles from "./styles.module.scss";

interface BrokerProps {
  name: string;
  message: string;
  img: any;
}

const Broker: FC<BrokerProps> = ({ name, message, img }) => (
  <div className={styles["_consultant-container"]}>
    <ul className={`${styles["_consultant-table"]} ${styles.active}`}>
      <li className={`${styles.headline}`}>{img}</li>
      <li className={`${styles.info}`}>
        <h3>{name}</h3>
      </li>
      <li className={styles.features}>{message}</li>
    </ul>
  </div>
);

export default Broker;
