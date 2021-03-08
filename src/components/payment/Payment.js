import React, { Component } from 'react';
import Button from '../common/Button';
import "./Payment.css"
import tag from "../../assets/tag.svg"

class Payment extends Component {
    render() {
        return (
            <div className="payment">
                <div className="black"></div>
                <br/>
                <div className="payment-card">
                    <form className="payment-data">
                        <h4>Curso de Desarrollo Web</h4>
                        <p>Cuando tu amigo adquiera su primer curso, ambos obtendrán un descuento. Cuando tu amigo adquiera su primer curso. Cuando tu amigo adquiera su primer curso, ambos obtendrán un descuento.</p>
                        <input placeholder="Nombre completo"/>    
                        <hr/>
                        <h5>Curso de Desarrollo Web</h5>
                        <input placeholder="Nombre del titular de la tarjeta"/>    
                        <input placeholder="Número de tarjeta"/>    
                        <input id="inp" placeholder="Fecha de vencimiento"/>    
                        <input id="inp" style={{marginLeft:"4%"}} placeholder="CVV" />    
                        <br/>
                        <select placeholder="Nombre completo">
                            <option>Contado</option>
                            <option>3 meses sin intereses</option>
                            <option>6 meses sin intereses</option>
                            <option>12 meses sin intereses</option>
                        </select>   
                        <br/> 
                        <br/> 
                        <div style={{textAlign:"center"}}>
                            <Button text="Pagar"/>  
                        </div>
                   
                    </form>
                    <div className="payment-summary">
                        <div className="summary-box">
                            <h5>Curso de Desarrollo Web</h5>
                            <div className="quantity"><p>Curso de Desarrollo web</p> <p style={{color:"#323232"}}>$10,999.00 MXN</p></div>
                            <div className="quantity"><p>Descuento</p> <p style={{color:"#323232"}}>$00.00 MXN</p></div>
                            <hr style={{marginTop:"12px !important"}}/>
                            <p style={{color:"#323232"}}><img src={tag}/> ¿Tienes un código de descuento?</p>
                            <div className="code">
                                <input placeholder="Ingresa tu código"/><button>Canjear</button>
                            </div>
                        </div>
                        <p className="total">Total $ 10,999.00 MNX</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Payment;