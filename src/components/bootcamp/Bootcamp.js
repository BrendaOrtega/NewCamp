import React, { Component } from 'react';
import Button from "../common/Button"
import "./Bootcamp.css"
import {CardBootcamp} from "../card/CardBootcamp";
import pyth from "../../assets/badgePYTHON_TTLBLCK_Mesa_de_trabajo_1.png";
import web from "../../assets/badge3D_Mesa_de_trabajo_1.png";

const photo1 = "https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fphoto.jpg?alt=media&token=cbbffbc4-d321-4e8c-bc20-abcc83bc8710"

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
                            <h2 className="white-subtitulos">Learn something new everyday</h2>
                            <p>Elige el bootcamp ideal para ti, y empieza a aprender ya en nuestra modalidad de aprendizaje híbrida.</p>
                            
                        </div>
                    </div>

                </section>
                <section className="search-box">
                    <div className="search-bar">
                        <input className="search-input" type="text" placeholder="Busca tu bootcamp por lenguaje o herramientra" name="personla-link" />
                        <button className="btn-search">Buscar</button>
                    </div>
                </section>
                <section id="explorar" className=" gray">
                    <div className="flexin">
                            {/* <CardBootcamp
                                image={photo1}
                                badge={pyth}
                                name="Fundamentos de Desarrollo Web con JavaScript"
                                descript="Aprende las bases de la programación con Python y conoce lo necesario sobre el modelo vista controlador 👨🏻‍💻 "
                                tiempo="8 semanas"
                                link="/bootcamp-descript"
                                modalidad="Híbrida"
                            /> */}
                            <CardBootcamp
                                image={photo1}
                                badge={web}
                                name="Fundamentos de Desarrollo Web con JavaScript"
                                descript="Aprende las bases del desarrollo web, y maqueta y hostea tu propio sitio web con JavaScript 🚀"
                                tiempo="8 semanas"
                                horas="32hrs en vivo"
                                link="/bootcamp-descript-web"
                                modalidad="Modalidad Híbrida"
                                inicio="Inicia 19 de Abril de 2020"

                            />
                             <CardBootcamp
                                image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fpexels-photo-325229.jpeg?alt=media&token=6be10647-10bf-4fd1-89f2-dfaf9a664359"
                                badge={web}
                                name="Aprende microservicios con Docker"
                                descript="Aprende a utilizarlo en etapas de desarrollo y producción siguiendo practicas de integración continua y despliegue continuo. 💻"
                                tiempo="8 semanas"
                                horas="32hrs en vivo"
                                link="/bootcamp-descript-docker"
                                modalidad="Modalidad Híbrida"
                                inicio="Inicia 19 de Abril de 2020"

                            />
                        {/* <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204634.jpg?alt=media&token=dacbdd8b-040f-49ac-999e-b614a2e4f890"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fbadges_Mesa_de_trabajo_1_copia_3.png?alt=media&token=e91625bc-6438-4eb4-9fd0-abe6761bfd25"
                            name="Desarrollo Frontend con ReactJs + Redux"
                            descript="Crea una aplicación web desde cero utilizando ReactJs y manipulando los estados desde Redux 👾  "
                            tiempo="8 semanas"
                            link="/bootcamp-react-redux"
                            modalidad="Híbrida"
                            />

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

export default Bootcamp;