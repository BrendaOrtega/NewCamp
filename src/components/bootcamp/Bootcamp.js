import React, { Component } from 'react';
import Button from "../common/Button"
import "./Bootcamp.css"
import {CardBootcamp} from "../card/CardBootcamp";
import pyth from "../../assets/badgePYTHON_TTLBLCK_Mesa_de_trabajo_1.png";
import web from "../../assets/badge3D_Mesa_de_trabajo_1.png";

class Bootcamp extends Component {
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
                <title>Bootcamp | FixterGeek</title>
                <section className="bootcamps">
                    <div className="cover2">
                        <div className="invite-aply">
                            <h2 className="white-subtitulos">Conviértete en desarrollador en 4 semanas</h2>
                            <p>Sumergéte en el mundo del desarrollo de software de forma <strong>Online</strong> o <strong>Presencial</strong></p>
                            <a href="#explorar">
                                <Button text="Explorar" link/>
                            </a>
                        </div>
                    </div>

                </section>
                <section id="explorar" className=" gray">
                    <div className="flexin">

                            <CardBootcamp
                                image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204700.jpg?alt=media&token=0e15bd6c-2602-473e-a5a0-b2e6a604b264"
                                badge={pyth}
                                name="Fundamentos de Programación con Python"
                                descript="Aprende las bases de la programación con Python y conoce lo necesario sobre el modelo vista controlador 👨🏻‍💻 "
                                lecciones="45 lecciones"
                                tiempo="4 semanas"
                                link="/bootcamp-descript"
                                modalidad="100% Online"
                            />
                            <CardBootcamp
                                image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204710.jpg?alt=media&token=9b20756d-028d-46c2-a010-c515fe906cfd"
                                badge={web}
                                name="Fundamentos de Desarrollo Web con JavaScript"
                                descript="Aprende las bases del desarrollo web, y maqueta y hostea tu propio sitio web con JavaScript 🚀"
                                lecciones="65 lecciones"
                                tiempo="4 semanas"
                                link="/bootcamp-descript-web"
                                modalidad="100% Online"

                            />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204634.jpg?alt=media&token=dacbdd8b-040f-49ac-999e-b614a2e4f890"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fbadges_Mesa_de_trabajo_1_copia_3.png?alt=media&token=e91625bc-6438-4eb4-9fd0-abe6761bfd25"
                            name="Desarrollo Frontend con ReactJs + Redux"
                            descript="Crea una aplicación web desde cero utilizando ReactJs y manipulando los estados desde Redux 👾  "
                            lecciones=" 47 lecciones"
                            tiempo="4 semanas"
                            link="/bootcamp-react-redux"
                            modalidad="100% Online"
                        />

                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204646.jpg?alt=media&token=534edde1-4cc5-400d-af2e-6f9ed4a1a3bd"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fnode_BADGE_Mesa_de_trabajo_1.png?alt=media&token=4e3f49d4-f4a2-4572-9e7a-b92d66d2a45a"
                            name="Backend API con NodeJs y ExpressJs"
                            descript="Aprende que es un backend, y a crear tus propias API's con NodeJs y ExpressJs... Herramientas utilizadas por Netflix, Linkedin y más. "
                            lecciones=" 54 lecciones"
                            tiempo="4 semanas"
                            link="/bootcamp-backend-nodejs"
                            modalidad="100% Online"
                        />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204646.jpg?alt=media&token=534edde1-4cc5-400d-af2e-6f9ed4a1a3bd"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fnode_BADGE_Mesa_de_trabajo_1.png?alt=media&token=4e3f49d4-f4a2-4572-9e7a-b92d66d2a45a"
                            name="Testing en React.Js"
                            descript="Hay muchas herramientas para testing, pero pocas pueden
                             aprovecharse tanto como la combinación de jest y Enzyme para emular interacción del usuario con la interfaz."
                            lecciones=" Julio 2020"
                            tiempo="Estreno"
                            modalidad="100% Online"
                        />



                    </div>
                </section>

            </section>
        )
    }
}

export default Bootcamp;