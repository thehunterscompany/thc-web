import React from "react";
import styles from "./Brokers.module.scss";
import Broker from "./element/Broker";
import { brokerList, smallerList, BrokerProps } from "./data";
import useWindowSize from "../../utils";

const Brokers = () => (
  <div
    className="_thc-story-section _thc-card"
    style={{ backgroundColor: "#f5f5f5" }}
  >
    <div className={`_text-space ${styles._brokers}`}>
      <h1 className="_text-space-title">Acompañamiento experto</h1>
      <h2 className="_text-space-subtitle">Conoce a nuestros asesores</h2>
    </div>
    <div className={`${styles["_consultant-grid"]} _text-space _content-space`}>
      {brokerList.map(({ name, message, img }: BrokerProps, index: number) => (
        <Broker key={index} name={name} message={message} img={img} />
      ))}
    </div>
  </div>
);

export default Brokers;
