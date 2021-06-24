import React, { FC } from "react";
import styles from "./styles.module.scss";

interface RecommendationProps {
  name: string;
  title: string;
  message: string;
}

const Recommendation: FC<RecommendationProps> = ({ name, title, message }) => (
  <div className={styles["_recommendation-space"]}>
    <br />
    <div className={styles["_recommendation-item"]}>
      <h2>{name}</h2>
      <img
        src="images/recommendation/stars.svg"
        className={styles._stars}
        alt="Estrellas"
      />
      <div style={{ textAlign: "left" }}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  </div>
);

export default Recommendation;
