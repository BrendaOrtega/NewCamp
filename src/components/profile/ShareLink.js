import React, { Component } from 'react';
import "./Profile.css"
const envelop = "https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Ficon1.png?alt=media&token=34163865-30eb-4ca1-a375-cfbbfdcf9872"
const tv = "https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Ficon2.png?alt=media&token=1e78bd6e-e5df-43b2-be07-43b329ef9290"
const img = "https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2FConnected.svg?alt=media&token=92417c84-635e-4150-96bc-4ee1f4a07ff6"

class ShareLink extends Component {
    render() {
        return (
            <div>
                <div className="black"></div>
                <div className="box-share">
                    <div className="card_share">
                        <h2 className="sub">¡Comparte con tus amigos!</h2>
                        <p className="txt">Cuando tu amigo adquiera su primer curso, ambos obtendrán un descuento.</p>
                   
                        <div>
                            <img src={envelop} alt="icon-envelop"/>
                            <p className="promo">Obtén 10% para tu próximo curso.</p>
                        </div>
                        <div>
                            <img src={tv} alt="icon-tv"/>
                            <p className="promo">Tu amigo obtiene 10% para su primer curso curso.</p>
                        </div>
                        <div className="link_share">
                            <input className="input" type="text" placeholder="Link" name="personla-link" />
                            <button className="btn-copy">Copiar</button>
                        </div>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <img src={img} alt="ilustration-success"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShareLink;