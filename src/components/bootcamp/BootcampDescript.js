import React, { Component } from "react";
import "./Bootcamp.css";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import pactive from "../../assets/barra-de-progreso 2.svg";
import pinactive from "../../assets/barra-de-progreso_inactive.svg";
import Button from "../common/Button"
import photo1 from "../../assets/photo1.svg"
import download from "../../assets/download.svg"
import FontAwesome from "react-fontawesome"
import people from "../../assets/Shape.svg"
import message from "../../assets/message.svg"
import event from "../../assets/event.svg"
import graduated from "../../assets/graduated.svg"
import katia from "../../assets/Jk6JaJzJ_400x400.jpg"

class BootcampDescript extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const options = {
      autoplay: true,
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    };
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
        <title>Bootcamp Python | FixterGeek</title>
        <section className="camp-portada" style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204700.jpg?alt=media&token=0e15bd6c-2602-473e-a5a0-b2e6a604b264")`}}>
            <div className="camp-intro">
              <h2>Fundamentos de Programación con Python</h2>
              <p>Aprende las bases de la programación, y prepárate para este programa, creado especialmente para principiantes que quieren incursionar en el mundo de Python: tanto para análisis de datos como para desarrollo web.</p>
              <br/>

              <Button text="Inscribirme"/>
                <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FFundamentos_de_Programacio%CC%81n_Python.pdf?alt=media&token=cc9e4b75-1366-4a35-bf9a-79a221ed85d6" target="_blank">
                    <button className="btn-ghost"><img style={{marginRight:"12px"}} src={download} alt=""/>Descargar temario</button>
                </a>
          </div>
        </section>

        <section

          className="contenedor camp-programa"
        >
          <div className="box-programa">
              <h2>¡Explora el poder de la programación con Python!</h2>
              <br />
              <h3>Por qué aprender Python...</h3>
              <p>
                Python es un lenguaje de programación versátil y popular, es uno
                de los lenguajes de programación más populares y de más rápido
                crecimiento del mundo, utilizado por ingenieros de software,
                analistas, científicos de datos e ingenieros de machine learning.
              </p>
              <br />
              <h3>Experiencia inigulable</h3>
              <p>
                Este curso es una gran introducción a los conceptos básicos de
                programación, en donde al final, entenderás como utilizar este
                lenguaje y como aplicarlo tanto para el análisis de datos, como
                para el desarrollo web.
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
                         <p><span>&bull;</span> Instalación de Python y Shell</p>
                         <p><span>&bull;</span> Git y Github</p>
                     </div>
                 </div>
               </div>
               <div className="week-card">
                 <div>
                   <h3>Semana 1</h3>
                     <div className="lessions">
                         <p><span>&bull;</span> Cadenas y variables </p>
                         <p><span>&bull;</span> Métodos y funciones con cadenas</p>
                         <p><span>&bull;</span> Condicionales</p>
                         <p><span>&bull;</span> Ciclos</p>
                     </div>
                 </div>
               </div>
               <div className="week-card">
                 <div>
                   <h3>Semana 2</h3>
                     <div className="lessions">
                         <p><span>&bull;</span> Listas y tuplas </p>
                         <p><span>&bull;</span> Diccionarios</p>
                         <p><span>&bull;</span> Creación de archivos</p>
                         <p><span>&bull;</span> F-strings y más</p>
                     </div>
                 </div>
               </div>
               <div className="week-card">
                 <div>
                   <h3>Semana 3</h3>
                     <div className="lessions">
                         <p><span>&bull;</span> Fechas y tiempo </p>
                         <p><span>&bull;</span> Expresiones regulares</p>
                         <p><span>&bull;</span> Funciones lambda</p>
                         <p><span>&bull;</span> Excepciones</p>
                     </div>
                 </div>
               </div>
               <div className="week-card">
                 <div>
                   <h3>Semana 4</h3>
                     <div className="lessions">
                         <p><span>&bull;</span> Ambientes virtuales </p>
                         <p><span>&bull;</span> AsyncIO</p>
                         <p><span>&bull;</span> Scrapping</p>
                         <p><span>&bull;</span> Bases de dtaos y más</p>
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
                        <img src={katia} alt="photo-katia"/>
                    </div>
                  <div className="instructor_info">
                      <h2 style={{fontSize:"24px"}} className="subtitulo">Katia Lira </h2>
                      <p>Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital jdhkjwhdkqwhdjwhdjkhwkjdhkjwhdkjw.

                          Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital.</p>
                      <p>Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital jdhkjwhdkqwhdjwhdjkhwkjdhkjwhdkjw.

                          Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital.</p>
                      <div className="redes-instructor">
                          <a href="https://github.com/katialira" target="_blank">
                              <FontAwesome name="github"/>
                          </a>
                          <a href="https://www.linkedin.com/in/katia-lira-engineer/" target="_blank">
                              <FontAwesome name="linkedin"/>
                          </a>
                          <a href="https://twitter.com/lakatialira" target="_blank">
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

export default BootcampDescript;
