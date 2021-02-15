import React, { Component } from 'react';
import "./Profile.css"
import Button from "../common/Button";

class Feedback extends Component {
    render() {
        return (
            <div>
                <div className="black"></div>
                <div className="box-share">
                    <div className="card_share">
                        <h2 className="sub">Cuéntanos, ¿Cómo te sientes utilizando la plataforma?</h2>
                        <textarea className="inp_comments" type="text" placeholder="Escribe aquí tus comentarios..." name="Comments" />
                        <Button text="Enviar" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback;