import React from "react";
import styles from "./Sections.module.scss";
import FirstScreen from "../FirstScreen/FirstScreen";
import NavBar from "../NavBar/NavBar";
import Banks from "../Banks/Banks";
import Process from "../Process/Process";
import Brokers from "../Brokers/Brokers";
import Recommendations from "../Recommendations/Recommendations";
import Footer from "../Footer/Footer";

const Sections = () => (
  <React.Fragment>
    <NavBar routing={false} />
    <div className={styles["_thc-story"]}>
      <FirstScreen />
      <Banks />
      <Process />
      <Brokers />
      <Recommendations />
      <Footer />
    </div>
  </React.Fragment>
);

export default Sections;
