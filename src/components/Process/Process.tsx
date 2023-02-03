import React from "react";
import Step from "./elements/Step";
import styles from "./Process.module.scss";

type StepProps = {
  title: string;
  message: string;
  img: any;
};

const stepList: Array<StepProps> = [
  {
    title: "Solicitud online",
    message: `Completa nuestro formulario Online o pide atención personalizada a través de un ejecutivo.
       Te estaremos contactando a la mayor brevedad.`,
    img: <img src="images/process/Form.svg" alt="Form" />,
  },
  {
    title: "Evaluación y aprobación",
    message: `Comparamos todas las ofertas objetivamente y te presentamos la
    mejor opción de forma clara, transparente e imparcial.
    Preparamos la documentación y tramitamos la aprobación por el
    banco elegido.`,
    img: <img src="images/process/Stamp.svg" alt="Stamp" />,
  },
  {
    title: "Desembolso",
    message: `Una vez aprobada la operación, te acompañamos en todo el
    proceso de legalización hasta el desembolso final.`,
    img: <img src="images/process/Keys.svg" alt="Keys" />,
  },
];

const Process = () => (
  <div
    className="_thc-story-section _thc-card"
    style={{ backgroundColor: "white" }}
  >
    <div
      className={`_text-space ${styles["_process"]}`}
      style={{ paddingBottom: "0px" }}
    >
      <h1 className="_text-space-title">Cómo funciona</h1>
      <h2 className="_text-space-subtitle" style={{ marginBottom: "0px" }}>
        Sigue estos simples pasos y encuentra la financiación que siempre
        soñaste
      </h2>
    </div>
    <div className={`${styles["_process-list"]} _content-space`}>
      {stepList.map(({ title, message, img }: StepProps, index: number) => (
        <Step key={index} title={title} message={message} img={img} />
      ))}
    </div>
  </div>
);

export default Process;
