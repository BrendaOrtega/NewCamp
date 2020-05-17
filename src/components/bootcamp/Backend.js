import React, { Component } from "react";
import "./Bootcamp.css";
import download from "../../assets/download.svg"
import { Link } from "react-router-dom";
import Button from "../common/Button";
import people from "../../assets/Shape.svg";
import event from "../../assets/event.svg";
import message from "../../assets/message.svg";
import graduated from "../../assets/graduated.svg";
import FontAwesome from "react-fontawesome";

class Backend extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
        <section className="bootcamp">
          <meta
              name="description"
              content="Establece las bases de programación y preparate para una este programa creado especialmente para
                        principiantes que quieren incursionar en el mundo del desarrollo web."
          />
          <meta
              name="keywords"
              content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
          />
          <title>Bootcamp NodeJs | FixterGeek</title>
          <section className="camp-portada" style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204646.jpg?alt=media&token=534edde1-4cc5-400d-af2e-6f9ed4a1a3bd")`}}>
            <div className="camp-intro">
              <h2> Backend API con NodeJs y ExpressJs</h2>
              <p> En este curso te convertirás en un desarrollador backend y
                aprenderás a desarrollar una API con Node.Js, es decir, estarás
                usando las mismas herramientas que aplicaciones como Netflix,
                LinkedIn Y PAYPAL para desarrollar una aplición.</p>
              <br/>
              <Link to="/apply/?b=5de52ae9734c4163308b63fd">
                <Button text="Inscribirme"/>
            </Link>
              <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FTemario_Bootcamp_Nodejs.pdf?alt=media&token=02eec427-cad2-49d3-9f21-35b775848140" target="_blank" rel="noopener noreferrer">
                <button className="btn-ghost"><img style={{marginRight:"12px"}} src={download} alt="download-icon"/>Descargar temario</button>
              </a>
            </div>
          </section>

          <section

              className="contenedor camp-programa"
          >
            <div className="box-programa">
              <h2>¡Explora el poder del desarrollo Backend con JavaScript!</h2>
              <br />
              <h3>Por qué Backend...</h3>
              <p>
                Todas las aplicaciones web o móviles necesitan un backend de donde
                consumir datos de forma estructurada y segura, así que en este
                curso aprenderás a utilizar distintas bases de datos, a escribir
                rutas, controladores, middlewares, y más para crear tu propia API.
              </p>
              <br />
              <h3>Experiencia inigualable</h3>
              <p>
                En esta nueva modalidad de bootcamp online, te sumergirás en una
                experiencia única de aprendizaje, en donde conocerás las mejores
                prácticas del desarrollo para construir tu propio sitio web.
              </p>
            </div>
            <div className="box-data">
              <div>
                <p>Próxima edición</p>
                <h3>Ya disponible</h3>

                <hr />
                <p>Más de 24 hrs de ejercicios en</p>
                <h3> 4 semanas</h3>

                <hr />
                <p>Aprende con la práctica</p>
                <h3>1 examen final</h3>
                <hr />
                <p>
                  Precio <span style={{ fontSize: "10px" }}>(hasta 6 MSI)</span>
                </p>
                <h3>$ 1,999.00</h3>

                <hr />
              </div>
            </div>
          </section>
          <section className="sylabuss">
            <h2 className="subtitulo">¿Qué vas a aprender?</h2>
            <br/>
            <div className="modules">
              <div className="week-card">
                <div>
                  <h3>Prework</h3>
                  <div className="lessions">
                    <p><span>&bull;</span> Conceptos básicos</p>
                    <p><span>&bull;</span> Node.Js, NPM y NVM</p>
                    <p><span>&bull;</span> Git y Github</p>
                  </div>
                </div>
              </div>
              <div className="week-card">
                <div>
                  <h3>Semana 1</h3>
                  <div className="lessions">
                    <p><span>&bull;</span> Backend </p>
                    <p><span>&bull;</span> API's</p>
                    <p><span>&bull;</span> Postman</p>
                    <p><span>&bull;</span> Node.Js</p>
                  </div>
                </div>
              </div>
              <div className="week-card">
                <div>
                  <h3>Semana 2</h3>
                  <div className="lessions">
                    <p><span>&bull;</span> Bases de Datos </p>
                    <p><span>&bull;</span> SQL y NoSQL</p>
                    <p><span>&bull;</span> ODM</p>
                    <p><span>&bull;</span> ORM</p>
                  </div>
                </div>
              </div>
              <div className="week-card">
                <div>
                  <h3>Semana 3</h3>
                  <div className="lessions">
                    <p><span>&bull;</span> Express</p>
                    <p><span>&bull;</span> Rutas</p>
                    <p><span>&bull;</span> Controladores y Modelos</p>
                    <p><span>&bull;</span> Middlewares</p>
                  </div>
                </div>
              </div>
              <div className="week-card">
                <div>
                  <h3>Semana 4</h3>
                  <div className="lessions">
                    <p><span>&bull;</span> Auth </p>
                    <p><span>&bull;</span> Mails</p>
                    <p><span>&bull;</span> Deploy</p>

                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contain">
            <h2 className="subtitulo">Coumunidad y herramientas</h2>
            <p className="text">Nuestros bootcamps y cursos, solo son el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad internacional,
              y tendrás acceso a nuestra plataforma digital para seguir aprendiendo online y profundizando en los temas más relevantes.</p>
            <br/>
            <div className="fbox">
              <div className="adds">
                <h3><img src={people} alt="icon-comunidad"/>Comunidad</h3>
                <p>Al ser parte de la comunidad tendrás acceso a la plataforma de forma permanente, a grupos privados de facebook y slack, y
                  serás de los primeros en saber de nuestros eventos.
                </p>
              </div>
              <div className="adds">
                <h3><img src={event} alt="icon-eventos"/>Eventos</h3>
                <p>También serás de los primeros en saber sobre nuestros eventos y meetups, además de recibir entradas para eventos locales.
                </p>
              </div>
              <div className="adds">
                <h3><img src={message} alt="icon-mentoria"/>Mentoría</h3>
                <p>Sabemos que aprender a programar puede ser abrumador, así que si tienes algún problema a los largo del curso,
                  contarás con el apoyo de nuestros expertos, que podrán brindarte recursos extra o resolver tus dudas directamente.
                </p>
              </div>
              <div className="adds">
                <h3><img src={graduated} alt="icon-diploma"/>Diploma</h3>
                <p>Al concluir el bootcamp y aprobar el examen final, podrás descargar tu reconocimeinto, por haber concluido
                  satisfactoriamente el bootcamp.
                </p>
              </div>
            </div>


          </section>
          <section className="sylabuss">
            <h2 className="subtitulo">Acerca del instructor</h2>
            <br/>
            <div className="instructor_box">
              <div className="instructor_photo">
                <img src="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F18891870_1543998225611670_8032322982945740932_o.jpg?alt=media&token=85f36210-ffd5-4024-9763-bdca75e18b1b" alt="oswaldo"/>
              </div>
              <div className="instructor_info">
                <h2 style={{fontSize:"24px"}} className="subtitulo">Oswaldo Martínez </h2>
                <p>Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital jdhkjwhdkqwhdjwhdjkhwkjdhkjwhdkjw.

                  Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital.</p>
                <p>Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital jdhkjwhdkqwhdjwhdjkhwkjdhkjwhdkjw.

                  Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital.</p>
                <div className="redes-instructor">
                  <a href="https://github.com/Oswaldinho24k" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="github"/>
                  </a>
                  <a href="https://www.linkedin.com/in/oswaldinho24k/" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="linkedin"/>
                  </a>
                  <a href="https://twitter.com/OswaldMarti" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="twitter"/>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
    );
  }
}

export default Backend;
