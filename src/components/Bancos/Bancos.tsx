import React, { Fragment } from "react";
import styles from "./FirstScreen.module.scss";
import Text from "./element/Text";
import BancosGrid from "./element/BancosGrid";
import GridSinFotos from "./element/BancosGridSinImg";

const Bancos = () => (
  <div
    className="_thc-story-section _thc-card "
    style={{ backgroundColor: "#aedaff" }}
  >
    <Text />
    <GridSinFotos />
  </div>
);

export default Bancos;
