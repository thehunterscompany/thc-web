import React, { Fragment } from "react";
import styles from "./FirstScreen.module.scss";
import NavBar from "../NavBar/NavBar";
import Background from "./elements/Background/index";
import Text from "./elements/Text/index";

const FirstScreen = () => (
  <div className="_thc-story-section _thc-card">
    <Background />
    <Text />
  </div>
);

export default FirstScreen;
