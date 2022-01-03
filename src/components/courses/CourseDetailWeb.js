import React, { useEffect } from 'react';
import "./Courses.css"
import badge from "../../assets/badget1.png"
import {Link} from "react-router-dom";
import ButtonRed from "../common/ButtonRed"
import { Tabs } from 'antd';
import {CourseProgram} from "./CourseProgram";
import {CourseDescription} from "./CourseDescription"
import pyth from "../../assets/badgePYTHON_TTLBLCK_Mesa_de_trabajo_1.png";
import FontAwesome from "react-fontawesome"
import TagT from "../common/TagT"
import katia from "../../assets/Jk6JaJzJ_400x400.jpg"
import {Collapse} from "antd";
import {CardVideo} from "../card/CardVideo";
import web from "../../assets/badge3D_Mesa_de_trabajo_1.png"
import bliss from "../../assets/67460673_10220365825273658_6972567135163777024_n.jpg"
import Button from "../common/Button";

const { TabPane } = Tabs;

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

export const CoursesDetailWeb = () => {

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
                    <h2>Fundamentos de Desarrollo Web con JavaScript</h2>
                    <p>
                    Aprende las bases del desarrollo web desde cero.  En este curso aprenderás como se compone la web, conocerás los conceptos básicos, aprenderás HTML, CSS
                    y JavaScript para al final crear tu propio sitio web.
                    </p>
                    <p id="price">$999.00 MXN</p>
                    <Link to="/promo/aprende-python">
                        <Button ico="_>" text="Inscribirme" />
                    </Link>
                </div>
                <div className="detail-badge">
                    <img src={web} alt="curso-badge"/>
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
                            <h3>Aprende a programar con JavaScript</h3>
                            <p> JavaScript es uno de los lenguajes de programación más utilizados para el desarrollo web. 
                                Así que es una excelente opción para iniciar tu camino como desarrollador. 
                            </p>
                            <p>A lo largo del curso, aprenderás
                                los conceptos básicos de programación, aprenderás a maquetar con HTML, a definir estilos con CSS
                                y a darle funcionalidad con JavaScript, además de que podrás hostear tu propio sitio web con Firebase.
                            </p>
                            <h3>¿A quién está dirigido?</h3>
                            <p>A todos aquellos que quieran aprender a programar, no importa si nunca has programado, este curso empieza desde cero.</p>
                            <h3>Requisitos</h3>
                            <p>Solo necesitarás tu computadora y todas las ganas de aprender y sumergirte en este maravilloso mundo.</p>
                            <h3>Herramientas</h3>
                            <TagT text="Git y Github"/> 
                            <TagT text="HTML"/> 
                            <TagT text="CSS"/>
                            <TagT text="JavaScript"/> 
                            <TagT text="Webpack"/> 
                            <TagT text="Firebase"/> 
                               
                        </div>
                        <div className="descripcion-autor">
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <div className="autor-foto" style={{backgroundImage:`url(${bliss})`}}>
                                </div>
                            </div>
                            <h3>Héctor Bliss</h3>
                            <div className="redes-instructor">
                                <a href="https://github.com/HectorBlisS" target="_blank" rel="noopener noreferrer">
                                    <FontAwesome name="github"/>
                                </a>
                                <a href="https://www.linkedin.com/in/hectorbliss/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesome name="linkedin"/>
                                </a>
                                <a href="https://twitter.com/HectorBlisS" target="_blank" rel="noopener noreferrer">
                                    <FontAwesome name="twitter"/>
                                </a>

                                </div>
                            <br/>
                            <div style={{textAlign:"left"}}>
                                <h4>Detalles del curso</h4>
                                <hr className="divider"/>
                                <p> <FontAwesome name="film"/>65 lecciones  </p>
                                <p> <FontAwesome name="hourglass-start"/> 6 hrs </p>
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
                                    <li>A instalar NodeJs y a utilizar NVM</li>
                                    <li>NPM</li>
                                    <li>Git y Github</li>
                                    <li>Comandos básicos de Github</li>
                                </ul>
                            </Panel>
                            <Panel header="Semana 1" key="2" style={{fontSize:"18px"}}>
                               <p>Ahora que has completado el prework, aprenderás como
funciona el desarrollo web, iniciando con HTML, lenguaje de
maquetado, CSS para agregar estilos a nuestro sitio y JavaScript
para darle interactividad</p>
                            </Panel>
                            <Panel header="Semana 2" key="3" style={{fontSize:"18px"}}>
                                <p>Despúes de conocer todas las etiquetas HTML, con las que
maquetarás un sitio, el momento de darle estilos ha llegado. Así
que utilizaremos una gran variedad de atributos CSS para
modificar nuestra interfaz.</p>
                            </Panel>
                            <Panel header="Semana 3" key="4" style={{fontSize:"18px"}}>
                                <p>Ahora que conoces las bases del desarrollo, profundizaremos en
uno de los lenguajes más utilizados para el desarrollo web, no
solo para frontend sino también para backend: JavaScript.</p>
                            </Panel>
                            <Panel header="Semana 4" key="5" style={{fontSize:"18px"}}>
                                <p>Ya eres capaz de maquetar un sitio, estilizardo y darle
funcionalidad, así que estamos a un paso de lanzar nuestro sitio
a producción, configuraremos las herramientas faltantes bajo las
mejores prácticas para lograrlo. </p>
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