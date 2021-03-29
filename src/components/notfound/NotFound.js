import React from 'react';
import "./notfound.css";
import ImgAnimal from"../../assets/404 Error with a cute animal-pana 1.svg";
import ImgRocket from"../../assets/404 Error-rafiki 1.svg";

const Notfound = () => {
    return (
        <div>
            <div className="black"></div>
            <div className="notfound-container"> 
                <h3>¡Ups! Página no encontrada.</h3>
                <img src={ Math.random()>.5?ImgAnimal:ImgRocket} alt="Not found"></img>
            </div>
        </div>
    )
}

export default Notfound;