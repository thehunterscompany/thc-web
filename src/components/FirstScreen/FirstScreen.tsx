import React from "react";
import styles from "./FirstScreen.module.scss";
import Background from "./elements/Background/index";
import Text from "./elements/Text/index";

const FirstScreen = () => (
  <div className="_thc-story-section _thc-card  _first-screen">
    <Background />
    <Text />
  </div>
);

export default FirstScreen;
