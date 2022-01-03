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
                <title>Preguntas Frecuentes | FixterGeek</title>
                <div className="black"></div>
                <div className="qa">
                    <h2 className="subtitulo space">Preguntas Frecuentes</h2>
                    <p>A continuación, incluimos algunas de las preguntas más frecuentes que recibimos.</p>
                    <br/>
                    <div className="box-ask">
                        <div className="ask">
                            <h3>¿Qué incluyen los cursos de Fixter?</h3>
                            <p>
                                Cada uno de nuestros cursos incluyen vídeos,
                                diapositivas, textos, tareas, recursos adicionales y un exámen final, el cuál debes aprobar para descargar tu certificado.
                                Al comprar un curso o bootcamp, estará disponible en tu perfil de forma permanente.
                                Además, los instructores pueden seguir agregando contenido así que asegúrate de volver regularmente.
                            </p>
                        </div>
                        <div className="ask">
                            <h3>¿Cómo puedo tomar un curso?</h3>
                            <p> Puedes ingresar al catálogo de cursos, revisar el temario, e inscribirte al que más te guste. El curso estará disponible en
                            tu perfil y puedes aprender a tu propio ritmo, puedes empezar el curso cuando quieras.
                            </p>
                        </div>
                    </div>
                    <div className="box-ask">
                        <div className="ask">
                            <h3>¿Cuánto tiempo tengo para completar un curso?</h3>
                            <p>
                                No tienes un plazo para iniciar o completar un curso, aprende a tu ritmo. Incluso, al concluirlo puedes regresar a revisar el contenido,
                                o revisar algún tema.
                            </p>
                        </div>
                        <div className="ask">
                            <h3>¿Cuál es el precio de los cursos?</h3>
                            <p> Los precios pueden variar entre cada curso o bootcamp, puedes entrar al detalle de cada uno para verificar su precio.  </p>
                        </div>
                    </div>
                    <div className="box-ask">
                        <div className="ask">
                            <h3>¿Qué formas de pago aceptan?</h3>
                            <p>
                                Puedes pagar con <strong>tarjetas de crédito o débito</strong> (Visa, MasterCard o AMEX). Además de facilidades de pago a 3 o 6 meses
                                sin intereses.
                                <br/>
                                También tenemos la opción de pagos offline como depósito bancario, pago en Oxxo o transferencia. Si quieres hacer uso de esta opciión, escríbenos a <strong ><a style={{color:"#ca3e47"}}
                                href="mailto:brenda@fixter.org">brenda@fixter.org</a></strong>
                            </p>
                        </div>
                        <div className="ask">
                            <h3>¿Entregan factura?</h3>
                            <p> Claro, al inscribirte a cualqueir curso o bootcamp, envíanos un mensaje solicitando tu factura
                                con tu email registrado y tus datos fiscales. En un máximo de 48 hrs te haremos llegar la factura. </p>
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