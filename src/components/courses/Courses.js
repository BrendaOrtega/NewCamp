import React, { Component } from 'react';
import Button from "../common/Button"
import "./Courses.css"
import {CourseCard} from "../card/CourseCard";
import siete from "../../assets/badget1.png";
import cinco from "../../assets/badget2.png";
import seis from "../../assets/badget-3.png";

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
                <section className="bootcamps" style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fportada-cursos.png?alt=media&token=fc0ec4ce-6e80-45be-9433-ec81b675cf7a")`, backgroundPosition:"top"}}>
                    <div className="cover2" >
                        <div className="invite-aply">
                            <h2 className="white-subtitulos">Herramientas para desarrolladores</h2>
                            <p>Si quieres aprender sobre herramientas específicas, <strong>frameworks, testing, SEO, analytics, diseño de interfaces</strong> y <strong>más.</strong>  Estas en el lugar correcto. </p>
                            <a href="#explorar">
                                <Button text="Explorar" link/>
                            </a>
                        </div>
                    </div>

                </section>
                <section id="explorar" className=" gray">
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
                    </div>
                </section>
            </section>
        )
    }
}

export default Courses;