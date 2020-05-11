import React, { Component } from 'react';
import Button from "../common/Button"
import "./Bootcamp.css"
import {CardBootcamp} from "../card/CardBootcamp";
import image from "../../assets/17834072_1542858145778019_3295799447117516700_o.jpg"
import image2 from "../../assets/28698604_1973144766082686_589124668727305128_o.jpg"
import image3 from "../../assets/17855548_1542769892453511_1377015286894108471_o.jpg"
import image4 from "../../assets/25438830_1861335307263633_2930730188315941572_o.jpg"
import image5 from "../../assets/ember.jpg"
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
                                lecciones="74 lecciones"
                                tiempo="4 semanas"
                                link="/bootcamp-descript-web"
                                modalidad="100% Online"

                            />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204634.jpg?alt=media&token=dacbdd8b-040f-49ac-999e-b614a2e4f890"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fbadges_Mesa_de_trabajo_1_copia_3.png?alt=media&token=e91625bc-6438-4eb4-9fd0-abe6761bfd25"
                            name="Desarrollo Frontend con ReactJs + Redux"
                            descript="Crea una aplicación web desde cero utilizando ReactJs y manipulando los estados desde Redux 👾  "
                            lecciones=" 70 lecciones"
                            tiempo="4 semanas"
                            link="/bootcamp-react-redux"
                            modalidad="100% Online"
                        />

                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F20200427_204646.jpg?alt=media&token=534edde1-4cc5-400d-af2e-6f9ed4a1a3bd"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fnode_BADGE_Mesa_de_trabajo_1.png?alt=media&token=4e3f49d4-f4a2-4572-9e7a-b92d66d2a45a"
                            name="Backend API con NodeJs y ExpressJs"
                            descript="Aprende que es un backend, y a crear tus propias API's con NodeJs y ExpressJs... Herramientas utilizadas por Netflix, Linkedin y más. "
                            lecciones=" 70 lecciones"
                            tiempo="4 semanas"
                            link="/bootcamp-backend-nodejs"
                            modalidad="100% Online"
                        />

                        <CardBootcamp
                            image={image4}
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fbadges_Mesa_de_trabajo_1_copia_2%20(1).png?alt=media&token=b104bae1-992f-4924-85aa-55aaa98a08ba"
                            name="Aprende a usar PHP correctamente"
                            descript="Aprende a programar con uno de los lenguajes más populares de forma fácil y eficiente, pero sobre todo con buenas prácticas"
                            lecciones="53 lecciones"
                            tiempo="4 semanas"
                            link="/bootcamp-php"
                            modalidad="100% Online"
                        />
                        <CardBootcamp
                            image="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F14435022_1302624693134700_4836530304569751852_o.jpg?alt=media&token=c54eb24c-0233-459b-9a88-ecd83d84a0e5"
                            badge="https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FbadgePHP_Prueba_Mesa_de_trabajo_1.png?alt=media&token=15556e2b-3ba4-4c1d-b675-ab681d9c4775"
                            name="Aplicaciones web fullstack con Laravel"
                            descript="Domina PHP y Laravel, para despúes crear una aplicación web de 0 a 100... y con VueJs en el frontend. 🔥"
                            lecciones="83 lecciones"
                            tiempo="6 semanas"
                            link="/bootcamp-descript-laravel"
                            modalidad="100% Online"
                        />

                    </div>
                </section>

            </section>
        )
    }
}

export default Bootcamp;