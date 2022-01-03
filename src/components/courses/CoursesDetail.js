    import React, { useEffect } from 'react';
import "./Courses.css"
import {Link} from "react-router-dom";
import ButtonRed from "../common/ButtonRed"
import { Tabs } from 'antd';
import pyth from "../../assets/badgePYTHON_TTLBLCK_Mesa_de_trabajo_1.png";
import FontAwesome from "react-fontawesome"
import TagT from "../common/TagT"
import katia from "../../assets/Jk6JaJzJ_400x400.jpg"
import {Collapse} from "antd";

const { TabPane } = Tabs;

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

export const CoursesDetail = () => {

    useEffect(
        ()=> {
            window.scroll(0, 0)
        },
        []
    )

    return (
        <section>
            <div className="black"></div>
            <div className="flex">
                <div className="detail-descript">
                    <h2>Fundamentos de Programación con Python</h2>
                    <p>
                    Aprende las bases de la programación, y prepárate para este programa creado especialmente para principiantes
                     que quieren incursionar en el mundo de Python.  Este curso es una gran introducción a los conceptos básicos de
                programación, en donde al final, entenderás como utilizar este
                lenguaje y como aplicarlo tanto para el análisis de datos, como
                para el desarrollo web.
                    </p>
                    <p id="price">$999.00 MXN</p>
                    <Link to="/promo/aprende-python">
                        <ButtonRed text="Inscribirme"/>
                    </Link>
                </div>
                <div className="detail-badge">
                    <img src={pyth} alt="curso-badge"/>
                </div>
            </div>



            <div className=" box-detail">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Descripción" key="1">
                    <div className="course-descript">
                        <div className="descripcion-text">
                            {/* <iframe title="Example"
                                src="https://www.youtube.com/embed/Rux-Q_nPrp0" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe> */}
                            <h3>Aprende a programar con Python</h3>
                            <p> Python es un lenguaje de programación versátil y popular, es uno
                                de los lenguajes de programación más populares y de más rápido
                                crecimiento del mundo, utilizado por ingenieros de software,
                                analistas, científicos de datos e ingenieros de machine learning.
                            </p>
                            <p>Este curso es una gran introducción a los conceptos básicos de
                            programación, en donde al final, entenderás como utilizar este
                            lenguaje y como aplicarlo tanto para el análisis de datos, como
                            para el desarrollo web.
                            </p>
                            <h3>¿A quién está dirigido?</h3>
                            <p>A todos aquellos que quieran aprender a programar, no importa si nunca has programado, este curso empieza desde cero.</p>
                            <h3>Requisitos</h3>
                            <p>Solo necesitarás tu computadora y todas las ganas de aprender y sumergirte en este maravilloso mundo.</p>
                            <h3>Herramientas</h3>
                            <TagT text="Git y Github"/> 
                            <TagT text="Python"/> 
                            <TagT text="Pandas"/>
                            <TagT text="NumPy"/> 
                               
                        </div>
                        <div className="descripcion-autor">
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <div className="autor-foto" style={{backgroundImage:`url(${katia})`}}>
                                </div>
                            </div>
                            <h3>Katia Lira</h3>
                            <div className="redes-instructor">
                          <a href="https://github.com/katialira" target="_blank" rel="noopener noreferrer">
                              <FontAwesome name="github"/>
                          </a>
                          <a href="https://www.linkedin.com/in/katia-lira-engineer/" target="_blank" rel="noopener noreferrer">
                              <FontAwesome name="linkedin"/>
                          </a>
                          <a href="https://twitter.com/lakatialira" target="_blank" rel="noopener noreferrer">
                              <FontAwesome name="twitter"/>
                          </a>

                      </div>
                            <br/>
                            <div style={{textAlign:"left"}}>
                                <h4>Detalles del curso</h4>
                                <hr className="divider"/>
                                <p> <FontAwesome name="film"/>40 lecciones  </p>
                                <p> <FontAwesome name="hourglass-start"/> 5 hrs </p>
                                <p> <FontAwesome name="language"/> Español  </p>
                                <p> <FontAwesome name="laptop"/>100% Online</p>
                            </div>
                        </div>
                    </div>
                        {/* <CourseDescription/> */}
                    </TabPane>
                    <TabPane tab="Programa" key="2">
                    <div className="course-program">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                            <Panel header="Prework" key="1" style={{fontSize:"18px"}}>
                                <p>¿Estas listo para iniciar el bootcamp?
                                    <br/>
                                    Aprender a programar en un bootcamp online es una tarea muy intensa, por lo que antes de iniciar con el curso deberás completar las lecciones y leer una serie de recursos, en donde aprenderás:</p>
                                <ul>
                                    <li>A utilizar la terminal</li>
                                    <li>A instalar Python y utilizar Shell</li>
                                    <li>Git y Github</li>
                                    <li>Comandos básicos de Github</li>
                                </ul>
                            </Panel>
                            <Panel header="Semana 1" key="2" style={{fontSize:"18px"}}>
                               <p>Aprenderás a instalar Python, crearás tu primer script, utilizarás
                                cadenas, variables y comenzarás a comprender cómo hacer
                                ciclos, condicionales y funciones.</p>
                            </Panel>
                            <Panel header="Semana 2" key="3" style={{fontSize:"18px"}}>
                                <p>Una vez que conozcas las bases de un lenguaje de
                                programación, iremos más allá con Python y descubrirás otras
                                de sus características</p>
                            </Panel>
                            <Panel header="Semana 3" key="4" style={{fontSize:"18px"}}>
                                <p>Ahora que conoces lo básico de Python, daremos un paso más y
                                veremos funciones avanzadas que nos permiten comprender la
                                lógica de programación y realizar diversas tareas esenciales.</p>
                            </Panel>
                            <Panel header="Semana 4" key="5" style={{fontSize:"18px"}}>
                                <p>Una vez que comprendiste cómo realizar funciones avanzadas,
                                es momento de conocer los ambientes virtuales y hacer de la
                                programación algo especializado y listo para tareas específicas.</p>
                            </Panel>
                        </Collapse>
                    </div>
                        {/* <CourseProgram/> */}
                    </TabPane>
                    {/*<TabPane tab="Comunidad" key="3">
                        Content of Tab Pane 3
                    </TabPane>*/}
                </Tabs>
            </div>
        </section>
    );
};