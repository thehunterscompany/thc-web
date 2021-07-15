import React from "react";
import Background from "../Background/Background";
import Gears from "./elements/Gears/index";
import Text from "./elements/Text";
import styles from "./ComingSoon.module.scss";

const ComingSoon = () => (
  <div className={`_thc-story-section ${styles["_first-screen"]} _thc-card`}>
    <Background classNamePath={styles["_background-img-wrapper"]} />
    <Text />
    <Gears />
  </div>
);

export default ComingSoon;
