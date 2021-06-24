import React from "react";
import styles from "./Recommendations.module.scss";
import Recommendation from "./Recommendation";

type RecommendationProps = {
  name: string;
  title: string;
  message: string;
};

const recommendationList: Array<RecommendationProps> = [
  {
    name: "Luis Felipe Lozano",
    title: "Me encanta!!",
    message: `Yo simplemente te digo que con THC me desentendí de 
    muchos problemas, me concentré en mi trabajo y todo 
    fluyó de manera extraordinaria.`,
  },
  {
    name: "Ana Lucia Rodríguez",
    title: "He recomendado a THC muchas veces a mis amigos!!",
    message: `Si no fuera por su excelente gestión, rapidez y además, 
    por hacer mas allá de lo que ofrecen para hacer tu sueño
    de comprar una casa una realidad, no hubiera logrado
    tener la mia.`,
  },
  {
    name: "Diego García",
    title: "Recomiendo a THC porque el servicio es personalizado!!",
    message: `Sus asesores se preocupan por ofrecerme el mejor 
    producto de acuerdo con mis necesidades actuales,
    haciendo un acompañamiento cercano, con esto garantizan
    que cualquier proceso sea llevado a feliz término.`,
  },
  {
    name: "Karolina Mejía",
    title: "Excelente servicio!!",
    message: `Si quieres contar con la mejor asesoría, no lo dudes.
    Ellos hacen los sueños realidad.`,
  },
];

const Recommendations = () => (
  <div
    className="_thc-story-section _thc-card"
    style={{ borderBottom: "5px solid hsla(34, 100%, 47%, 0.966)" }}
  >
    <div className={`_text-space ${styles._recommendations}`}>
      <h1 className="_text-space-title">Lo que dicen nuestros clientes</h1>
    </div>
    <div
      className={`${styles["_recommendation-grid"]} _text-space _content-space`}
    >
      {recommendationList.map(
        ({ name, title, message }: RecommendationProps, index) => (
          <Recommendation
            key={index}
            name={name}
            title={title}
            message={message}
          />
        )
      )}
    </div>
  </div>
);

export default Recommendations;
