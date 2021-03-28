import React, { useEffect } from 'react';
import "./Courses.css"
import {Link} from "react-router-dom";
import { Tabs } from 'antd';
import FontAwesome from "react-fontawesome"
import TagT from "../common/TagT"
import {Collapse} from "antd";
import bliss from "../../assets/67460673_10220365825273658_6972567135163777024_n.jpg"
import Button from "../common/Button";



const react = "https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fbadges_Mesa_de_trabajo_1_copia_3.png?alt=media&token=e91625bc-6438-4eb4-9fd0-abe6761bfd25"
const { TabPane } = Tabs;

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

export const CoursesDetailReact = () => {

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
                    <h2>Desarrollo Frontend con ReactJs + Redux</h2>
                    <p>
                    Ahora que tienes conocimientos en JavaScript, da el siguiente paso para convertirte en un desarrollador frontend con uno de los frameworks más populares, utilizado por Facebook, Tesla y Twitter.
                    </p>
                    <p id="price">$999.00 MXN</p>
                    <Link to="/promo/aprende-python">
                        <Button ico="{ }" text="Inscribirme" />
                    </Link>
                </div>
                <div className="detail-badge">
                    <img src={react} alt="curso-badge"/>
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
                            <h3>Aprende ReactJs como un profesional</h3>
                            <p> ReactJs es uno de los frameworks frontend más utilizados, que permite crear aplicaciones de forma rápida y escalable. Además, es utilizado en gran cantidad de
                            aplicaciones como Tesla, Facebook, WhatsApp.
                            </p>
                            <p>A lo largo del curso, aprenderás a crear un proyecto con ReactJs, crear la estructura de carpetas, componentes y agregar Redux para manejar el state. 
                                
                            </p>
                            <h3>¿A quién está dirigido?</h3>
                            <p>A todos aquellos que ya tienen conocimientos programación, especialmente en JavaScript.</p>
                            <h3>Requisitos</h3>
                            <p>Solo necesitarás tu computadora y todas las ganas de aprender y sumergirte en este maravilloso mundo.</p>
                            <h3>Herramientas</h3>
                            <TagT text="JavaScript"/> 
                            <TagT text="React"/> 
                            <TagT text="Redux"/> 
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
                                Aprender a programar en un bootcamp online es una tarea muy
                                intensa, por lo que antes de iniciar con el curso deberás
                                completar la</p>
                                <ul>
                                    <li>Que es ReactJs</li>
                                    <li>CodeSandbox</li>
                                    <li>Create-react-app</li>
                                    <li>Babel-Standalone</li>
                              
                                </ul>
                            </Panel>
                            <Panel header="Semana 1" key="2" style={{fontSize:"18px"}}>
                               <p>Ahora que has completado el prework, aprenderás a crear los distintos tipos de componentes, modularización
                                   estructura de carpetas y empezarás a manipular el state y usar props y eventos. 
                               </p>
                            </Panel>
                            <Panel header="Semana 2" key="3" style={{fontSize:"18px"}}>
                                <p>Después, aprenderemos a usar Yarn, crearemos componentes y les daremos estilos con CSS, 
                                    crearemos nuestro primer componente funcional (como un login) y usaremos
                                    react-router.
                                </p>
                            </Panel>
                            <Panel header="Semana 3" key="4" style={{fontSize:"18px"}}>
                                <p>Instalaremos y configuraremos Redux, Redux dev tools, y manipularemos el state. Además, 
                                    agregaremos Firebase para autenticar usuarios y como backend. 
                                </p>
                            </Panel>
                            <Panel header="Semana 4" key="5" style={{fontSize:"18px"}}>
                                <p> Por último, profundizaremos en el uso de Redux dentro del proyecto, 
                                    utilizando useSelector, Middlewares, completaremos el duck, y más.
                                     </p>
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