import React, { Fragment } from "react";
import Text from "./element/Text";
import BancosGrid from "./element/BancosGrid";
import GridSinFotos from "./element/BancosGridSinImg";
import NoHayBancos from "./element/MientrasNoHayAprobación";

const Banks = () => (
  <div
    className="_thc-story-section _thc-card "
    style={{ backgroundColor: "#f5f5f5" }}
  >
    <Text />
    <div className="_content-space">
      <NoHayBancos />
    </div>
  </div>
);

export default Banks;
