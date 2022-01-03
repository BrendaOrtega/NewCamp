import React, { Component } from 'react';
import "./Home.css"
import FontAwesome from "react-fontawesome"
import brenda from "../../assets/21105859_1384283821667002_3656915529923068437_n.jpg"
import bliss from "../../assets/67460673_10220365825273658_6972567135163777024_n.jpg"
import david from "../../assets/50226136_2192976174151067_1003654992885710848_o.jpg"
import osw from "../../assets/18891870_1543998225611670_8032322982945740932_o.jpg"
import katia from "../../assets/Jk6JaJzJ_400x400.jpg"

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
                        <p>CEO & Product Designer</p>
                        <a href="https://github.com/BrendaOrtega" target="_blank" rel="noopener noreferrer">
                            <FontAwesome name="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/brenda-ort/" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>
                    <div className="box_team">
                        <div className="cuadro" style={{backgroundImage:`url("${bliss}")`}}>
                        </div>
                        <h4>Héctor Bliss</h4>
                        <p>CTO & Software Engineer</p>
                        <a href="https://github.com/HectorBlisS" target="_blank" rel="noopener noreferrer">
                            <FontAwesome name="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/hectorbliss/" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>

                </div>
                    <br/>
                    <br/>
                    <h3 className="sub3">Colaboradores</h3>
                    <div className="box-miembros">
                    <div className="box_team">
                        <div className="cuadro" style={{backgroundImage:`url("${david}")`}}>
                        </div>
                        <h4>David Zavala</h4>
                        <p>Sr Frontend Developer</p>
                        <a href="https://github.com/DeividZavala" target="_blank" rel="noopener noreferrer">
                            <FontAwesome name="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/david-zavala-bartolome/" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>
                    <div className="box_team ">
                        <div className="cuadro" style={{backgroundImage:`url("${osw}")`}}>
                        </div>
                        <h4>Oswaldo Martinez</h4>
                        <p>Sr Fullstack Developer</p>
                        <a href="https://github.com/Oswaldinho24k" target="_blank" rel="noopener noreferrer">
                            <FontAwesome name="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/oswaldinho24k/" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>
                    <div className="box_team ">
                        <div className="cuadro" style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2F4226221.jpeg?alt=media&token=a852ee83-b7fb-41c8-bb5e-783eab6d1410")`}}>
                        </div>
                        <h4>Andrés Quintero Galván</h4>
                        <p>Software Engineer</p>
                        <a href="https://github.com/AQUINTERO446" target="_blank" rel="noopener noreferrer">
                            <FontAwesome name="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/andres-quintero-galvan-07812450/" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>

                        {/* <div className="box_team">
                            <div className="cuadro" style={{backgroundImage:`url("${carlitos}")`}}>
                            </div>
                            <h4>Carlos Mendoza</h4>
                            <p>Fullstack Developer</p>
                            <a href="https://github.com/reloadercf" target="_blank" rel="noopener noreferrer">
                                <FontAwesome name="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/reloadercf/" target="blank" rel="noopener noreferrer">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div> */}
                        <div className="box_team">
                            <div className="cuadro" style={{backgroundImage:`url("${katia}")`}}>
                            </div>
                            <h4>Katia Lira</h4>
                            <p>Web Engineer</p>
                            <a href="https://github.com/katialira" target="_blank" rel="noopener noreferrer">
                                <FontAwesome name="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/katia-lira-engineer/" target="_blank" rel="noopener noreferrer">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Team;