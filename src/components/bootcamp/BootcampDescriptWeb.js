import React, { Component } from 'react';
import "./Bootcamp.css"
import pactive from "../../assets/barra-de-progreso 2.svg";
import pinactive from "../../assets/barra-de-progreso_inactive.svg";
import download from "../../assets/iconos100x100DWN-05.png";
import {Link} from "react-router-dom";
class BootcampDescriptWeb extends Component {
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
                <title>Bootcamp Web | FixterGeek</title>
                <section  className="container-bootcamp">
                    <div className="container-summary">
                        <h2 className="name-descript">Fundamentos de Desarrollo Web con JavaScript</h2>
                        <hr className="line-red"/>
                        <p className="description"> Aprende las bases de la programación y prepárate
                            para incursionar en el mundo del desarrollo Web utilizando uno de los lenguajes más utilizados: JavaScript.</p>
                        <Link to="/apply/?b=5d632e4c339a1b379df68a74">
                            <button className="btn-float">INSCRIBIRME</button>
                        </Link>

                        <div className="nivel">
                            <p>Nivel <span style={{fontSize:"10px"}}>(básico)</span></p>
                            <img src={pactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                            <img style={{opacity:".3"}} src={pinactive} alt="nivel"/>
                        </div>
                    </div>
                    <div id="contain" className="container-content">
                        <div className="background">

                        </div>

                    </div>
                </section>
                <section style={{backgroundColor:"#f5f5f5"}} className="contenedor camp-programa">
                    <div className="box-programa">
                        <h2>
                            ¡Explora el poder del desarrollo web front-end con JavaScript!</h2>
                        <br/>
                        <h3>Por qué JavaScript...</h3>
                        <p>
                            JavaScript se encuentra en el top 10 de los lenguajes de programación más utilizados,
                            al aprenderlo, estarás dando tus primeros pasos para convértirte en un desarrollador
                            profesional.
                        </p>
                        <br/>
                        <h3>Experiencia inigualable</h3>
                        <p>
                            En esta nueva modalidad de bootcamp online, te sumergirás en una experiencia única de aprendizaje,
                            en donde conocerás las mejores prácticas del desarrollo para construir tu propio sitio web.
                        </p>
                    </div>
                    <div className="box-data">
                        <p>Próxima edición</p>
                        <h3>27 de Enero 2020</h3>

                        <hr/>
                        <p>Más de 24 hrs de ejercicios en</p>
                        <h3> 4 semanas</h3>

                        <hr/>
                        <p>Aprende con la práctica</p>
                        <h3>1 exámen final</h3>
                        <hr/>
                        <p>Precio <span style={{fontSize:"10px"}}>(hasta 6 MSI)</span></p>
                        <h3>$ 1,999.00</h3>

                        <hr/>
                    </div>
                </section >
                <section className="contenedor download-t">
                    <div className="temario">
                        <h2>¿Qué vas a aprender?</h2>
                        <p>Algunas cosas que aprenderás ene ste curso son:</p>
                        <p><span>&bull;</span> Git y github</p>
                        <p><span>&bull;</span> HTML y CSS</p>
                        <p><span>&bull;</span> Selectotes y flexbox</p>
                        <p><span>&bull;</span> Manipulación del DOM</p>
                        <p><span>&bull;</span> Algoritmia</p>
                        <p><span>&bull;</span> Vanilla Js</p>
                        <p><span>&bull;</span> Webpack</p>
                        <p><span>&bull;</span> Hosting</p>
                    </div>
                    <div className="downl">
                        <div>
                            <h3>TEMARIO</h3>
                            <p>¿Quieres saber más sobre lo que aprenderás en el bootcamp?
                                Descarga el temario completo en PDF
                            </p>
                            <br/>
                            <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FFundamentos_Desarrollo_Web.pdf?alt=media&token=80e68013-45be-429d-b9c8-5b58bc9a3615" target="blank" >
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

export default BootcampDescriptWeb;