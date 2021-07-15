import React from "react";
import styles from "./FirstScreen.module.scss";
import Background from "../Background/Background";
import Text from "./elements/Text/index";

const FirstScreen = () => (
  <div className={`_thc-story-section ${styles["_first-screen"]} _thc-card`}>
    <Background classNamePath={styles["_background-img-wrapper"]} />
    <Text />
  </div>
);

export default FirstScreen;
