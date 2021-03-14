import React, { Component } from "react";
import "./Bootcamp.css";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import people from "../../assets/Shape.svg";
import event from "../../assets/event.svg";
import message from "../../assets/message.svg";
import graduated from "../../assets/graduated.svg";
import FontAwesome from "react-fontawesome";
import TagT from "../common/TagT"

const download = "https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fdownload.svg?alt=media&token=42f25db8-63b8-45ad-a0f8-085bc44c4f4c"


class BootcampDescriptDocker extends Component {
    componentDidMount () {
        window.scroll(0, 0)
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
          <title>Bootcamp Docker | FixterGeek</title>
          <div className="white mobile-display"></div>
          <section className="camp-portada" style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fbanner-camp.png?alt=media&token=05294482-e977-4f81-9ce1-da7e991dc569")`}}>
            <div className="camp-intro">
              <h2>Aprende microservicios con Docker</h2>
              <hr className="w-line"/>
              <p>Aprende lo necesario para implementar Docker en tus proyectos</p>
              <br/>
              <Link to="/payment">
                <Button text="Inscribirme"/>
              </Link>
              <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FFundamentos_Desarrollo_Web.pdf?alt=media&token=80e68013-45be-429d-b9c8-5b58bc9a3615" target="blank" rel="noopener noreferrer">
              <button className="btn-ghost"><img style={{marginRight:"12px"}} src={download} alt="download-icon"/>Descargar temario</button>
              </a>
            </div>
          </section>

          <section

              className="contenedor camp-programa"
          >
            <div className="box-programa">
              <h2> Descripción del curso</h2>
              <p>En este curso aprenderás cómo funciona Docker, cómo se usa en etapas de desarrollo y producción a través de prácticas de integración y despliegue continuos. Este curso te puede ayudar a solucionar el clásico problema en equipos de trabajo "En mi máquina si funciona" sin importar si tu rol es Frontend, Backend o Científico de Datos; además conocerás como implementar Docker con herramientas como GitHub Actions y AWS.</p>
                <hr className="g-line"/>
              <h3>¿Qué aprenderás?</h3>
              <p>Te olvidarás del clásico "en mi maquina si funciona (trabajo en equipo)", conocerás todas las ventajas de tener toda la configuración en un Dockerfile, 
                  utilizaremos allgunos frameworks de trabajo como Node y Django que suelen comportarse diferente sobre docker.
              </p>
              <hr className="g-line"/>
              <h3>Herramientas</h3>
              <TagT text="Docker"/>
              <TagT text="Django"/>
              <TagT text="NodeJs"/>
            </div>
            <div className="box-data">
              <div className="ipad-fl">
                <div>
                  <p>Modalidad</p>
                  <h3>Híbrida</h3>

                  <hr />
                </div>
                <div>
                  <p>Clases en vivo</p>
                  <h3>32 horas</h3>

                  <hr />
                </div>
                <div>
                  <p>Recursos offline</p>
                  <h3>Video + Tareas</h3>
                  <hr />
                </div>
                <div>
                  <p>
                    Precio <span style={{ fontSize: "10px" }}>(hasta 6 MSI)</span>
                  </p>
                  <h3>$ 12,000.00</h3>

                  <hr />
                </div>
              </div>
            </div>
          </section>
          <section className="modality">
            <div>
                <h2 className="subtitulo">¿Cómo es un curso híbrido?</h2>
                <p>Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital de estudios para seguir aprendiendo online y profundizando en los temas mas relevantes.</p>
                <p>Nuestro curso de desarrollo web solo es el principio. Una vez finalizado el bootcamp, formarás parte de una comunidad global y tendrás acceso a nuestra plataforma digital de estudios para seguir aprendiendo online y profundizando en los temas mas relevantes.</p>                    
                <br/>
                <Link to="/apply/?b=5d632e4c339a1b379df68a74">
                    <Button text="Inscribirme"/>
                </Link>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0DJnTEAVFJE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <img src="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F4226221.jpeg?alt=media&token=a852ee83-b7fb-41c8-bb5e-783eab6d1410" alt="bliss"/>
              </div>
              <div className="instructor_info">
                <h2 style={{fontSize:"24px"}} className="subtitulo">Andrés Quintero</h2>
                <p>
                Soy desarrollador autodidacta y he trabajado para Startups y empresas medianas con roles como Ingeniero de Datos e Ingeniero de Software. Me gusta el trabajo colaborativo, compartir conocimiento y aprender a construir una mejor web con equipos de personas increíbles.

                </p>
                <div className="redes-instructor">
                  <a href="https://github.com/AQUINTERO446" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="github"/>
                  </a>
                  <a href="https://www.linkedin.com/in/andres-quintero-galvan-07812450/" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="linkedin"/>
                  </a>
                  {/* <a href="https://twitter.com/HectorBlisS" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="twitter"/>
                  </a> */}

                </div>
              </div>
            </div>
          </section>
        </section>
        )
    }
}

export default BootcampDescriptDocker;