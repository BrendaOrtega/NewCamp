import React, { Component } from 'react';
import "./Bootcamp.css"
import pactive from "../../assets/barra-de-progreso 2.svg";
import pinactive from "../../assets/barra-de-progreso_inactive.svg";
import download from "../../assets/iconos100x100DWN-05.png";
import {Link} from "react-router-dom";

class BootcampPhp extends Component {
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
                <title>Bootcamp PHP| FixterGeek</title>
                <section  className="container-bootcamp">
                    <div className="container-summary">
                        <h2 className="name-descript">Aprende a usar PHP correctamente</h2>
                        <hr className="line-red"/>
                        <p className="description">En 4 semanas aprenderás programación orientada a objetos, estádares de programación, patrones de diseño y más.</p>
                        <Link to="/apply/?b=5de52aa7734c4163308b63fb">
                            <button className="btn-float">Inscribirme</button>
                        </Link>

                        <div className="nivel">
                            <p>Nivel <span style={{fontSize:"10px"}}>(básico)</span></p>
                            <img src={pactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                        </div>
                    </div>
                    <div id="php-background" className="container-content">
                        <div className="background">

                        </div>

                    </div>
                </section>
                <section style={{backgroundColor:"#f5f5f5"}} className="contenedor camp-programa">
                    <div className="box-programa">
                        <h2>
                            ¡Conviértete en un profesional con PHP!</h2>
                        <br/>
                        <h3>Por qué PHP...</h3>
                        <p>
                            PHP sigue siendo uno de los lenguajes más demandados para backend, además de ser un lenguaje con el
                            cual puedes desarrollar aplicaciones completas de forma rápida, así que en este curso aprenderás a programar siguiendo patrones
                            de diseño y generando código escalable y de calidad.


                        </p>
                        <br/>
                        <h3>Experiencia inigualable</h3>
                        <p>
                            En esta nueva modalidad de bootcamp online, te sumergirás en una experiencia única de aprendizaje,
                            en donde concoerás las mejores prácticas del desarrollo para construir tu propio sitio web.
                        </p>
                    </div>
                    <div className="box-data">
                        <p>Próxima edición</p>
                        <h3>9 de Marzo 2020</h3>

                        <hr/>
                        <p>Más de 24 hrs de ejercicios en</p>
                        <h3> 5 semanas</h3>

                        <hr/>
                        <p>Aprende con la práctica</p>
                        <h3>1 exámen final</h3>
                        <hr/>
                        <p>Precio especial diciembre <span style={{fontSize:"10px"}}>(hasta 6 MSI)</span></p>
                        <h3>$ 1,999.00</h3>

                        <hr/>
                    </div>
                </section >
                <section className="contenedor download-t">
                    <div className="temario">
                        <h2>¿Qué vas a aprender?</h2>
                        <p>Algunas cosas que aprenderás ene ste curso son:</p>
                        <p><span>&bull;</span> Git y Github</p>
                        <p><span>&bull;</span> PHP (código de calidad)</p>
                        <p><span>&bull;</span> Unit testing</p>
                        <p><span>&bull;</span> PHP Fig y PHP Unit</p>
                        <p><span>&bull;</span> Encapsulación, mensajes entre objetos y herencias</p>
                        <p><span>&bull;</span> Decoradores, Singleton y adaptadores</p>
                        <p><span>&bull;</span> MVC</p>
                    </div>
                    <div className="downl">
                        <div>
                            <h3>TEMARIO</h3>
                            <p>¿Quieres saber más sobre lo que aprenderás en el bootcamp?
                                Descarga el temario completo en PDF
                            </p>
                            <br/>
                            <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FAprende_PHP.pdf?alt=media&token=a0ff7ab0-f56e-4f55-9ca7-70352a925690" target="blank" >
                                <img src={download} alt=""/>
                            </a>
                        </div>
                    </div>
                </section>
                {/*   <section className="team-education">
                    <div className="circulo katia">
                        <img src={katia} alt="katia"/>
                    </div>
                </section>*/}
            </section>
        )
    }
}

export default BootcampPhp;