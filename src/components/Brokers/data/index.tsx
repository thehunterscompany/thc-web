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
        <li>
          <p>Administrador de Empresas</p>
        </li>
        <li>
          <p>Master en Business Administration</p>
        </li>
        <li>
          <p>12 años de experiencia en sector comercial y financiero.</p>
        </li>
      </ul>
    ),
    img: <img src="images/brokers/Santi.svg" alt="Broker Santi" />,
  },
  {
    name: "Catalina Prado",
    message: (
      <ul>
        <li>
          <p>Administrador de Empresas</p>
        </li>
        <li>
          <p>10 años de experiencia en sector comercial y financiero.</p>
        </li>
      </ul>
    ),
    img: <img src="images/brokers/Cata.svg" alt="Broker Catalina" />,
  },
  {
    name: "Maria Fernanda Toro",
    message: (
      <ul>
        <li>
          <p>Ingeniera Industrial</p>
        </li>
        <li>
          <p>Master en Business Administration</p>
        </li>
        <li>
          <p>20 años de experiencia en sector comercial y financiero.</p>
        </li>
      </ul>
    ),
    img: <img src="images/brokers/Fernanda.svg" alt="Broker Fernanda" />,
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
    name: "Maria Fernanda Toro",
    message: (
      <p>
        Ingeniera Industrial Master in Business Administration (MBA). Cuenta con
        más de 20 años de experiencia en el sector comercial nacional e
        internacional. Nuestra Broker exclusiva para el Eje Cafetero.
      </p>
    ),
    img: <img src="images/brokers/Fernanda.svg" alt="Broker Ana" />,
  },
];

export { brokerList, smallerList };
export type { BrokerProps };
