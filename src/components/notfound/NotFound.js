import React from 'react';
import "./notfound.css";
import ImgAnimal from"../../assets/404 Error with a cute animal-pana 1.svg";
import ImgRocket from"../../assets/404 Error-rafiki 1.svg";

const Notfound = () => {

    function changeImage(){
        if (typeof(Storage) !== "undefined") {
            if(localStorage.getItem("notfound")==null)
            {
                localStorage.setItem("notfound", ImgAnimal );
            }
            else{
                localStorage.getItem("notfound")===ImgAnimal? localStorage.setItem("notfound", ImgRocket ):localStorage.setItem("notfound", ImgAnimal )
            }
            return localStorage.getItem("notfound")
        } 
        else {
            if(Math.random()>.5){
                return ImgAnimal
            }
            else{
                return ImgRocket
            }
        }
    }

    return (
        <div>
            <div className="black"></div>
            <div className="notfound-container"> 
                <h3>¡Ups! Página no encontrada.</h3>
                <img src={changeImage()} alt="Not found"></img>
            </div>
        </div>
    )
}

export default Notfound;