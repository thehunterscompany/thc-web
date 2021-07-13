import React, { FC } from "react";
import styles from "./styles.module.scss";

interface RecommendationProps {
  name: string;
  job: string;
  title: string;
  message: string;
}

const Recommendation: FC<RecommendationProps> = ({
  name,
  job,
  title,
  message,
}) => (
  <div className={styles["_recommendation-space"]}>
    <div className={styles["_recommendation-item"]}>
      <h2>{name}</h2>
      <h3>{job}</h3>
      <div
        className={styles._stars}
        aria-label="Puntaje de comentarios de usuarios"
      />

      <div style={{ textAlign: "left" }}>
        <h3>{title}</h3>
      </div>
      <p>{message}</p>
    </div>
  </div>
);

export default Recommendation;
