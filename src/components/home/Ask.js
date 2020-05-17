import React, { Component } from 'react';
import "./Home.css"
import Button from "../common/Button";
import {Link} from "react-router-dom"

class Ask extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <section >
                <meta
                    name="description"
                    content=" Completa el formulario y nos pondremos en contacto contigo lo antes posible."
                />
                <meta
                    name="keywords"
                    content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
                />
                <title>Contacto | FixterGeek</title>
                <div className="black"></div>
                <div className="qa">
                    <h2 className="subtitulo space">Preguntas Frecuentes</h2>
                    <br/>
                    <div className="box-ask">
                        <div className="ask">
                            <h3>¿Cuál es el precio de los cursos?</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi cumque hic magnam maiores nulla quo quod sed! Asperiores consequatur, doloribus excepturi in labore maiores nemo placeat sit temporibus. </p>
                        </div>
                        <div className="ask">
                            <h3>¿Cuál es el precio de los cursos?</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi cumque hic magnam maiores nulla quo quod sed! Asperiores consequatur, doloribus excepturi in labore maiores nemo placeat sit temporibus. </p>
                        </div>
                    </div>
                    <div className="box-ask">
                        <div className="ask">
                            <h3>¿Cuál es el precio de los cursos?</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi cumque hic magnam maiores nulla quo quod sed! Asperiores consequatur, doloribus excepturi in labore maiores nemo placeat sit temporibus. </p>
                        </div>
                        <div className="ask">
                            <h3>¿Cuál es el precio de los cursos?</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi cumque hic magnam maiores nulla quo quod sed! Asperiores consequatur, doloribus excepturi in labore maiores nemo placeat sit temporibus. </p>
                        </div>
                    </div>
                    <div className="box-ask">
                        <div className="ask">
                            <h3>¿Cuál es el precio de los cursos?</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi cumque hic magnam maiores nulla quo quod sed! Asperiores consequatur, doloribus excepturi in labore maiores nemo placeat sit temporibus. </p>
                        </div>
                        <div className="ask">
                            <h3>¿Cuál es el precio de los cursos?</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi cumque hic magnam maiores nulla quo quod sed! Asperiores consequatur, doloribus excepturi in labore maiores nemo placeat sit temporibus. </p>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div style={{textAlign:"center"}}>
                    <h3>¿Aún tienes alguna duda? Contáctanos.</h3>
                        <br/>
                        <Link to="/contacto">
                            <Button text="Contactar"/>
                        </Link>
                    </div>
                </div>

            </section>

        )
    }
}

export default Ask;