import React from "react";
import Background from "../FirstScreen/elements/Background";
import NavBar from "../NavBar/NavBar";
import Gears from "./elements/Gears/index";
import Text from "./elements/Text";

const ComingSoon = () => (
  <div
    style={{ backgroundColor: "#f5f5f5", width: "100%", height: "100vh" }}
    className={`_thc-story-section _thc-card`}
  >
    <NavBar routing={true} />
    <Background />
    <Text />
    <Gears />
  </div>
);

export default ComingSoon;
