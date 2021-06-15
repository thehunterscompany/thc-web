import React, { Fragment } from "react";
import styles from "./FirstScreen.module.scss";
import Text from "./element/Text";
import BancosGrid from "./element/BancosGrid";

const Bancos = () => (
  <div className="_thc-story-section _thc-card">
    <Text />
    <BancosGrid />
  </div>
);

export default Bancos;
