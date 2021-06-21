import React, { FC } from "react";
import styles from "./style.module.scss";

interface StepProps {
  title: string;
  message: string;
  img: any;
}

const Step: FC<StepProps> = ({ title, message, img }) => (
  <div className={styles._step}>
    <div className={styles["_info-img"]}>{img}</div>
    <hr style={{ color: "hsla(34, 100%, 47%, 0.966)", border: "2px solid" }} />
    <h3>{title}</h3>
    <p>{message}</p>
  </div>
);

export default Step;
