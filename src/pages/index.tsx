import Head from "next/head";

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <title>Te conseguimos la mejor financiación para tu vivienda </title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Landing Page para la compañia The Hunters company. Es una empresa broker de servicios de financiación
          de vivienda e inmuebles comercial para personas naturales."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />
        <link
          rel="preload"
          href="fonts/AbadiMTStd.otf"
          as="font"
          type="font/otf"
        />

        <link rel="stylesheet" href="css/font-awesome.min.css" />
        {/* <link rel="stylesheet" href="css/animate.css" /> */}
        {/* <link
          href="http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900|Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        /> */}

        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/main.css" />

        <script src="js/modernizr-2.7.1.js"></script>
      </Head>

      <body>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <div className="logo wow fadeInLeft" data-wow-delay="0.1s">
                  <img src="img/ThcLogo.png" alt="Logo" />
                </div>
              </div>
              <div
                className="col-xs-6 text-right navbar-nav _sign-in-padding wow fadeInRight"
                data-wow-delay="0.1s"
              >
                <a className="btn btn-secondary btn-sm">Ingresa</a>
              </div>
            </div>
            <div className="row header-info wow fadeIn" data-wow-delay="0.1s">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <h1>
                  Encuentra la mejor financiación para
                  <h1 className="_margin-top-5">tu vivienda</h1>
                </h1>
                <h2>Rápido y sin costo.</h2>
                <br />
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <div className="row">
                      <div className="text-center">
                        <a className="btn btn-secondary btn-lg">
                          Calcula tu Cuota
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mouse-icon hidden-xs">
          <div className="scroll"></div>
        </div>

        <section id="be-the-first">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-10 col-sm-offset-1 text-center margin-30 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h1>Los principales Bancos en un solo lugar</h1>
                <h3>
                  Buscamos, comparamos y negociamos para conseguirte la mejor
                  financiación.
                </h3>
              </div>
            </div>

            <div className="_banks wow fadeInUp" data-wow-delay="1s">
              <img src="img/BancosLogos.svg" alt="Logos de Bancos" />
            </div>
          </div>
        </section>
        <hr className="line _pink-thc" />

        <section id="main-info" className="pad-xl">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-10 col-sm-offset-1 text-center margin-30 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <h1>Cómo funciona</h1>
                <h3>
                  Sigue estos simples pasos y encuentra la financiación que
                  siempre soñaste
                </h3>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.6s">
                <div className="text-center _info-img">
                  <img src="img/Form.svg" alt="Form" />
                </div>
                <hr className="line _salmon2-thc" />
                <h3 className="_pink-color-thc">Solicitud Online</h3>
                <p className="black">
                  Completa nuestro formulario Online o pide atención
                  personalizada a través de un ejecutivo. Te estaremoos
                  contactando en la mayor brevedad
                </p>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.9s">
                <div className="text-center _info-img">
                  <img src="img/Stamp.svg" alt="Stamp" />
                </div>
                <hr className="line _salmon-thc" />
                <h3 className="_pink-color-thc">Evaluación y aprobación</h3>
                <p className="black">
                  Comparamos todas las ofertas objetivamente y te presentamos la
                  mejor opción de forma clara, transparente e imparcial.
                  Preparamos la documentación y tramitamos la aprobación por el
                  Banco elegido
                </p>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="1.2s">
                <div className="text-center _info-img">
                  <img src="img/Keys.svg" alt="Keys" />
                </div>
                <hr className="line _salmon3-thc" />
                <h3 className="_pink-color-thc">Desembolso</h3>
                <p className="black">
                  Una vez aprobada la operación, te acompañamos en toodo el
                  proceso de contabilización hasta el desembolso final.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="line _pink-thc" />

        <section id="pricing" className="pad-lg">
          <div className="container">
            <div className="row margin-40">
              <div
                className="col-sm-8 col-sm-offset-2 text-center wow fadeIn"
                data-wow-delay="0.3s"
              >
                <h1 className="_pink-color-thc">Acompañamiento EXPERTO</h1>
              </div>
            </div>

            <div className="row margin-50">
              <div className="_consultant-grid">
                <div
                  className="pricing-container wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <br />
                  <ul className="list-unstyled pricing-table active text-center">
                    <li className="headline">
                      <img src="img/Santi.svg" alt="Broker Santi" />
                    </li>
                    <li className="info">
                      <h4 className="_pink-color-thc">Santi Villena</h4>
                    </li>
                    <li className="features first">
                      <p className="black">
                        Profesional con Master in Business Administration (MBA)
                        del Instituto de Empresa de Madrid. Tiene experiencia de
                        más de 12 años en el sector comercial y financiero a
                        nivel nacional e internacional. Se encarga de estudiar
                        tu financiación, revisar las posibilidades en todo el
                        sector bancario y seleccionar la opción más adecuada
                        para que no pagues intereses de más.
                      </p>
                    </li>
                  </ul>
                </div>

                <div
                  className="pricing-container wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <br />
                  <ul className="list-unstyled pricing-table active text-center">
                    <li className="headline">
                      <img src="img/Cata.svg" alt="Broker Cata" />
                    </li>
                    <li className="info">
                      <h4 className="_pink-color-thc">Catalina Prado</h4>
                    </li>
                    <li className="features first">
                      <p className="black">
                        Administradora de Empresas del CESA. Con su experiencia
                        de mas de 10 años en el sector financiero colombiano es
                        una de nuestras brokers más solicitadas. Sus habilidades
                        de negociación y manejo de clientes la llevan a generar
                        fidelización y relaciones a largo plazo. Orientada a
                        resultados logra tu aprobación de la manera más ágil y
                        eficiente.
                      </p>
                    </li>
                  </ul>
                </div>

                <div
                  className="pricing-container wow fadeInUp"
                  data-wow-delay="1.3s"
                >
                  <br />
                  <ul className="list-unstyled pricing-table active text-center">
                    <li className="headline">
                      <img src="img/Ana.svg" alt="Broker Ana" />
                    </li>
                    <li className="info">
                      <h4 className="_pink-color-thc">Ana María Merizalde</h4>
                    </li>
                    <li className="features first">
                      <p className="black">
                        Administradora de Empresas del CESA. Cuenta con
                        experiencias de más de 15 años en el sector financiero
                        colombiano y un gran conocimiento de las diferentes
                        áreas de los Bancos más importantes del país y entidades
                        internacionales. Siempre preocupada por encontrar la
                        financiación más eficiente, rápida y fácil para ti.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="line _pink-thc" />

        <section id="invite" className="pad-lg light-gray-bg">
          <div className="container">
            <div className="row margin-40">
              <div className="col-sm-10 col-sm-offset-1 text-center margin-30 wow fadeIn">
                <h1 className="_pink-color-thc">
                  Lo que dicen nuestros clientes
                </h1>
              </div>
            </div>
            <div className="row margin-50">
              <div className="_consultant-grid">
                <div
                  className="_recommendation-space wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <br />
                  <div className="_recommendation-item">
                    <h4>Luis Felipe Lozano</h4>
                    <img
                      src="img/stars.svg"
                      className="_stars"
                      alt="Estrellas"
                    />
                    <div className="text-left">
                      <h3 className="_pink-color-thc">Me encanta!!</h3>
                      <p className="black">
                        Yo simplemente te digo que con THC me desentendí de
                        muchos problemas, me concentré en mi trabajo y todo
                        fluyó de manera extraordinaria.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="_recommendation-space wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <br />
                  <div className="_recommendation-item">
                    <h4>Ana Lucia Rodríguez - brick abogados</h4>
                    <img
                      src="img/stars.svg"
                      className="_stars"
                      alt="Estrellas"
                    />
                    <div className="text-left">
                      <h3 className="_pink-color-thc">
                        He recomendado a THC muchas veces a mis amigos!!
                      </h3>
                      <p className="black">
                        Si no fuera por su excelente gestión, rapidez y además,
                        por hacer mas allá de lo que ofrecen para hacer tu sueño
                        de comprar una casa una realidad, no hubiera logrado
                        tener la mia.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="_recommendation-space wow fadeInLeft"
                  data-wow-delay="0.9s"
                >
                  <br />
                  <div className="_recommendation-item">
                    <h4>Diego García</h4>
                    <img
                      src="img/stars.svg"
                      className="_stars"
                      alt="Estrellas"
                    />
                    <div className="text-left">
                      <h3 className="_pink-color-thc">
                        Recomiendo a THC porque el servicio es personalizado!!
                      </h3>
                      <p className="black">
                        Sus asesores se preocupan por ofrecerme el mejor
                        producto de acuerdo con mis necesidades actuales,
                        haciendo un acompañamiento cercano, con esto garantizan
                        que cualquier proceso sea llevado a feliz término.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="_recommendation-space wow fadeInLeft"
                  data-wow-delay="1.2s"
                >
                  <br />
                  <div className="_recommendation-item">
                    <h4 className="black">Karolina Mejía</h4>
                    <img
                      src="img/stars.svg"
                      className="_stars"
                      alt="Estrellas"
                    />
                    <div className="text-left">
                      <h3 className="_pink-color-thc">
                        <b>Excelente servicio!!</b>
                      </h3>
                      <p className="black">
                        Si quieres contar con la mejor asesoría, no lo dudes.
                        Ellos hacen los sueños realidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="white">
          <div className="container">
            <div className="_display-flex _flex-direction _flex-wrap _justify-content-center">
              <div className="_footer-item _footer-flex">
                <div className="_footer-block ">
                  <span className="_footer-block-title">Contáctenos</span>
                  <ul className="_footer-block-list">
                    <li className="_footer-block-item">
                      <img src="img/email.svg" alt="Email" />
                      <a href="mailto:info@thcsas.com.co">info@thcsas.com.co</a>
                    </li>
                    <li className="_footer-block-item">
                      <img src="img/whatsapp.svg" alt="Whatsapp" />
                      <a
                        href="https://api.whatsapp.com/send?phone=+573104908414"
                        target="_blank"
                      >
                        310 490 8414
                      </a>
                    </li>
                    <li className="_footer-block-item">
                      <img src="img/phone.svg" alt="Phone" />
                      <a href="tel:+573104908414">311 854 2488</a>
                    </li>
                    <li className="_footer-block-item">
                      <img src="img/location.svg" alt="Location" />
                      <div className="_footer-item-location">
                        <a
                          href="http://maps.google.com/?q=Cra.+14+%2396-15,+Bogotá,+Colombia"
                          target="_blank"
                        >
                          Carrera 14#96-15 piso 1. Bogotá DC
                        </a>
                      </div>
                    </li>
                    <li className="_footer-block-item">
                      <div className="_footer-item-location">
                        <p>
                          Sedes: Bogotá-Medellín-Cali-Barranquilla-Eje Cafetero
                        </p>
                      </div>
                    </li>
                    <li className="_footer-block-item">
                      <ul className="list-inline social">
                        <li>
                          <a
                            href="https://www.instagram.com/the_hunters_company/"
                            target="_blank"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/the-hunters-company-sas/"
                            target="_blank"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="_footer-item _footer-flex">
                <div className="_footer-block ">
                  <span className="_footer-block-title">Legal</span>
                  <ul className="_footer-block-list">
                    <li className="_footer-block-item">
                      <a href="">Términos y Condiciones</a>
                    </li>
                    <li className="_footer-block-item">
                      <a href="">Política de Privacidad</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="_footer-item _footer-flex">
                <div className="_footer-block ">
                  <span className="_footer-block-title">Sobre Nosotros</span>
                  <ul className="_footer-block-list">
                    <li className="_footer-block-item">
                      <div className="_footer-item-location">
                        <p>
                          THC es una empresa broker de servicios de financiación
                          de vivienda e inmuebles comercial para personas
                          naturales. Brindamos una asesoría completa a nuestros
                          clientes desde la solicitud de financiación hasta el
                          desembolso de la misma buscando agilidad y las mejores
                          condiciones para cada uno de ellos.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> */}
        {/* <script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>')</script> */}
        {/* <script src="js/wow.min.js"></script> */}
        {/* <script src="js/bootstrap.min.js"></script> */}
        {/* <script src="js/main.js"></script> */}
      </body>
    </html>
  );
}
