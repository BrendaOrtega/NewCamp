import React, { Component } from 'react';
import "./Home.css"
import FontAwesome from "react-fontawesome"
import Button from "../common/Button";
import brenda from "../../assets/21105859_1384283821667002_3656915529923068437_n.jpg"
import bliss from "../../assets/67460673_10220365825273658_6972567135163777024_n.jpg"
import david from "../../assets/50226136_2192976174151067_1003654992885710848_o.jpg"
import osw from "../../assets/18891870_1543998225611670_8032322982945740932_o.jpg"
import carlitos from "../../assets/carlitos.jpg"

class Team extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <section >
                <meta
                    name="description"
                    content="En FixterGeek estamos comprometidos con la educación tecnológica,
                    estamos comprometidos con contribuir a la formación de desarrolladores en México."
                />
                <meta
                    name="keywords"
                    content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
                />
                <title>Fixter Team</title>
                <section className="bootcamps">
                    <div className="cover2">
                        <div className="invite-aply">
                            <p className="slogan">"Work <strong>hard</strong> or go <strong>home</strong>"</p>
                        </div>
                    </div>

                </section>

                <div className="box-home">
                <h2 className="subtitulo">Conoce a nuestro equipo</h2>
                <p className="text">En FixterGeek estamos comprometidos con la educación tecnológica y con contribuir a la formación de desarrolladores en México.
                </p>
                    <br/>
                    <h3 className="sub3">Founders</h3>



                <div className="box-miembros">
                    <div className="box_team">
                        <div className="cuadro" style={{backgroundImage:`url("${brenda}")`}}>
                        </div>
                        <h4>Brenda Ortega</h4>
                        <p>CEO & UX/UI Designer</p>
                        <a href="https://www.facebook.com/brenda.ortega.7121">
                            <FontAwesome name="facebook-square" />
                        </a>
                        <a href="https://www.linkedin.com/in/brenda-ort/" target="blank">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>
                    <div className="box_team">
                        <div className="cuadro" style={{backgroundImage:`url("${bliss}")`}}>
                        </div>
                        <h4>Héctor Bliss</h4>
                        <a href="https://www.facebook.com/hector.bliss">
                            <FontAwesome name="facebook-square" />
                        </a>
                        <a href="https://www.linkedin.com/in/hectorbliss/" target="blank">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>

                </div>
                    <br/>
                    <br/>
                    <h3 className="sub3">Collaborators</h3>
                    <div className="box-miembros">
                    <div className="box_team">
                        <div className="cuadro" style={{backgroundImage:`url("${david}")`}}>
                        </div>
                        <h4>David Zavala</h4>
                        <a href="https://www.facebook.com/david.pzmck">
                            <FontAwesome name="facebook-square" />
                        </a>
                        <a href="https://www.linkedin.com/in/david-zavala-bartolome/" target="blank">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>
                    <div className="box_team ">
                        <div className="cuadro" style={{backgroundImage:`url("${osw}")`}}>
                        </div>
                        <h4>Oswaldo Martinez</h4>
                        <a href="https://www.facebook.com/oswwaldom">
                            <FontAwesome name="facebook-square" />
                        </a>
                        <a href="https://www.linkedin.com/in/oswaldinho24k/" target="blank">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>

                        <div className="box_team">
                            <div className="cuadro" style={{backgroundImage:`url("${carlitos}")`}}>
                            </div>
                            <h4>Carlos Mendoza</h4>
                            <a href="https://www.facebook.com/fernando.mendoza.7146">
                                <FontAwesome name="facebook-square" />
                            </a>
                            <a href="https://www.linkedin.com/in/reloadercf/" target="blank">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                </div>
                {/*<p>Fixter crea productos digitales, desde sitios
                    web y aplicaciones móviles, hasta servicios y herramientas empresariales.
                    Somos un equipo de desarrolladores enfocado en ofrecer productos digitales a la medida,
                    y comprometido con la satisfacciónd e nuetsros clientes.</p>*/}



            </div>
            </section>
        )
    }
}

export default Team;