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
        Profesional con Master in Business Administration (MBA) del Instituto de
        Empresa de Madrid. Tiene experiencia de más de 12 años en el sector
        comercial y financiero a nivel nacional e internacional. Se encarga de
        estudiar tu financiación, revisar las posibilidades en todo el sector
        bancario y seleccionar la opción más adecuada para que no pagues
        intereses de más.
      </p>
    ),
    img: <img src="images/brokers/Santi.svg" alt="Broker Santi" />,
  },
  {
    name: "Catalina Prado",
    message: (
      <p>
        Administradora de Empresas del CESA. Con su experiencia de mas de 10
        años en el sector financiero colombiano es una de nuestras brokers más
        solicitadas. Sus habilidades de negociación y manejo de clientes la
        llevan a generar fidelización y relaciones a largo plazo. Orientada a
        resultados logra tu aprobación de la manera más ágil y eficiente.
      </p>
    ),
    img: <img src="images/brokers/Cata.svg" alt="Broker Catalina" />,
  },
  {
    name: "Ana María Merizalde",
    message: (
      <p>
        Administradora de Empresas del CESA. Cuenta con experiencias de más de
        15 años en el sector financiero colombiano y un gran conocimiento de las
        diferentes áreas de los Bancos más importantes del país y entidades
        internacionales. Siempre preocupada por encontrar la financiación más
        eficiente, rápida y fácil para ti.
      </p>
    ),
    img: <img src="images/brokers/Ana.svg" alt="Broker Ana" />,
  },
  {
    name: "Maria Fernanda Toro",
    message: (
      <p>
        Ingeniera Industrial con Master en Business Administration (MBA). Cuenta
        con más de 20 años de experiencia en el sector comercial a nivel
        nacional e internacional. Entiende tus necesidades para encontrar las
        mejores condiciones de financiación que te faciliten alcanzar tus sueños
        de vivienda o de inmuebles comerciales.
      </p>
    ),
    img: <img src="images/brokers/Ana.svg" alt="Broker Ana" />,
  },
];

export { brokerList, smallerList };
export type { BrokerProps };
