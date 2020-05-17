import React, { Component } from 'react';
import "./Footer.css"
import FontAwesome from "react-fontawesome"
import { Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="box-footer">
                    <div className="box-one">
                        <h3 >FixterGeek</h3>
                        <p>La plataforma donde aprenderás las herramientas y frameworks más utilizados para el desarrollo de software.</p>
                    </div>
                    <div>
                        <h3>Sobre Nosotros</h3>
                        <Link to="/fixter-team">
                            <p>Nuestro Equipo</p>
                        </Link>
                        <Link to="/contacto">
                            <p>Contacto</p>
                        </Link>
                        <Link to="/preguntas-frecuentes">
                            <p>Preguntas Frecuentes</p>
                        </Link>

                    </div>
                    <div className="rec">
                        <h3>Recursos</h3>
                        <a href="https://medium.com/fixtergeek" target="_blank" rel="noopener noreferrer">
                            <p>Blog</p>
                        </a>
                        <a href="https://open.spotify.com/show/2cFrBnAB5o4Sk6mkU733QX" target="blank" rel="noopener noreferrer">
                            <p>Podcast</p>
                        </a>
                    </div>
                    <div className="redes">
                        <h3>Síguenos</h3>
                        <a href="https://www.facebook.com/fixterme/" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="facebook"/>
                        </a>
                        <a href="https://wa.me/5217757609276" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="whatsapp"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UC2cNZUym14-K-yGgOEAFh6g" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="youtube"/>
                        </a>
                        <a href="https://www.instagram.com/fixtergeek/?hl=es-la" target="blank" rel="noopener noreferrer">
                            <FontAwesome name="instagram"/>
                        </a>

                    </div>
                </div>
                <div className="copy">
                    <p>©2016 FixterGeek</p>
                    <Link to="/politicas-de-privacidad-fixter">
                        <p>Políticas de Privacidad</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer;