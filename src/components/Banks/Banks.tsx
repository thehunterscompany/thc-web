import React, { Fragment } from "react";
import Text from "./element/Text";
import BancosGrid from "./element/BancosGrid";
import GridSinFotos from "./element/BancosGridSinImg";

const Banks = () => (
  <div
    className="_thc-story-section _thc-card "
    style={{ backgroundColor: "#f5f5f5" }}
  >
    <Text />
    <div className="_content-space">
      <GridSinFotos />
    </div>
  </div>
);

export default Banks;
