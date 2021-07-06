import React from "react";

type BrokerProps = {
  name: string;
  message: any;
  img: any;
};

const smallerList: Array<BrokerProps> = [
  {
    name: "Santi Villena",
    message: (
      <ul>
        <li>Administrador de Empresas</li>
        <li>Master en Business Administration</li>
        <li>12 años de experiencia en sector comercial y financiero.</li>
      </ul>
    ),
    img: <img src="images/brokers/Santi.svg" alt="Broker Santi" />,
  },
  {
    name: "Catalina Prado",
    message: (
      <ul>
        <li>Administrador de Empresas</li>
        <li>10 años de experiencia en sector comercial y financiero.</li>
      </ul>
    ),
    img: <img src="images/brokers/Cata.svg" alt="Broker Catalina" />,
  },
  {
    name: "Ana María Merizalde",
    message: (
      <ul>
        <li>Administrador de Empresas</li>
        <li>15 años de experiencia en sector comercial y financiero.</li>
      </ul>
    ),
    img: <img src="images/brokers/Ana.svg" alt="Broker Ana" />,
  },
  {
    name: "Maria Fernanda Toro",
    message: (
      <ul>
        <li>Ingeniera Industrial</li>
        <li>Master en Business Administration</li>
        <li>20 años de experiencia en sector comercial y financiero.</li>
      </ul>
    ),
    img: <img src="images/brokers/Ana.svg" alt="Broker Ana" />,
  },
];

const brokerList: Array<BrokerProps> = [
  {
    name: "Santi Villena",
    message: (
      <p>
        Master in Business Administration (MBA) del Instituto de Empresa. Más de
        12 años de experiencia comercial y financiera a nivel nacional e
        internacional. Nuestra Broker para el mercado internacional.
      </p>
    ),
    img: <img src="images/brokers/Santi.svg" alt="Broker Santi" />,
  },
  {
    name: "Catalina Prado",
    message: (
      <p>
        Administradora de Empresas del CESA. Experiencia de más de 10 años en el
        sector financiero con grandes habilidades de negociación y manejo de
        clientes que fidelizan y crean relaciones a largo plazo.
      </p>
    ),
    img: <img src="images/brokers/Cata.svg" alt="Broker Catalina" />,
  },
  {
    name: "Ana María Merizalde",
    message: (
      <p>
        Administradora de Empresas del CESA. Más de 15 años de experiencia en el
        sector financiero y gran conocimiento en diferentes áreas de los Bancos
        más importantes del país y entidades internacionales.
      </p>
    ),
    img: <img src="images/brokers/Ana.svg" alt="Broker Ana" />,
  },
  {
    name: "Maria Fernanda Toro",
    message: (
      <p>
        Ingeniera Industrial Master en Business Administration (MBA). Cuenta con
        más de 20 años de experiencia en el sector comercial nacional e
        internacional. Nuestra Broker exclusiva para el Eje Cafetero.
      </p>
    ),
    img: <img src="images/brokers/Ana.svg" alt="Broker Ana" />,
  },
];

export { brokerList, smallerList };
export type { BrokerProps };
