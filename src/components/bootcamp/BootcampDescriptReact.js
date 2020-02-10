import React, { Component } from 'react';
import "./Bootcamp.css"
import pactive from "../../assets/barra-de-progreso 2.svg";
import pinactive from "../../assets/barra-de-progreso_inactive.svg";
import download from "../../assets/iconos100x100DWN-05.png";
import {Link} from "react-router-dom";

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
                <title>Bootcamp React + Redux | FixterGeek</title>
                <section  className="container-bootcamp">
                    <div className="container-summary">
                        <h2 className="name-descript">Desarrollo Frontend con ReactJs + Redux</h2>
                        <hr className="line-red"/>
                        <p className="description"> Ahora que tienes conocimientos en JavaScript, da el siguiente paso para convertirte en un desarrollador frontend con uno de los frameworks más populares, utilizado por Facebook, Tesla y Twitter.</p>
                        <Link to="/apply/?b=5de52ac8734c4163308b63fc">
                            <button className="btn-float">INSCRIBIRME</button>
                        </Link>
                        <div className="nivel">
                            <p>Nivel <span style={{fontSize:"10px"}}>(intermedio)</span></p>
                            <img src={pactive} alt="nivel"/>
                            <img  src={pactive} alt="nivel"/>
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
                            ¡Explora el poder del desarrollo web front-end con ReactJs!</h2>
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
                        <p>Próxima edición</p>
                        <h3>17 de Febrero de 2020</h3>

                        <hr/>
                        <p>Más de 24 hrs de ejercicios en</p>
                        <h3> 6 semanas</h3>

                        <hr/>
                        <p>Aprende con la práctica</p>
                        <h3>1 exámen final</h3>
                        <hr/>
                        <p>Precio especial edición cero</p>
                        <h3>$ 1,999.00</h3>

                        <hr/>
                    </div>
                </section >
                <section className="contenedor download-t">
                    <div className="temario">
                        <h2>¿Qué vas a aprender?</h2>
                        <p>Algunas cosas que aprenderás ene ste curso son:</p>
                        <p><span>&bull;</span> RecatJs</p>
                        <p><span>&bull;</span> Entornos de desarrollo</p>
                        <p><span>&bull;</span> Componentes</p>
                        <p><span>&bull;</span> Props y State</p>
                        <p><span>&bull;</span> Redux</p>
                        <p><span>&bull;</span> Integración Redux con React</p>
                        <p><span>&bull;</span> Login y Autenticación</p>
                    </div>
                    <div className="downl">
                        <div>
                            <h3>TEMARIO</h3>
                            <p>¿Quieres saber más sobre lo que aprenderás en el bootcamp?
                                Descarga el temario completo en PDF
                            </p>
                            <br/>
                            <a href="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FSyllabus_FixterBOOTCAMP.pdf?alt=media&token=aa1ebddb-ee67-4a8f-8771-514b0eb13059" target="blank" >
                                <img src={download} alt="descarga"/>
                            </a>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default BootcampDescriptReact;