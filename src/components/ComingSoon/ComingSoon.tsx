import React from "react";
import Background from "../FirstScreen/elements/Background";
import NavBar from "../NavBar/NavBar";
import Gears from "./elements/Gears/index";
import Text from "./elements/Text";
import styles from "./ComingSoon.module.scss";

const ComingSoon = () => (
  <div className={`_thc-story-section ${styles["_first-screen"]} _thc-card`}>
    <Background />
    <Text />
    <Gears />
  </div>
);

export default ComingSoon;
