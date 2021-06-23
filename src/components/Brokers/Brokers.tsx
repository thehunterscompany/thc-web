import React from "react";
import styles from "./Brokers.module.scss";
import Broker from "./element/Broker";

type BrokerProps = {
  name: string;
  message: string;
  img: any;
};

const brokerList: Array<BrokerProps> = [
  {
    name: "Santi Villena",
    message: `Profesional con Master in Business Administration (MBA)
    del Instituto de Empresa de Madrid. Tiene experiencia de
    más de 12 años en el sector comercial y financiero a
    nivel nacional e internacional. Se encarga de estudiar
    tu financiación, revisar las posibilidades en todo el
    sector bancario y seleccionar la opción más adecuada
    para que no pagues intereses de más.`,
    img: <img src="images/brokers/Santi.svg" alt="Broker Santi" />,
  },
  {
    name: "Catalina Prado",
    message: `Administradora de Empresas del CESA. Con su experiencia
    de mas de 10 años en el sector financiero colombiano es
    una de nuestras brokers más solicitadas. Sus habilidades
    de negociación y manejo de clientes la llevan a generar
    fidelización y relaciones a largo plazo. Orientada a
    resultados logra tu aprobación de la manera más ágil y
    eficiente.`,
    img: <img src="images/brokers/Cata.svg" alt="Broker Catalina" />,
  },
  {
    name: "Ana María Merizalde",
    message: `Administradora de Empresas del CESA. Cuenta con
    experiencias de más de 15 años en el sector financiero
    colombiano y un gran conocimiento de las diferentes
    áreas de los Bancos más importantes del país y entidades
    internacionales. Siempre preocupada por encontrar la
    financiación más eficiente, rápida y fácil para ti.`,
    img: <img src="images/brokers/Ana.svg" alt="Broker Ana" />,
  },
  {
    name: "Maria Fernanda Toro Pava",
    message: `Ingeniera Industrial con Master en Business Administration (MBA). 
    Cuenta con más de 20 años de experiencia en el sector comercial a nivel nacional e internacional. 
    Entiende tus necesidades para encontrar las mejores condiciones de financiación que te faciliten
     alcanzar tus sueños de vivienda o de inmuebles comerciales.`,
    img: <img src="images/brokers/Ana.svg" alt="Broker Ana" />,
  },
];

const Brokers = () => (
  <div className="_thc-story-section _thc-card">
    <div className={`_text-space ${styles._brokers}`}>
      <h1 className="_text-space-title">Acompañamiento Experto</h1>
    </div>
    <div className={`${styles["_consultant-grid"]} _text-space _content-space`}>
      {brokerList.map(({ name, message, img }: BrokerProps, index: number) => (
        <Broker key={index} name={name} message={message} img={img} />
      ))}
    </div>
  </div>
);

export default Brokers;
