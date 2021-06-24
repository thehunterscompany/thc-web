import React from "react";
import styles from "./FirstScreen.module.scss";
import Background from "./elements/Background/index";
import Text from "./elements/Text/index";

const FirstScreen = () => (
  <div className={`_thc-story-section ${styles["_first-screen"]} _thc-card`}>
    <Background />
    <Text />
  </div>
);

export default FirstScreen;
