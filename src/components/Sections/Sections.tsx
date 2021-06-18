import React from "react";
import styles from "./Sections.module.scss";
import FirstScreen from "../FirstScreen/FirstScreen";
import NavBar from "../NavBar/NavBar";
import Banks from "../Banks/Banks";

const Sections = () => (
  <React.Fragment>
    <NavBar />
    <div className={styles["_thc-story"]}>
      <FirstScreen />
      <div className={styles._background}>
        <Banks />
      </div>
    </div>
  </React.Fragment>
);

export default Sections;
