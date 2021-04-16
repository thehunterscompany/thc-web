import Head from "next/head";

export default function Home() {
  return (
    <html>
      <Head>
        <title>Te conseguimos la mejor financión para tu vivienda</title>
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
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/main.css" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <script src="js/modernizr-2.7.1.js"></script>
      </Head>

      <body>
        {/* <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="logo-popup">
                <img src="img/FFF_thc03rgb.png" alt="Logo" />
              </a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#pricing" className="scroll"></a>
                </li>
                <li>
                  <a href="http://localhost:3001/#/login" target="_blank">
                    Iniciar Sesion
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <header>
          <div className="container-fluid">
            <div className="row _header-margin ">
              <div className="col-xs-6 navbar-nav">
                <div className="logo-main">
                  <img src="img/FFF_thc02.png" alt="Logo" />
                </div>
              </div>
              <div className="col-xs-6 text-right navbar-nav _no-side-margin">
                <a
                  href="http://localhost:3001/#/login"
                  className="btn btn-thc-secondary"
                  target="_blank"
                >
                  Iniciar sesión
                </a>
                {/* &nbsp; &nbsp;
                <a
                  href="http://localhost:3001/#/register"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Registrarse
                </a> */}
              </div>
            </div>
            <div className="row header-info">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <h1 className="wow fadeIn _pink-thc">
                  Encuentra la mejor financión para tu vivienda
                </h1>
                <br />
                <p className="lead wow fadeIn black" data-wow-delay="0.5s">
                  Rápido, sencillo, sin costo.
                  <br />
                  Hacemos realidad tu sueño de tener casa propia.
                </p>
                <br />
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <div className="row">
                      <div
                        className="text-center wow fadeInUp"
                        data-wow-delay="1s"
                      >
                        <a
                          href="#be-the-first"
                          className="btn btn-thc-secondary btn-lg"
                        >
                          Simulador
                        </a>
                      </div>
                      {/* <div
                        className="col-xs-6 text-left wow fadeInUp"
                        data-wow-delay="1.4s"
                      >
                        <a
                          href="#invite"
                          className="btn btn-primary btn-lg scroll"
                        >
                          Empezar Proceso
                        </a>
                      </div> */}
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
                <h2>Be the first</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipis.
                </p>
              </div>
            </div>

            <div className="iphone wow fadeInUp" data-wow-delay="1s">
              <img src="img/iphone.png" />
            </div>
          </div>
        </section>

        <section id="main-info" className="pad-xl">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                <hr className="line purple" />
                <h3>App Feature One Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam viverra orci ut est facilisis, eu elementum mi
                  volutpat. Pellentesque ac tristique nisi.
                </p>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
                <hr className="line blue" />
                <h3>App Feature One Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam viverra orci ut est facilisis, eu elementum mi
                  volutpat. Pellentesque ac tristique nisi.
                </p>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="1.2s">
                <hr className="line yellow" />
                <h3>App Feature One Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam viverra orci ut est facilisis, eu elementum mi
                  volutpat. Pellentesque ac tristique nisi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pad-lg">
          <div className="container">
            <div className="row margin-40">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                <h2 className="white">Pricing</h2>
                <p className="white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam viverra orci ut.
                </p>
              </div>
            </div>

            <div className="row margin-50">
              <div
                className="col-sm-4 pricing-container wow fadeInUp"
                data-wow-delay="1s"
              >
                <br />
                <ul className="list-unstyled pricing-table text-center">
                  <li className="headline">
                    <h5 className="white">Personal</h5>
                  </li>
                  <li className="price">
                    <div className="amount">
                      $5<small>/m</small>
                    </div>
                  </li>
                  <li className="info">
                    2 row section for you package information. You can include
                    all details or icons
                  </li>
                  <li className="features first">Up To 25 Projects</li>
                  <li className="features">10GB Storage</li>
                  <li className="features">Other info</li>
                  <li className="features last btn btn-secondary btn-wide">
                    <a href="#">Get Started</a>
                  </li>
                </ul>
              </div>

              <div
                className="col-sm-4 pricing-container wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <ul className="list-unstyled pricing-table active text-center">
                  <li className="headline">
                    <h5 className="white">Professional</h5>
                  </li>
                  <li className="price">
                    <div className="amount">
                      $12<small>/m</small>
                    </div>
                  </li>
                  <li className="info">
                    2 row section for you package information. You can include
                    all details or icons
                  </li>
                  <li className="features first">Up To 25 Projects</li>
                  <li className="features">10GB Storage</li>
                  <li className="features">Other info</li>
                  <li className="features">Other info</li>
                  <li className="features last btn btn-secondary btn-wide">
                    <a href="#">Get Started</a>
                  </li>
                </ul>
              </div>

              <div
                className="col-sm-4 pricing-container wow fadeInUp"
                data-wow-delay="1.3s"
              >
                <br />
                <ul className="list-unstyled pricing-table text-center">
                  <li className="headline">
                    <h5 className="white">Business</h5>
                  </li>
                  <li className="price">
                    <div className="amount">
                      $24<small>/m</small>
                    </div>
                  </li>
                  <li className="info">
                    2 row section for you package information. You can include
                    all details or icons
                  </li>
                  <li className="features first">Up To 25 Projects</li>
                  <li className="features">10GB Storage</li>
                  <li className="features">Other info</li>
                  <li className="features last btn btn-secondary btn-wide">
                    <a href="#">Get Started</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="invite" className="pad-lg light-gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                <i className="fa fa-envelope-o margin-40"></i>
                <h2 className="black">Get the invite</h2>
                <br />
                <p className="black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam viverra orci ut.
                </p>
                <br />

                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <form role="form">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter Email"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg">
                        Request Invite
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="press" className="pad-sm">
          <div className="container">
            <div className="row margin-30 news-container">
              <div
                className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 wow fadeInLeft"
                data-wow-delay="0.8s"
              >
                <a href="#" target="_blank">
                  <img
                    className="news-img pull-left"
                    src="img/press-01.jpg"
                    alt="Tech Crunch"
                  />
                  <p className="black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam viverra orci ut.
                    <br />
                    <small>
                      <em>Tech Crunch - January 15, 2015</em>
                    </small>
                  </p>
                </a>
              </div>
            </div>

            <div className="row margin-30 news-container">
              <div
                className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 wow fadeInLeft"
                data-wow-delay="1.2s"
              >
                <a href="#" target="_blank">
                  <img
                    className="news-img pull-left"
                    src="img/press-02.jpg"
                    alt="Forbes"
                  />
                  <p className="black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam viverra orci ut. <br />
                    <small>
                      <em>Forbes - Feb 25, 2015</em>
                    </small>
                  </p>
                </a>
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
