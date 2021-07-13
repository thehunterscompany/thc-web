import React, { FC, useState } from "react";
import { useEffect } from "react";
import useWindowSize from "../../../../utils";
import styles from "./styles.module.scss";

interface BrokerProps {
  name: string;
  message: string;
  img: any;
}

const Broker: FC<BrokerProps> = ({ name, message, img }) => {
  const [minHeight, setMinHeight] = useState<number>(416);

  const { width, height } = useWindowSize();

  const calculateMinHeight = (windowWidth: number) => {
    switch (true) {
      case windowWidth <= 1346 && windowWidth >= 1294:
        setMinHeight(434);
        break;

      case windowWidth <= 1294 && windowWidth >= 1241:
        setMinHeight(450);
        break;

      case windowWidth <= 1241 && windowWidth >= 1169:
        setMinHeight(470);
        break;

      case windowWidth < 1169 && windowWidth > 1090:
        setMinHeight(488);
        break;

      case windowWidth <= 1090 && windowWidth > 1060:
        setMinHeight(334);
        break;

      case windowWidth <= 1060 && windowWidth > 1000:
        setMinHeight(358);
        break;

      case windowWidth <= 1000:
        setMinHeight(317);
        break;
    }
  };

  useEffect(() => {
    calculateMinHeight(width);
  }, [width]);

  return (
    <div className={styles["_consultant-container"]}>
      <ul
        className={`${styles["_consultant-table"]} ${styles.active}`}
        style={{ minHeight: `${minHeight}px` }}
      >
        <li className={`${styles.headline}`}>{img}</li>
        <li className={`${styles.info}`}>
          <h3>{name}</h3>
        </li>
        <li className={styles.features}>{message}</li>
      </ul>
    </div>
  );
};

export default Broker;
