import React, { FC } from "react";
import styles from "./TerminosCondiciones.module.scss";
import Text, { legalTextProps } from "./elements/Text";

const Legal: FC<legalTextProps> = (props) => <Text {...props} />;

export default Legal;
