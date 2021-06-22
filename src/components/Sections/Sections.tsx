import React from "react";
import styles from "./Sections.module.scss";
import FirstScreen from "../FirstScreen/FirstScreen";
import NavBar from "../NavBar/NavBar";
import Banks from "../Banks/Banks";
import Process from "../Process/Process";
import Brokers from "../Brokers/Brokers";

const Sections = () => (
  <React.Fragment>
    <NavBar />
    <div className={styles["_thc-story"]}>
      <FirstScreen />
      <div className={styles._background}>
        <Banks />
        <Process />
        <Brokers />
      </div>
    </div>
  </React.Fragment>
);

export default Sections;
