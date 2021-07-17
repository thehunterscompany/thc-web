import React, { FC, useEffect, useState } from "react";
import useWindowSize from "../../../utils";
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
}) => {
  const [minHeight, setMinHeight] = useState<number>(240);

  const { width } = useWindowSize();

  const calculateMinHeight = (windowWidth: number) => {
    switch (true) {
      case windowWidth <= 1000 && windowWidth >= 859:
        setMinHeight(256);
        break;

      case windowWidth < 859 && windowWidth >= 851:
        setMinHeight(277);
        break;
    }
  };

  useEffect(() => {
    calculateMinHeight(width);
  }, [width]);

  return (
    <div className={styles["_recommendation-space"]}>
      <div
        className={styles["_recommendation-item"]}
        style={{ minHeight: `${minHeight}px` }}
      >
        <h2>{name}</h2>
        <h3>{job}</h3>
        <div className={styles._stars} />

        <div style={{ textAlign: "left" }}>
          <h3>{title}</h3>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Recommendation;
