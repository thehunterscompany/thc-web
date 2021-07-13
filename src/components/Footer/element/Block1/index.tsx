import React, { Fragment } from "react";
import styles from "../style.module.scss";

const Block1 = () => (
  <div className={`${styles["_footer-item"]} ${styles["_footer-flex"]}`}>
    <span className={`${styles["_footer-block-title"]}`}>Contáctenos</span>
    <ul className={`${styles["_footer-block-list"]}`}>
      {blockList.map(({ children }: blockProps, index: number) => (
        <li key={index} className={`${styles["_footer-block-item"]}`}>
          {children}
        </li>
      ))}
    </ul>
  </div>
);

type blockProps = {
  children: any;
};

const blockList = [
  {
    children: (
      <Fragment>
        <img src="images/footer/email.svg" alt="Email" />
        <a href="mailto:info@thcsas.com.co" rel="noopener noreferrer">
          info@thcsas.com.co
        </a>
      </Fragment>
    ),
  },
  {
    children: (
      <Fragment>
        <img src="images/footer/whatsapp.svg" alt="Whatsapp" />
        <a
          href="https://api.whatsapp.com/send?phone=+573104908414"
          target="_blank"
          rel="noopener noreferrer"
        >
          310 490 8414
        </a>
      </Fragment>
    ),
  },
  {
    children: (
      <Fragment>
        <img src="images/footer/phone.svg" alt="Phone" />
        <a href="tel:+573104908414" rel="noopener noreferrer">
          311 854 2488
        </a>
      </Fragment>
    ),
  },
  {
    children: (
      <Fragment>
        <img src="images/footer/location.svg" alt="Location" />
        <div className={`${styles["_footer-item-location"]}`}>
          <a
            href="http://maps.google.com/?q=Cra.+14+%2396-15,+Bogotá,+Colombia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carrera 14#96-15 piso 1. Bogotá DC
          </a>
        </div>
      </Fragment>
    ),
  },
  {
    children: (
      <div
        className={`${styles["_footer-item-location"]} ${styles["_text-left"]}`}
      >
        <p>Sedes: Bogotá, Medellín, Cali, Barranquilla, Eje Cafetero</p>
      </div>
    ),
  },
  {
    children: (
      <ul className={`${styles["_list-inline"]}`}>
        <li>
          <a
            href="https://www.instagram.com/the_hunters_company/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/the-hunters-company-sas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    ),
  },
];

export default Block1;
