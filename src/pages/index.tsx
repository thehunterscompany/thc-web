import Head from "next/head";

export default function Home() {
  return (
    <html>
      <Head>
        <title>Te conseguimos la mejor financiación para tu vivienda </title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />

        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link
          href="http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900|Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />

        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/main.css" />

        <script src="js/modernizr-2.7.1.js"></script>
      </Head>

      <body>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <div className="logo">
                  <img src="img/ThcLogo.png" alt="Logo" />
                </div>
              </div>
              <div className="col-xs-6 text-right navbar-nav">
                <a className="btn btn-secondary btn-sm">Ingresa</a>
              </div>
            </div>
            <div className="row header-info">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <h1 className="wow fadeIn">
                  Encuentra la mejor financiación{" "}
                  <h1 className="_margin-top-5">para tu vivienda</h1>
                </h1>
                <h2 className="wow fadeIn" data-wow-delay="0.5s">
                  Rápido, sencillo, sin costo.
                </h2>
                <br />
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <div className="row">
                      <div
                        className="wow fadeInUp text-center"
                        data-wow-delay="1s"
                      >
                        <a className="btn btn-secondary btn-lg">
                          Simula Tu Cuota
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

        <section id="be-the-first" className="pad-xl">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-8 col-sm-offset-2 text-center margin-30 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h2>Los principales Bancos de un solo lugar</h2>
                <p className="lead">
                  Buscamos, comparamos y negociamos para conseguirte la mejor
                  financiación.
                </p>
              </div>
            </div>

            <div className="_banks wow fadeInUp" data-wow-delay="1s">
              <img src="img/BancosLogos.png" />
            </div>
          </div>
        </section>

        <section id="main-info" className="pad-xl">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                <hr className="line purple" />
                <h3>Solicitud Online</h3>
                <p>
                  Completa nuestro formulario Online o pide atención
                  personalizada a través de un ejecutivo. Te estaremoos
                  contactando en la mayor brevedad
                </p>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
                <hr className="line blue" />
                <h3>Evaluación y aprobación</h3>
                <p>
                  Comparamos todas las ofertas objetivamente y te prestamoos la
                  mejor opción de forma clara, transparente e imparcial.
                  Preparamos la documentación y tramitamos la parobación por el
                  Banco elegido
                </p>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="1.2s">
                <hr className="line yellow" />
                <h3>Desembolso</h3>
                <p>
                  Una vez aproobada la operación, te acompañamos en toodo el
                  proceso de contabilización hasta el desembolso final.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pad-lg">
          <div className="container">
            <div className="row margin-40">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                <h2 className="white">Acompañamiento EXPERTO</h2>
                {/* <p className="white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam viverra orci ut.
                </p> */}
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
                      <img src="img/Santi.png" />
                    </li>
                    <li className="info">
                      <h4>María Fuensanta Villena</h4>
                    </li>
                    <li className="features first">
                      <p>
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
                      <img src="img/Ana.png" />
                    </li>
                    <li className="info">
                      <h4>Catalina Prado</h4>
                    </li>
                    <li className="features first">
                      <p>
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
                      <img src="img/Ana.png" />
                    </li>
                    <li className="info">
                      <h4>Ana María Merizalde</h4>
                    </li>
                    <li className="features first">
                      <p>
                        Administradora de Empresas del CESA. Cuenta con una
                        experiencia de más de 15 años en el sector financiero
                        colombiano que le aporta una amplia trayectoria
                        profesional y gran conocimiento de las diferentes áreas
                        de los Bancos más importantes del país y entidades
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

        <section id="invite" className="pad-lg light-gray-bg">
          <div className="container">
            <div className="row margin-30 news-container">
              <div
                className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 wow fadeInLeft"
                data-wow-delay="0.8s"
              >
                <p className="black">
                  "Me encanta. Yo simplemente te digo que con THC me desentendí
                  de muchos problemas, me concentré en mi trabajo y todo fluyó
                  de manera extraordinaria."
                  <br />
                  <small>
                    <em>Luis Felipe Lozano</em>
                  </small>
                </p>
              </div>
            </div>

            <div className="row margin-30 news-container">
              <div
                className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 wow fadeInLeft"
                data-wow-delay="1.2s"
              >
                <p className="black">
                  "He recomendado a THC muchas veces a mis amigos. Si no fuera
                  por su excelente gestión, rapidez y además, por hacer mas allá
                  de lo que ofrecen para hacer tu sueño de comprar una casa una
                  realidad, no hubiera logrado tener la mia."
                  <br />
                  <small>
                    <em>Ana Lucia Rodríguez </em>
                  </small>
                </p>
              </div>
            </div>

            <div className="row margin-30 news-container">
              <div
                className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 wow fadeInLeft"
                data-wow-delay="1.6s"
              >
                <p className="black">
                  "Recomiendo a THC porque el servicio es personalizado, sus
                  asesores se preocupan por ofrecerme el mejor producto de
                  acuerdo con mis necesidades actuales, haciendo un
                  acompañamiento cercano, con esto garantizan que cualquier
                  proceso sea llevado a feliz término.“
                  <br />
                  <small>
                    <em>Diego García</em>
                  </small>
                </p>
              </div>
            </div>
            <div className="row margin-30 news-container">
              <div
                className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 wow fadeInLeft"
                data-wow-delay="2.0s"
              >
                <p className="black">
                  "Excelente servicio. Si quieres contar con la mejor asesoría,
                  no lo dudes. Ellos hacen los sueños realidad .“
                  <br />
                  <small>
                    <em>Karolina Mejía</em>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 margin-20">
                <ul className="list-inline social">
                  <li>Connect with us on</li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-4 text-right">
                <p>
                  <small>
                    Copyright &copy; 2016. All rights reserved. <br />
                    Created by{" "}
                    <a href="http://designscrazed.org/">Designscrazed</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </footer>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        {/* <script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>')</script> */}
        <script src="js/wow.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
      </body>
    </html>
  );
}
