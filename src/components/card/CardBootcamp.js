import React from 'react';
import "./CourseCard.css"
import badge from "../../assets/badget1.png"
import {Link} from "react-router-dom";
import img from "../../assets/28698604_1973144766082686_589124668727305128_o.jpg";
import FontAwesome from "react-fontawesome";
import moment from "moment";
import js from "../../assets/JavaScript-logo.png"

export const CardBootcamp = ({image, name, descript, lecciones, tiempo, link, link2, action, thumbnail, badge, modalidad, lugar}) => {


    return (
        <Link to={link}>
            <div className="bootcamp-card">
                <div className="camp-banner" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="camp-avatar">
                    <img src={badge} alt="logo-javascript" />
                </div>
                <div style={{ padding: "0 6%", marginTop:"-12px" }}>
                    <h3>{name}</h3>
                    <p>{descript}️</p>
                    <p id="datos"> <FontAwesome  name="calendar" />  {tiempo} <span>&bull;</span> {lecciones}</p>
                    <p id="datos"> <FontAwesome name="copy" />  { lugar || "Examen final"}</p>
                    <p id="datos"> <FontAwesome name="tv" /> {modalidad} </p>
                </div>
            </div>
        </Link>

    );
};