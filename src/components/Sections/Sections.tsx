import React from "react";
import styles from "./Sections.module.scss";
import FirstScreen from "../FirstScreen/FirstScreen";
import NavBar from "../NavBar/NavBar";

const Sections = () => (
  <React.Fragment>
    <NavBar />
    <div className={styles["_thc-story"]}>
      <FirstScreen />
    </div>
  </React.Fragment>
);

export default Sections;
