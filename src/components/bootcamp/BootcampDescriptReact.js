import React, { Component } from 'react';
import "./Bootcamp.css"
import download from "../../assets/download.svg"
import {Link} from "react-router-dom";
import Button from "../common/Button";
import people from "../../assets/Shape.svg";
import event from "../../assets/event.svg";
import message from "../../assets/message.svg";
import graduated from "../../assets/graduated.svg";
import FontAwesome from "react-fontawesome";

class BootcampDescriptReact extends Component {
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
                <title>Bootcamp Python | FixterGeek</title>
                <div className="white mobile-display"></div>
                <section className="camp-portada" style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204634.jpg?alt=media&token=dacbdd8b-040f-49ac-999e-b614a2e4f890")`}}>
                    <div className="camp-intro">
                        <h2>Desarrollo Frontend con ReactJs + Redux</h2>
                        <p>Ahora que tienes conocimientos en JavaScript, da el siguiente paso para convertirte en un desarrollador frontend con uno de los frameworks más populares, utilizado por Facebook, Tesla y Twitter.</p>
                        <br/>
                        <Link to="/payment">
                            <Button text="Inscribirme"/>
                        </Link>
                        <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FTemario_React_Redux.pdf?alt=media&token=8ac6115b-d1df-4653-b4b7-d2c0d2d55b8b" target="_blank" rel="noopener noreferrer">
                            <button className="btn-ghost"><img style={{marginRight:"12px"}} src={download} alt="download-icon" />Descargar temario</button>
                        </a>
                    </div>
                </section>

                <section

                    className="contenedor camp-programa"
                >
                    <div className="box-programa">
                        <h2>
                            ¡Explora el desarrollo front-end con ReactJs!</h2>
                        <br/>
                        <h3>Por qué ReactJs...</h3>
                        <p>
                            ReactJs es uno de los frameworks más demandados y utilizados en el desarrollo web, utilizado en gran cantidad de
                            aplicaciones como Tesla, Facebook, WhatsApp,
                        </p>
                        <br/>
                        <h3>Experiencia inigualable</h3>
                        <p>
                            En esta nueva modalidad de bootcamp online, te sumergirás en una experiencia única de aprendizaje,
                            en donde concoerás las mejores prácticas del desarrollo para construir tu propio sitio web.
                        </p>
                    </div>
                    <div className="box-data">
                        <div className="ipad-fl">
                            <div>
                                <p>Próxima edición</p>
                                <h3>Ya disponible</h3>

                                <hr />
                            </div>
                            <div>
                                <p>Más de 24 hrs de ejercicios en</p>
                                <h3> 4 semanas</h3>

                                <hr />
                            </div>
                            <div>
                                <p>Aprende con la práctica</p>
                                <h3>1 examen final</h3>
                                <hr />
                            </div>
                            <div>
                                <p>
                                    Precio <span style={{ fontSize: "10px" }}>(hasta 6 MSI)</span>
                                </p>
                                <h3>$ 1,999.00</h3>

                                <hr />
                            </div>
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
                                    <p><span>&bull;</span> React.Js </p>
                                    <p><span>&bull;</span> Componentes y Circlos de vida</p>
                                    <p><span>&bull;</span> Props y state</p>
                                    <p><span>&bull;</span> Hooks</p>
                                </div>
                            </div>
                        </div>
                        <div className="week-card">
                            <div>
                                <h3>Semana 2</h3>
                                <div className="lessions">
                                    <p><span>&bull;</span> Yarn </p>
                                    <p><span>&bull;</span> Create-React-App </p>
                                    <p><span>&bull;</span> Estilos y componentes</p>
                                    <p><span>&bull;</span> Router</p>
                                </div>
                            </div>
                        </div>
                        <div className="week-card">
                            <div>
                                <h3>Semana 3</h3>
                                <div className="lessions">
                                    <p><span>&bull;</span> Redux</p>
                                    <p><span>&bull;</span> Actions - Reducers - Store</p>
                                    <p><span>&bull;</span> State - Redux</p>
                                </div>
                            </div>
                        </div>
                        <div className="week-card">
                            <div>
                                <h3>Semana 4</h3>
                                <div className="lessions">
                                    <p><span>&bull;</span> Login y Autenticación</p>
                                    <p><span>&bull;</span> Hooks con Redux</p>
                                    <p><span>&bull;</span> Hosting</p>

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
                            <img src="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F56414061_10219388463320220_4036709091425386496_o.jpg?alt=media&token=4f7dc5f3-04fd-4006-837f-d3216557bee9" alt="bliss"/>
                        </div>
                        <div className="instructor_info">
                            <h2 style={{fontSize:"24px"}} className="subtitulo">Héctor Bliss </h2>
                            <p>
                                Héctor es Couch Js en Laboratoria, en donde enseña programación a muejeres para que puedan introducirse al mercado laboral, y Software Engineer en Jaya, compañía estadounidense
                                de desarrollo de software, en donde trabaja con empresas internacionales utilizando desde React.Js hasta Ruby On Rails, y desde React Native hasta C#.
                            </p>
                            <p>Anteriormente también coloboró como instructor en otros bootcamps en la Ciudad de México como: Ironhack y Dev.f, y con cursos en línea para
                                Dev.code. Héctor es un apasionado por la tecnología y la enseñanza, con más de 5 años de experiencia en el área, y cientos de estudiantes a lo
                                largo de su carrera.</p>
                            <p>
                                Además de ser un amante de la programación, es un apasionado de la literatura, el cine y los videojuegos, como league of legends, en donde es main jungla.
                            </p>
                            <div className="redes-instructor">
                                <a href="https://github.com/HectorBlisS" target="_blank" rel="noopener noreferrer">
                                    <FontAwesome name="github"/>
                                </a>
                                <a href="https://www.linkedin.com/in/hectorbliss/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesome name="linkedin"/>
                                </a>
                                <a href="https://twitter.com/HectorBlisS" target="_blank" rel="noopener noreferrer">
                                    <FontAwesome name="twitter"/>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
            </section>

        )
    }
}

export default BootcampDescriptReact;