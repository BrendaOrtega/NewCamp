import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./Courses.css"
import {CourseCard} from "../card/CourseCard";
import siete from "../../assets/badget1.png";
import cinco from "../../assets/badget2.png";
import seis from "../../assets/badget-3.png";
import pyth from "../../assets/badgePYTHON_TTLBLCK_Mesa_de_trabajo_1.png";
import web from "../../assets/badge3D_Mesa_de_trabajo_1.png"

class Courses extends Component {
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
                <title>Cursos | FixterGeek</title>
             
                <section className="bootcamps"  style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fportada-cursos.png?alt=media&token=fc0ec4ce-6e80-45be-9433-ec81b675cf7a")`, backgroundPosition:"top"}}>
                    <div className="cover2">
                        <div className="invite-aply">
                            <h2 className="white-subtitulos">Learn something new everyday</h2>
                            <p>Si quieres aprender sobre herramientas específicas, <strong>frameworks, testing, SEO, analytics, diseño de interfaces</strong> y <strong>más.</strong>  Estas en el lugar correcto. </p>
                            
                        </div>
                    </div>

                </section>
                <section className="search-box">
                    <div className="search-bar">
                        <input className="search-input" type="text" placeholder="Busca tu curso por lenguaje o herramientra" name="personla-link" />
                        <button className="btn-search">Buscar</button>
                    </div>
                </section>
                <section id="explorar" className=" gray">
                    <div className="flexin">
                    <Link to="/detail/python">
                        <CourseCard image={pyth} name="Fundamentos de Programación con Python"
                                        lecciones="40 lecciones" tiempo="5 horas" />
                    </Link>
                    <Link to="/detail/web">
                        <CourseCard image={web} name="Fundamentos de Desarrollo Web con JavaScript"
                                        lecciones="65 lecciones" tiempo="6 horas" />
                    </Link>
                    <Link to="/detail/react">
                        <CourseCard image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fbadges_Mesa_de_trabajo_1_copia_3.png?alt=media&token=e91625bc-6438-4eb4-9fd0-abe6761bfd25" name="Crea una aplicación web con ReactJs 👾"
                                        lecciones="45 lecciones" tiempo="4 horas" 
                            />
                    </Link>
                    
                    
                       

                        </div>
                        <h2 className="title-m">Próximos cursos</h2>
                        <div className="flexin">
                        <CourseCard image={siete} name="Tu primer aplicación con Firebase"
                                    lecciones="12 lecciones" tiempo="35 minutos" mensaje="Junio 2020"
                        />

                        <CourseCard image={seis} name="Aprende Redux con React hooks y GraphQL"
                                    lecciones="10 lecciones" tiempo="40 minutos" mensaje="Junio 2020"
                        />
                        <CourseCard image={cinco} name="Empezando con Firebase Realtime Database"
                                    lecciones="12 lecciones" tiempo="35 minutos" mensaje="Julio 2020"
                        />

                        <CourseCard image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FCaptura%20de%20Pantalla%202020-05-17%20a%20la(s)%2018.15.28.png?alt=media&token=16b98926-f8e3-4596-b9a1-18e95d705149" name="Estructura de datos complejos con Realtime DB"
                                    lecciones="10 lecciones" tiempo="40 minutos" mensaje="Julio 2020"
                        />
                    

{/*                      

                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204646.jpg?alt=media&token=534edde1-4cc5-400d-af2e-6f9ed4a1a3bd"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fnode_BADGE_Mesa_de_trabajo_1.png?alt=media&token=4e3f49d4-f4a2-4572-9e7a-b92d66d2a45a"
                            name="Backend API con NodeJs y ExpressJs"
                            descript="Aprende que es un backend, y a crear tus propias API's con NodeJs y ExpressJs... Herramientas utilizadas por Netflix, Linkedin y más. "
                            lecciones=" 54 lecciones"
                            tiempo="4 semanas"
                            link="/bootcamp-backend-nodejs"
                            modalidad="Híbrida"
                            />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204646.jpg?alt=media&token=534edde1-4cc5-400d-af2e-6f9ed4a1a3bd"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fnode_BADGE_Mesa_de_trabajo_1.png?alt=media&token=4e3f49d4-f4a2-4572-9e7a-b92d66d2a45a"
                            name="Testing en React.Js"
                            descript="Hay muchas herramientas para testing, pero pocas pueden
                             aprovecharse tanto como la combinación de jest y Enzyme para emular interacción del usuario con la interfaz."
                            lecciones=" Julio 2020"
                            tiempo="Estreno"
                            modalidad="Híbrida"
                            /> */} 

                    </div>
                </section>
            </section>
        )
    }
}

export default Courses;