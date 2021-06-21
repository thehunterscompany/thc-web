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
    title: "Solicitud Online",
    message: `Completa nuestro formulario Online o pide atención personalizada a través de un ejecutivo.
       Te estaremos contactando en la mayor brevedad.`,
    img: <img src="images/process/Form.svg" alt="Form" />,
  },
  {
    title: "Evaluación y aprobación",
    message: `Comparamos todas las ofertas objetivamente y te presentamos la
    mejor opción de forma clara, transparente e imparcial.
    Preparamos la documentación y tramitamos la aprobación por el
    Banco elegido.`,
    img: <img src="images/process/Stamp.svg" alt="Form" />,
  },
  {
    title: "Desembolso",
    message: `Una vez aprobada la operación, te acompañamos en toodo el
    proceso de contabilización hasta el desembolso final.`,
    img: <img src="images/process/Keys.svg" alt="Form" />,
  },
];

const Process = () => (
  <div className="_thc-story-section _thc-card">
    <div className={`_text-space ${styles["_process"]}`}>
      <h1 className="_text-space-title">Cómo funciona</h1>
      <h2 className="_text-space-subtitle">
        Sigue estos simples pasos y encuentra la financiación que siempre
        soñaste
      </h2>
    </div>
    <div className={`_text-space ${styles["_process-list"]}`}>
      {stepList.map(({ title, message, img }: StepProps, index: number) => (
        <Step key={index} title={title} message={message} img={img} />
      ))}
    </div>
  </div>
);

export default Process;
